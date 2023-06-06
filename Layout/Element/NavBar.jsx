import {Fragment, useEffect, useState} from 'react';
import Link from 'next/link';
import {Container, Row} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'next-i18next';
import {getAPIData} from '../../Utils';
import {Menu, VoxoPlus} from '../../Components/Constant';
import useWindowDimensions from '../../Utils/useWindowDimensions';
import AddToHome from './AddToHome';
import ThreeBarToggle from './ThreeBarToggle';

const NavBar = ({customClass, mainMenu}) => {

    const {t} = useTranslation('common');
    const {width} = useWindowDimensions();
    const [headerData, setHeaderData] = useState([]);
    const [check, setCheck] = useState('');

    const {overlay, TopMenuToggle} = useSelector((state) => state.ModalReducer);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     getAPIData(`${process.env.API_URL}header`).then((res) => {
    //         setHeaderData(res?.data);
    //     });
    // }, []);


    // console.log(mainMenu?.menu_nodes, "mainMenu")
    // console.log(headerData, "headerData")

    const handleClick = () => {
        dispatch({type: 'TOPMENUTOGGLE'});
        dispatch({type: 'OVERLAY'});
    };
    return (
        <div className='main-navbar'>
            <div id='mainnav'>
                <ThreeBarToggle customClass={customClass}/>
                <ul className='nav-menu' style={{right: TopMenuToggle ? '0px' : '-410px'}}>
                    <li className='back-btn d-xl-none' onClick={() => handleClick(false)}>
                        <div className='close-btn'>
                            {Menu}
                            <span className='mobile-back'>
                <i className='fa fa-angle-left'></i>
              </span>
                        </div>
                    </li>
                    {mainMenu?.menu_nodes?.map((menu, i) => {
                        return (
                            <li className="dropdown" key={i}>
                               <Link href={menu.url}
                                     className={`nav-link ${menu?.child?.length > 0 ? "menu-title" : ""}`}
                                     onClick={() => setCheck(menu.title !== check && menu.title)}
                               >
                                    {(menu.title)}
                                    {overlay &&
                                        <span className='according-menu'>
                                            {menu?.child.length > 0 ? menu.title === check ? '-' : '+' : ""}</span>}
                               </Link>
                                <ul
                                    className='nav-submenu menu-content'
                                    style={{
                                        display: overlay ? (check === menu.title ? 'block' : 'none') : (menu?.child.length > 0 ? 'block' : "none"),
                                    }}>
                                    {menu?.child.map((result, i) => {
                                        return (
                                            <Fragment key={i}>
                                                {result.url && (
                                                    <li>
                                                        <Link
                                                            href={`${result?.url}`}
                                                            onClick={() => {
                                                                width < 1200 && dispatch({type: 'OVERLAY'});
                                                                dispatch({type: 'TOPMENUTOGGLE'});
                                                            }}>
                                                            {result?.title}
                                                            {/*{result?.badge && <span>{result?.badge}</span>}*/}
                                                        </Link>
                                                    </li>
                                                )}

                                            </Fragment>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                    <AddToHome/>
                </ul>
            </div>
        </div>
    );
};
export default NavBar;
