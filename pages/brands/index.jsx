import React from 'react';
import {APICallUrl} from "../../Components/Constant";
import Head from "next/head";
import ShopMainSection from "../../Components/Shop/ShopMainSection";
import FurnitureSlider from "../../Components/FurnitureDemo/FurnitureSlider";
import {SortingByNameFunction} from "../../Utils/sortingFunctions";
import Layout6 from "../../Layout/Layout6";
import ElectronicVR from "../../Components/ElectronicDemo/ElectronicVR";
import ElectronicHurryUp from "../../Components/ElectronicDemo/ElectronicHurryUp";
import BrandsMainSection from "../../Components/Shop/BrandsMainSection";

const Brands = ({data}) => {
    // console.log(data.brands)
    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <BrandsMainSection brands={SortingByNameFunction(data?.brands)}/>
            <ElectronicHurryUp tabSection={data?.specialOffer}/>
            <ElectronicVR productData={data?.newArrival}/>
        </Layout6>
    );
};

export async function getServerSideProps() {
    const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
    const brands = await fetch(`${APICallUrl}/api/brands`);
    const specialOffer = await fetch(`${APICallUrl}/api/get-products-with-categories-by-collection?collection=special-offer`);
    const newArrival = await fetch(`${APICallUrl}/api/get-products-by-collection?collection=new-arrival`);
    const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
    const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
    const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


    const data = {
        mainMenu: await mainMenu?.json(),
        brands: await brands?.json(),
        specialOffer: await specialOffer?.json(),
        newArrival: await newArrival?.json(),
        footerLeft: await footerLeft?.json(),
        footerCenter: await footerCenter?.json(),
        footerRight: await footerRight?.json(),


    }
    return {props: {data}}
}
export default Brands;