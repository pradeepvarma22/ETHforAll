// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // ONLY transferFrom need to used
import "@openzeppelin/contracts/access/Ownable.sol";

interface INFTMarketPlace is IERC721 {
    function createNFTByUser(string memory tokenURI, uint256 price)
        external
        payable
        returns (uint256);
}

contract NFTAuction is Ownable {
    uint256 private constant DURATION = 7 days;
    INFTMarketPlace public nft; // ONLY MY NFT CONTRACT

    address payable public seller; // owner

    uint256 public counter;

    struct IAuction {
        uint256 startingPrice;
        uint256 startAt;
        uint256 expiresAt;
        uint256 nftId;
        uint256 discountRate;
    }

    event Auction(
        uint256 startingPrice,
        uint256 startAt,
        uint256 expiresAt,
        uint256 nftId,
        uint256 discountRate
    );

    mapping(uint256 => IAuction) public auctions;

    constructor(address _nftMarketPlace) {
        counter = 1;
        seller = payable(msg.sender);
        nft = INFTMarketPlace(_nftMarketPlace);
    }

    function sellNFT(
        string memory tokenURI,
        uint256 price,
        uint256 disCountRate
    ) public onlyOwner {
        uint256 tokenId = nft.createNFTByUser(tokenURI, price);
        auctions[counter].startingPrice = price;
        auctions[counter].startAt = block.timestamp;
        auctions[counter].expiresAt = block.timestamp + DURATION;
        auctions[counter].nftId = tokenId;
        auctions[counter].discountRate = disCountRate;
        emit Auction(
            price,
            block.timestamp,
            block.timestamp + DURATION,
            tokenId,
            disCountRate
        );
    }

    function getPrice(uint256 _auctionId) public view returns (uint256) {
        uint256 timeElapsed = block.timestamp - auctions[_auctionId].startAt;
        uint256 discount = auctions[_auctionId].discountRate * timeElapsed;
        return auctions[_auctionId].startingPrice - discount;
    }

    function buy(uint256 _auctionId) external payable {
        require(
            block.timestamp < auctions[_auctionId].expiresAt,
            "This Nft Binding has ended"
        );
        uint256 price = getPrice(_auctionId);
        require(msg.value >= price, "Amount send is too low to buy");
        nft.transferFrom(seller, msg.sender, auctions[_auctionId].nftId);
        uint256 refund = msg.value - price;

        if (refund > 0) {
            payable(msg.sender).transfer(refund);
        }
    }
}
