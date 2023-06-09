import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {APICallUrl, CommonPath, VegetableStore} from '../Components/Constant';
import Layout6 from "../Layout/Layout6";
import VegetableHomeSlider from "../Components/VegetablesDemo/VegetableHomeSlider";
import FashionService from "../Components/FashionDemo/FashionService";
import VegetableTopBanner from "../Components/VegetablesDemo/VegetableTopBanner";
import VegetableFresh from "../Components/VegetablesDemo/VegetableFresh";
import VegetableOffer from "../Components/VegetablesDemo/VegetableOffers";
import VegetableDeal from "../Components/VegetablesDemo/VegetableDeal";
import VegetablePromo from "../Components/VegetablesDemo/VegetablePromo";
import FreshFruit from "../Components/VegetablesDemo/FreshFruit";
import VegetableHurryUp from "../Components/VegetablesDemo/VegetableHurryUp";
import VegetableNewsUpdate from "../Components/VegetablesDemo/VegetableNewsUpdate";
import FlowerSubscribe from "../Components/FlowerDemo/FlowerSubscribe";
import FlowerBrand from "../Components/FlowerDemo/FlowerBrand";
import StartModel from "../Layout/Element/StartModel";
import {getAPIData} from "../Utils";
// import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import FashionHomeSlider from "../Components/FashionDemo/FashionHomeSlider";
import ShoesHomeSlider from "../Components/ShoesDemo/ShoesHomeSlider";
import ElectronicHurryUp from "../Components/ElectronicDemo/ElectronicHurryUp";
import ElectronicVR from "../Components/ElectronicDemo/ElectronicVR";
import FurnitureSlider from "../Components/FurnitureDemo/FurnitureSlider";
import FashionShopByCategory from "../Components/FashionDemo/FashionShopByCategory";
import {SortingByNameFunction,} from "../Utils/sortingFunctions";

// export const getStaticProps = async ({ locale }) =>
//     ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

export default function Home({data}) {
    console.log(data)
    // const router = useRouter()
    // useEffect(() => {
    //   router.push('/layout/fashion')
    // }, [])
    // console.log(data.slider,'data')
    const [bannerData, setBannerData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [mainSlider, setMainSlider] = useState([]);
    const [tabSection, setTabSection] = useState([]);
    const [popularCard, setPopularCard] = useState([]);

    // useEffect(() => {
    //     document.documentElement.style.setProperty('--theme-color', '#b62427');
    //     const types = ['banner', 'products', 'homeslider',"tabsection","popular"];
    //     types.map((type) => {
    //         getAPIData(`${process.env.API_URL}${type}`).then((res) => {
    //             type === 'banner' && setBannerData(res?.data);
    //             type === 'products' && setProductData(res?.data);
    //             type === 'homeslider' && setMainSlider(res?.data);
    //             type === 'tabsection' && setTabSection(res?.data);
    //             type === 'popular' && setPopularCard(res?.data);
    //         });
    //     });
    // }, []);
    const isCategories = true;
    const removePadding = true;
    const addBgColor = true;

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
                <Head>
                    <title>KOA Shop</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1'/>
                    <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
                </Head>

                <VegetableHomeSlider mainSlider={mainSlider} slider={data.slider.slider_items} />
                <FashionService removePadding={removePadding} />
                <ElectronicHurryUp tabSection={data?.specialOffer}/>
                <FashionShopByCategory popularCard={data?.shopByCategory}/>
                <ElectronicVR productData={data?.newArrival}/>
                <VegetableDeal newOffer={data?.newOffer?.data}/>
                <FurnitureSlider brands={SortingByNameFunction(data?.brands?.data)}/>
                <FlowerSubscribe addBgColor={addBgColor}/>
            </Layout6>

        </>
    );
}

export async function getStaticProps() {
    const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
    const slider = await fetch(`${APICallUrl}/api/home-slider`);
    const specialOffer = await fetch(`${APICallUrl}/api/get-products-with-categories-by-collection?collection=special-offer`);
    const shopByCategory = await fetch(`${APICallUrl}/api/get-featured-product-categories`);
    const newArrival = await fetch(`${APICallUrl}/api/get-products-by-collection?collection=new-arrival`);
    const newOffer = await fetch(`${APICallUrl}/api/brands?per_page=2&page=1&new_offer=true`);
    const brands = await fetch(`${APICallUrl}/api/brands?per_page=13&page=1&is_featured=true`);
    const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
    const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
    const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


    const data = {
        mainMenu: await mainMenu?.json(),
        slider: await slider?.json(),
        specialOffer: await specialOffer?.json(),
        shopByCategory: await shopByCategory?.json(),
        newArrival: await newArrival?.json(),
        newOffer: await newOffer?.json(),
        brands: await brands?.json(),
        footerLeft: await footerLeft?.json(),
        footerCenter: await footerCenter?.json(),
        footerRight: await footerRight?.json(),


    }
    return {props: {data}}
}