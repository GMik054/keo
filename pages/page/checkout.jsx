import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useEffect } from 'react';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import Layout1 from '../../Layout/Layout1';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe/index';
import SectionCheckout from '../../Components/Pages/Checkout';
import { firebase_app } from '../../Config/firebase';
import Logins from './login';
import Layout6 from "../../Layout/Layout6";
import ElectronicVR from "../../Components/ElectronicDemo/ElectronicVR";
import {getAPIData} from "../../Utils";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Checkout = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // firebase_app.auth().onAuthStateChanged(currentUser);
    document.documentElement.style.setProperty('--theme-color', '#b62427');
    const types = [ 'products'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {

        type === 'products' && setProductData(res?.data);
      });
    });
  }, []);
  return (
    <>
      {currentUser !== null ? (
        <Layout6>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`} />
          </Head>
          {/*<BreadCrumb parent={'Checkout'} title={'Checkout'} />*/}
          <SectionCheckout />
          <ElectronicVR productData={productData} />

          <FlowerSubscribe />
        </Layout6>
      ) : (
        <Logins />
      )}
    </>
  );
};

export default Checkout;
