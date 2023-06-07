import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {CommonPath} from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import ProductCart from '../../Components/Pages/Cart';
import Layout1 from '../../Layout/Layout1';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe/index';
import Layout6 from "../../Layout/Layout6";
import {getAPIData} from "../../Utils";
import ElectronicVR from "../../Components/ElectronicDemo/ElectronicVR";

export const getStaticProps = async ({locale}) => ({props: {...(await serverSideTranslations(locale, ['common']))}});

const Cart = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const types = ['products', 'tabsection'];
        types.map((type, i) => {
            getAPIData(`${process.env.API_URL}${type}`).then((res) => {
                type === 'products' && setProductData(res?.data);
            });
        });
    }, []);
    return (
        <Layout6>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`} />
            </Head>
            {/*<BreadCrumb parent={'Cart'} title={'Cart'}/>*/}
            <ProductCart productData={productData}/>
            <ElectronicVR productData={productData} />
            <FlowerSubscribe/>
        </Layout6>
    );
};

export default Cart;
