import Head from 'next/head';
import React from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useEffect } from 'react';
import {getAPIData} from "../Utils";
import Layout6 from "../Layout/Layout6";
import SectionCheckout from "../Components/Pages/Checkout";
import ElectronicVR from "../Components/ElectronicDemo/ElectronicVR";
import FlowerSubscribe from "../Components/FlowerDemo/FlowerSubscribe";
import {APICallUrl} from "../Components/Constant";


// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Checkout = ({data}) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   // firebase_app.auth().onAuthStateChanged(currentUser);
  //   document.documentElement.style.setProperty('--theme-color', '#b62427');
  //   const types = [ 'products'];
  //   types.map((type) => {
  //     getAPIData(`${process.env.API_URL}${type}`).then((res) => {
  //
  //       type === 'products' && setProductData(res?.data);
  //     });
  //   });
  // }, []);
  return (
    // <>
    //   {currentUser !== null ?
    //       : (
    //           <Logins />
    //       )}
    // </>
          (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`} />
          </Head>
          {/*<BreadCrumb parent={'Checkout'} title={'Checkout'} />*/}
          <SectionCheckout />
          <ElectronicVR productData={data?.newArrival}/>
          <FlowerSubscribe />
        </Layout6>
      )

  );
};

export async function getServerSideProps() {
  const mainMenu = await fetch(`${APICallUrl}/api/main-menu?slug=main-menu`);
  const newArrival = await fetch(`${APICallUrl}/api/get-products-by-collection?collection=new-arrival`);
  const footerLeft = await fetch(`${APICallUrl}/api/main-menu?slug=footer`);
  const footerCenter = await fetch(`${APICallUrl}/api/main-menu?slug=categories`);
  const footerRight = await fetch(`${APICallUrl}/api/main-menu?slug=get-help`);


  const data = {
    mainMenu: await mainMenu?.json(),
    newArrival: await newArrival?.json(),
    footerLeft: await footerLeft?.json(),
    footerCenter: await footerCenter?.json(),
    footerRight: await footerRight?.json(),


  }
  return {props: {data}}
}

export default Checkout;
