import React from 'react';
import Layout6 from "../../Layout/Layout6";
import Head from "next/head";
import BreadCrumb from "../../Components/Element/BreadCrumb";
import ShopLeftSidebarContain from "../../Components/Shop/ShopLeftSidebarContain";
import FlowerSubscribe from "../../Components/FlowerDemo/FlowerSubscribe";
import CanvasOffset from "../../Components/Shop/ShopCanvasFilter/CanvasOffset";
import {APICallUrl} from "../../Components/Constant";
import FurnitureSlider from "../../Components/FurnitureDemo/FurnitureSlider";
import {SortingByNameFunction} from "../../Utils/sortingFunctions";
import ShopMainSection from "../../Components/Shop/ShopMainSection";
import VegetableDeal from "../../Components/VegetablesDemo/VegetableDeal";
import ElectronicHurryUp from "../../Components/ElectronicDemo/ElectronicHurryUp";
import ElectronicVR from "../../Components/ElectronicDemo/ElectronicVR";

const Shop = ({data}) => {
    // console.log(data)
    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <ShopMainSection categories={SortingByNameFunction(data?.categories?.data)}/>
            <FurnitureSlider brands={SortingByNameFunction(data?.brands?.data)}/>
            <VegetableDeal newOffer={data?.newOffer?.data}/>
            <ElectronicHurryUp tabSection={data?.specialOffer}/>
            <ElectronicVR productData={data?.newArrival}/>
        </Layout6>
    );
};

export async function getStaticProps() {
    const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
    const categories = await fetch(`${APICallUrl}/api/categories`);
    const brands = await fetch(`${APICallUrl}/api/brands?per_page=13&page=1&is_featured=true`);
    const newOffer = await fetch(`${APICallUrl}/api/brands?per_page=2&page=1&new_offer=true`);
    const specialOffer = await fetch(`${APICallUrl}/api/get-products-with-categories-by-collection?collection=special-offer`);
    const newArrival = await fetch(`${APICallUrl}/api/get-products-by-collection?collection=new-arrival`);
    const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
    const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
    const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


    const data = {
        mainMenu: await mainMenu?.json(),
        categories: await categories?.json(),
        brands: await brands?.json(),
        newOffer: await newOffer?.json(),
        specialOffer: await specialOffer?.json(),
        newArrival: await newArrival?.json(),
        footerLeft: await footerLeft?.json(),
        footerCenter: await footerCenter?.json(),
        footerRight: await footerRight?.json(),


    }
    return {props: {data}}
}

export default Shop;