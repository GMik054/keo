import Head from 'next/head';
import React from 'react';
import BecomeCustomer from "../Components/Pages/BecomeCustomer";
import FlowerSubscribe from "../Components/FlowerDemo/FlowerSubscribe";
import Layout6 from "../Layout/Layout6";
import {APICallUrl} from "../Components/Constant";

const BecomeACustomer = ({data}) => {

    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <BecomeCustomer/>
            <FlowerSubscribe/>
        </Layout6>
    );
};


export async function getServerSideProps() {
    const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
    const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
    const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
    const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


    const data = {
        mainMenu: await mainMenu?.json(),
        footerLeft: await footerLeft?.json(),
        footerCenter: await footerCenter?.json(),
        footerRight: await footerRight?.json(),


    }
    return {props: {data}}
}

export default BecomeACustomer;