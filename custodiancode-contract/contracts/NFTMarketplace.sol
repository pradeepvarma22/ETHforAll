// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    Counters.Counter public _itemsSold;

    struct NFTItem {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool currentlyListed;
        bool isFiat;
        string socialId;
        bool hasTxnDone;
        string txnId;
    }

    event TokenListedSuccess(
        uint256 indexed tokenId,
        address owner,
        address seller,
        uint256 price,
        bool currentlyListed,
        bool isFiat,
        string socialId
    );

    mapping(uint256 => NFTItem) private idToNFTItem;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function getLatestIdToNFTItem() public view returns (NFTItem memory) {
        uint256 currentTokenId = _tokenIds.current();
        return idToNFTItem[currentTokenId];
    }

    function getNFTItemForId(uint256 tokenId)
        public
        view
        returns (NFTItem memory)
    {
        return idToNFTItem[tokenId];
    }

    function createNFTByUser(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        idToNFTItem[newTokenId] = NFTItem(
            newTokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true,
            false,
            "",
            false,
            ""
        );

        _transfer(msg.sender, address(this), newTokenId);
        emit TokenListedSuccess(
            newTokenId,
            address(this),
            msg.sender,
            price,
            true,
            false,
            ""
        );

        return newTokenId;
    }

    function createNFTByAdmin(
        string memory tokenURI,
        string memory _socialId,
        uint256 price
    ) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        require(!isStringEmpty(_socialId), "Need Social Id");

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        idToNFTItem[newTokenId] = NFTItem(
            newTokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true,
            true,
            _socialId,
            false,
            ""
        );

        _transfer(msg.sender, address(this), newTokenId);
        emit TokenListedSuccess(
            newTokenId,
            address(this),
            msg.sender,
            price,
            true,
            true,
            _socialId
        );

        return newTokenId;
    }

    function executeSale(uint256 tokenId) public payable {
        uint256 price = idToNFTItem[tokenId].price;
        address seller = idToNFTItem[tokenId].seller;
        require(msg.value >= price, "submit the asking price");

        idToNFTItem[tokenId].currentlyListed = true;
        idToNFTItem[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId);
        payable(seller).transfer(msg.value);
    }

    function executeSaleByAdmin(uint256 tokenId, string memory _txnId)
        public
        onlyOwner
    {
        idToNFTItem[tokenId].currentlyListed = true;
        idToNFTItem[tokenId].hasTxnDone = true;
        idToNFTItem[tokenId].txnId = _txnId;
        _itemsSold.increment();
    }

    function getAllNFTs() public view returns (NFTItem[] memory) {
        uint256 nftCount = _tokenIds.current();
        NFTItem[] memory tokens = new NFTItem[](nftCount);
        uint256 currentIndex = 0;
        uint256 currentId;

        for (uint256 i = 0; i < nftCount; i++) {
            currentId = i + 1;
            NFTItem storage currentItem = idToNFTItem[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;
        }

        return tokens;
    }

    function getMyNFTs(bool _isFiat, string memory _socialId)
        public
        view
        returns (NFTItem[] memory)
    {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        uint256 currentId;
        NFTItem[] memory items = new NFTItem[](itemCount);

        if (_isFiat) {
            for (uint256 i = 0; i < totalItemCount; i++) {
                if (compare(idToNFTItem[i + 1].socialId, _socialId)) {
                    itemCount += 1;
                }
            }

            for (uint256 i = 0; i < totalItemCount; i++) {
                if (compare(idToNFTItem[i + 1].socialId, _socialId)) {
                    currentId = i + 1;
                    NFTItem storage currentItem = idToNFTItem[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
                }
            }
        } else {
            for (uint256 i = 0; i < totalItemCount; i++) {
                if (
                    idToNFTItem[i + 1].owner == msg.sender ||
                    idToNFTItem[i + 1].seller == msg.sender
                ) {
                    itemCount += 1;
                }
            }

            for (uint256 i = 0; i < totalItemCount; i++) {
                if (
                    idToNFTItem[i + 1].owner == msg.sender ||
                    idToNFTItem[i + 1].seller == msg.sender
                ) {
                    currentId = i + 1;
                    NFTItem storage currentItem = idToNFTItem[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
                }
            }
        }
        return items;
    }

    function isStringEmpty(string memory _test) internal pure returns (bool) {
        bytes memory checkString = bytes(_test);
        if (checkString.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    function compare(string memory str1, string memory str2)
        public
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(str1)) ==
            keccak256(abi.encodePacked(str2));
    }
}
