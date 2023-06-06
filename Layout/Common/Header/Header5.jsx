import React, {useState} from 'react';
import {Percent, RefreshCw} from 'react-feather';
import {Col,  Row} from 'reactstrap';
import {useHeaderScroll} from '../../../Utils/HeaderScroll';
import AllCategories from '../../Element/AllCategories';
import HeadingLogo from '../../Element/HeadingLogo';
import ItemCart from '../../Element/ItemCart';
import SearchBarToggle from '../../Element/SearchBarToggle';
import SearchBarWithBgColor from '../../Element/SearchBarWithBgColor';
import SearchForVegitable from '../../Element/SearchForVegitable';
import ThreeBarToggle from '../../Element/ThreeBarToggle';
import TopHeaderBar2 from '../../Element/TopHeaderBar2';
import WishList from '../../Element/WishList';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import AdminUser from "../../Element/AdminUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Log from '../../../public/assets/images/Vector.png'
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "../../../ReduxToolkit/store";
import NavBar from "../../Element/NavBar";

const Header5 = ({noStyle,  mainMenu}) => {

    const [isOpen, setIsOpen] = useState(false);
    const UpScroll = useHeaderScroll(false);

    return (
        <header id='home' className={`${!noStyle ? `${UpScroll ? 'nav-down nav-up' : ''}` : ''} `}>
            <TopHeaderBar2/>
            <div className="navbar-searchbar">
                <div className='main-header search-header' style={{backgroundColor: "#0D2427"}}>
                    <div className='container-fluid-lg'>
                        <Row>
                            <Col lg='12'>
                                <div className='main-menu'>
                                    <div className='menu-left'>
                                        <HeadingLogo/>
                                    </div>
                                    <SearchForVegitable/>
                                    {/*<SearchBarToggle />*/}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='main-header' >
                    <div className='container-fluid-lg' style={{backgroundColor: " #eff2f7"}}>
                        <Row>
                            <Col lg='12'>
                                <div className='main-menu'>
                                    <nav>
                                        <NavBar mainMenu={mainMenu}/>
                                    </nav>
                                    <div className='menu-right'>
                                        <ul>
                                            {/*<li>*/}
                                            {/*  <ThreeBarToggle />*/}
                                            {/*</li>*/}
                                            {/*<SearchBarWithBgColor customeClass={'d-lg-none d-block'} />*/}
                                            {/*<li className='onhover-dropdown wislist-dropdown'>*/}
                                            {/*  <div className='cart-media'>*/}
                                            {/*    <div className='cart-icon'>*/}
                                            {/*      <RefreshCw />*/}
                                            {/*      <span className='label label-theme rounded-pill'>0</span>*/}
                                            {/*    </div>*/}
                                            {/*    <div className='cart-content'>*/}
                                            {/*      <h6>Empty</h6>*/}
                                            {/*      <span>Compare</span>*/}
                                            {/*    </div>*/}
                                            {/*  </div>*/}
                                            {/*</li>*/}

                                            <AllCategories/>
                                            {/*<li className='onhover-dropdown account-dropbox'>*/}
                                            {/*    <div className='cart-media'>*/}
                                            {/*        <img className="percent-image"*/}
                                            {/*             src={"/assets/images/Vector.png"}/>*/}
                                            {/*        <Percent*/}
                                            {/*            size={15}*/}
                                            {/*            className="percent"*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*</li>*/}
                                            {/*<WishList />*/}
                                            <PersistGate loading={null} persistor={persistor}>
                                                <AdminUser/>
                                            </PersistGate>
                                            <ItemCart/>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header5;
