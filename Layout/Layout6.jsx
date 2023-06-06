import React from 'react';
import Cookie1 from './Common/Cookie/Cookie1';
import ThemeCustomizer from './Common/Customizer';
import Footers from './Common/Footer';
import Header5 from './Common/Header/Header5';
import StarterLoader from './Common/Loader';
import TapTop from './Common/TapTop';

const Layout6 = ({children, mainMenu, data}) => {
    const QuestionTab = true;
    return (
        <>
            {/*<StarterLoader />*/}
            <Header5 mainMenu={mainMenu}/>
            {children}
            {/*<ThemeCustomizer />*/}
            {/*<Cookie1 />*/}
            <TapTop/>
            <Footers QuestionTab={QuestionTab} data={data}/>
        </>
    );
};
export default Layout6;
