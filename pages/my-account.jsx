import Head from 'next/head';
import React from 'react';
import MyAccountMainSection from "../Components/Pages/UserDashboard/MyAccountMainSection";
import MyOrdersSection from "../Components/Pages/UserDashboard/MyOrdersSection";
import MyProjectsSection from "../Components/Pages/UserDashboard/MyProjectsSection";
import MyAccountInquirySection from "../Components/Pages/UserDashboard/MyAccountInquirySection";
import MyQuickOrder from "../Components/Pages/UserDashboard/MyQuickOrder";
import MyStartReturnSection from "../Components/Pages/UserDashboard/MyStartReturnSection";
import DashboardSidebar from "../Components/Pages/UserDashboard/DashboardSidebar";
import PaymentCardModal from "../Components/Pages/UserDashboard/PaymentCardModal";
import SaveAddressModal from "../Components/Pages/UserDashboard/SaveAddressModal";
import ProfileModal from "../Components/Pages/UserDashboard/ProfileModal";
import Layout6 from "../Layout/Layout6";
import {APICallUrl} from "../Components/Constant";
const UserDashboard = ({data}) => {

    return (
        <Layout6 mainMenu={data?.mainMenu[0]} data={data}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            {/*<BreadCrumb parent={'User Dashboard'} title={'User Dashboard'} />*/}
            <MyAccountMainSection/>
            <MyOrdersSection/>
            <MyProjectsSection/>
            {/*<MyAccountInquirySection/>*/}
            <MyQuickOrder/>
            <MyStartReturnSection/>
            {/*<DashboardSidebar/>*/}
            {/*<PaymentCardModal/>*/}
            {/*<SaveAddressModal/>*/}
            {/*<ProfileModal/>*/}
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

export default UserDashboard;
