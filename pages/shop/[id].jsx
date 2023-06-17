import Head from 'next/head';
import React, {useEffect, useState} from 'react';
// import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {APICallUrl, CommonPath} from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ShopLeftSidebarContain from '../../Components/Shop/ShopLeftSidebarContain';
import Layout1 from '../../Layout/Layout1';
import {getAPIData} from '../../Utils';
import CanvasOffset from '../../Components/Shop/ShopCanvasFilter/CanvasOffset';
import Layout6 from "../../Layout/Layout6";
import FashionCategory from "../../Components/FashionDemo/FashionCategory";
import ShoesCategory from "../../Components/ShoesDemo/ShoesCategory";
import ElectronicHurryUp from "../../Components/ElectronicDemo/ElectronicHurryUp";
import {
    selectFilterBrands, selectShopCategory, selectShopFilters,
    selectShopProducts, setShopCategory,
    setShopFilters,
    setShopProducts
} from "../../ReduxToolkit/Slices/ShopProductsSlice";
import {useDispatch, useSelector} from "react-redux";

// export const getStaticProps = async ({locale}) => ({props: {...(await serverSideTranslations(locale, ['common']))}});

const ShopLeftSidebar = ({data}) => {
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

    // console.log(data,"dataa")
    // console.log(shopCategory, 'shopCategory')
    // console.log(shopFilters, 'shopFilters')
    // console.log(filterBrands, 'filterBrands')
    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            {
                Object.keys(shopProducts).length !== 0 ?
                    <>
                        <BreadCrumb parent={`Shop / ${shopCategory?.name}`} title={shopCategory?.name}
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
    const categoriesData = await fetch(`${APICallUrl}/shop/${params?.id}?per_page=12&json=true`);
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


    }
    return {props: {data}}
}

export default ShopLeftSidebar;
