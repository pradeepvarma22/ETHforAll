import { useContext, useEffect, useState } from 'react';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { IAuctionEx, IStore } from '@/types';
import { getAllAuctionNfts } from '@/utils/nft';
import { setAuctionNfts } from '@/state/app-slice';
import { store } from '@/state/store';
import { useSelector } from 'react-redux';
import { TbDiscount } from "react-icons/tb";
import { BiTimer } from "react-icons/bi"


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            {/* <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="6xl"
                cursor="pointer"
            /> */}
            <img src='/point-left.png' className='w-52' onClick={() => scrollPrev()} />
        </Flex>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            {/* <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            /> */}
            <img src='/point-right.png' className='w-52' onClick={() => scrollNext()} />

        </Flex>
    );
};


function timeConverter(UNIX_timestamp: number) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

const AuctionList: React.FC = () => {


    const data = useSelector((state: IStore) => state.auctionNfts)



    async function getAuctionNfts() {
        const _data: IAuctionEx[] = await getAllAuctionNfts()
        store.dispatch(setAuctionNfts(_data))
    }


    async function onPageLoad() {
        await getAuctionNfts()
    }


    async function handleClick() {
        console.log('click')
    }



    useEffect(() => {
        onPageLoad()
    }, [])

    return (

        <>
            <div className=''>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                >

                    {data.map((nft: IAuctionEx, index) => (

                        <Box key={index} width="400px" itemID={String(nft.nftId)} overflow="hidden" p="5" onClick={handleClick}>
                            <img className="object-fill h-80 w-96" src={nft.image} />
                            <div>
                                <div>{nft.name}</div>
                                <div>{nft.startingPrice} BIT</div>
                                <div className="flex items-center">
                                    <span> {nft.discountRate} </span>
                                    <TbDiscount size={30} className="mr-2 px-1" style={{ color: 'red' }} />
                                </div>
                                <div className="flex items-center">
                                    <BiTimer style={{ color: 'white' }} size={20} className="mr-2" />
                                    <div className='px-1'>{timeConverter(nft.expiresAt)} </div>
                                </div>
                            </div>
                        </Box>
                    ))}



                </ScrollMenu>
            </div>
        </>
    )
};

export default AuctionList;