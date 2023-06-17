import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {APICallUrl, CommonPath} from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ProductSection from '../../Components/Products/Product4ImageContain/ProductSection';
import ProductRightSidebarContain from '../../Components/Products/ProductRightSidebarContain.jsx';
import RecentNotification from '../../Components/Products/RecentNotification';
import StickyFooter from '../../Components/Products/StickyFooter';
import Layout1 from '../../Layout/Layout1';
import {getAPIData} from '../../Utils';
// import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Layout6 from "../../Layout/Layout6";
import ElectronicHurryUp from "../../Components/ElectronicDemo/ElectronicHurryUp";
import ElectronicVR from "../../Components/ElectronicDemo/ElectronicVR";
import DetainTabSection from "../../Components/Products/Common/DetailTabsection";
import {setShopProducts} from "../../ReduxToolkit/Slices/ShopProductsSlice";

// export const getStaticProps = async ({locale}) => ({props: {...(await serverSideTranslations(locale, ['common']))}});

const Product = ({data}) => {
    const [productData, setProductData] = useState([]);
    // const [tabSection, setTabSection] = useState([]);
    useEffect(() => {
        if (data?.product?.product) {
            fetch(`${APICallUrl}/ajax/related-products/${data?.product?.product?.id}?limit=20&json=true`)
                .then(res => res.json().then(res => {
                        setProductData(res)
                        // console.log(res,"RESS")
                    })
                )
        }

    }, []);
    const paddingBottom = "0";
    // console.log(data, "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <BreadCrumb parent={`item / ${data?.product?.product?.name}`}/>
            <ProductRightSidebarContain singleProduct={data?.product}/>
            {/*<ProductSection productData={productData} />*/}


            <ElectronicVR productData={productData && productData} title="Accessories"/>

            <ElectronicVR productData={data?.newArrival} paddingBottom={paddingBottom}/>
            <ElectronicVR productData={data?.newArrival} paddingBottom={paddingBottom}/>

            <ElectronicHurryUp tabSection={data?.specialOffer}/>

            <FlowerSubscribe/>
            {/*<RecentNotification/>*/}
            {/*<StickyFooter productData={productData}/>*/}
        </Layout6>
    );
};

export async function getServerSideProps({params}) {
    const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
    const product = await fetch(`${APICallUrl}/item/${params?.id}?json=true`);
    const newArrival = await fetch(`${APICallUrl}/api/get-products-by-collection?collection=new-arrival`);
    const specialOffer = await fetch(`${APICallUrl}/api/get-products-with-categories-by-collection?collection=special-offer`);
    const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
    const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
    const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


    const data = {
        mainMenu: await mainMenu?.json(),
        product: await product?.json(),
        newArrival: await newArrival?.json(),
        specialOffer: await specialOffer?.json(),
        footerLeft: await footerLeft?.json(),
        footerCenter: await footerCenter?.json(),
        footerRight: await footerRight?.json(),
    }
    return {props: {data}}
}

export default Product;