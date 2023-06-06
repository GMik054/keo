import React, {useEffect, useState} from 'react';
import {getAPIData} from "../Utils";
import Layout6 from "../Layout/Layout6";
import Head from "next/head";
import BecomeCustomer from "../Components/Pages/BecomeCustomer";
import FlowerSubscribe from "../Components/FlowerDemo/FlowerSubscribe";
import About from "../Components/AboutUs";

const AboutUs = () => {
    return (
        <Layout6>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <About/>
            {/*<BecomeCustomer/>*/}
            <FlowerSubscribe/>
        </Layout6>
    );
};

export default AboutUs;