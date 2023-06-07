import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {APICallUrl, CommonPath} from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import DashboardSidebar from '../../Components/Pages/UserDashboard/DashboardSidebar';
import Layout1 from '../../Layout/Layout1';
import PaymentCardModal from '../../Components/Pages/UserDashboard/PaymentCardModal';
import ProfileModal from '../../Components/Pages/UserDashboard/ProfileModal';
import SaveAddressModal from '../../Components/Pages/UserDashboard/SaveAddressModal';
import Layout6 from "../../Layout/Layout6";
import MyAccountMainSection from "../../Components/Pages/UserDashboard/MyAccountMainSection";
import MyOrdersSection from "../../Components/Pages/UserDashboard/MyOrdersSection";
import MyProjectsSection from "../../Components/Pages/UserDashboard/MyProjectsSection";
import MyAccountInquirySection from "../../Components/Pages/UserDashboard/MyAccountInquirySection";
import MyQuickOrder from "../../Components/Pages/UserDashboard/MyQuickOrder";
import MyStartReturnSection from "../../Components/Pages/UserDashboard/MyStartReturnSection";
import {selectLoginToken, setAuth, setLoginToken, setUser} from "../../ReduxToolkit/Slices/LoginSlice";
import {useDispatch, useSelector} from "react-redux";

export const getStaticProps = async ({locale}) => ({props: {...(await serverSideTranslations(locale, ['common']))}});

const UserDashboard = () => {
    let loginToken = useSelector(selectLoginToken)
    let dispatch = useDispatch();
    // let [local,setLocal]= useState("")
    console.log(loginToken,"loginToken")
    // useEffect(() => {
    //     let local =JSON.parse(JSON.parse(localStorage.getItem('persist:root')).LoginTokenSlice)
    //     if (local.auth === false) {
    //         dispatch(setUser(local?.authUser))
    //         dispatch(setLoginToken(local?.loginToken))
    //         dispatch(setAuth(local?.auth))
    //     }
    //
    // }, []);


    return (
        <Layout6>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`}/>
            </Head>
            {/*<BreadCrumb parent={'User Dashboard'} title={'User Dashboard'} />*/}
            <MyAccountMainSection/>
            <MyOrdersSection/>
            <MyProjectsSection/>
            <MyAccountInquirySection/>
            <MyQuickOrder/>
            <MyStartReturnSection/>
            <DashboardSidebar/>
            <PaymentCardModal/>
            <SaveAddressModal/>
            <ProfileModal/>
        </Layout6>
    );
};

export default UserDashboard;
