import React, {useEffect, useState} from 'react';
import Layout6 from "../../../Layout/Layout6";
import Head from "next/head";
import {APICallUrl} from "../../../Components/Constant";
import {useDispatch, useSelector} from "react-redux";
import {
    selectShopCategory,
    selectShopFilters,
    selectShopProducts, setShopCategory, setShopFilters, setShopProducts
} from "../../../ReduxToolkit/Slices/ShopProductsSlice";
import BreadCrumb from "../../../Components/Element/BreadCrumb";
import ShopLeftSidebarContain from "../../../Components/Shop/ShopLeftSidebarContain";
import ElectronicHurryUp from "../../../Components/ElectronicDemo/ElectronicHurryUp";
import FlowerSubscribe from "../../../Components/FlowerDemo/FlowerSubscribe";

const Category = ({data}) => {
    const [productData, setProductData] = useState([]);
    const [categoryBanner, setCategoryBanner] = useState([]);
    const [tabSection, setTabSection] = useState([]);
    // useEffect(() => {
    //     const types = ['products','categorybanner','tabsection'];
    //     types.map((type) => {
    //         getAPIData(`${process.env.API_URL}${type}`).then((res) => {
    //             type === 'products' && setProductData(res?.data);
    //             type === 'categorybanner' && setCategoryBanner(res?.data);
    //             type === 'tabsection' && setTabSection(res?.data);
    //         });
    //     });
    // }, []);
    let shopCategory = useSelector(selectShopCategory);
    let shopFilters = useSelector(selectShopFilters);
    let shopProducts = useSelector(selectShopProducts);
    // let filterBrands = useSelector(selectFilterBrands);

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setShopCategory(data?.categoriesData?.category))
        dispatch(setShopFilters(data?.categoriesData?.filters))
        dispatch(setShopProducts(data?.categoriesData?.products))
    }, [])


    const listGrid = true;
    const bottom = 80;

    console.log(data,"dataa")
    // console.log(shopCategory, 'shopCategory')
    // console.log(shopFilters, 'shopFilters')
    // console.log(filterBrands, 'filterBrands')
    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <title>{shopCategory?.name}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            {
                Object.keys(shopProducts).length !== 0 ?
                    <>
                        <BreadCrumb parent={`Shop / ${shopCategory?.parent?.name} / ${shopCategory?.name}`} title={shopCategory?.name}
                                    categoryBanner={shopCategory?.active_children}/>
                        <ShopLeftSidebarContain shopProducts={shopProducts} shopFilters={shopFilters} listGrid={listGrid}/>
                    </>

                    : ""
            }

            <ElectronicHurryUp tabSection={data?.specialOffer}/>
            <FlowerSubscribe/>
            {/*<CanvasOffset productData={productData}/>*/}
        </Layout6>
    );
};

export async function getServerSideProps({params}) {
    const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
    const categoriesData = await fetch(`${APICallUrl}/shop/${params?.category}?per_page=12&json=true`);
    const specialOffer = await fetch(`${APICallUrl}/api/get-products-with-categories-by-collection?collection=special-offer`);
    const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
    const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
    const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


    const data = {
        mainMenu: await mainMenu?.json(),
        categoriesData: await categoriesData?.json(),
        specialOffer: await specialOffer?.json(),
        footerLeft: await footerLeft?.json(),
        footerCenter: await footerCenter?.json(),
        footerRight: await footerRight?.json(),
        params:params


    }
    return {props: {data}}
}

export default Category;