import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import {Allcategories, CommonPath, PromotionalCatalog} from '../../Components/Constant';
import { Btn } from '../../Components/AbstractElements';
import { getAPIData } from '../../Utils/index';
import useWindowDimensions from '../../Utils/useWindowDimensions';
import CategoryResp from './CategoryResp';

const AllCategories = ({ isCategories }) => {
  const { width } = useWindowDimensions();
  const [getCategoryData, setCategoryData] = useState([]);
  const [isChecked, setIsChecked] = useState('');
  const [subChild, setSubChild] = useState('');
  const { catergoryResponsive } = useSelector((state) => state.ModalReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getAPIData(`${process.env.API_URL}categorymenu`).then((res) => {
  //     setCategoryData(res?.data);
  //   });
  // }, []);

  return (
    <li className='category-menu onhover-dropdown wislist-dropdown'>
      {/*{isCategories && (*/}
        <Btn
          attrBtn={{
            className: 'btn-solid-default toggle-id d-sm-block black-button',
            onClick: () => {
              width < 1200 && dispatch({ type: 'OVERLAY' });
              dispatch({ type: 'CATEGORYRESPONSIVE' });
            },
          }}>
          {PromotionalCatalog.toUpperCase()}
          {/*<i className='fas fa-chevron-down d-xl-inline-block d-none'></i>*/}
        </Btn>
      {/*)}*/}
      {/*<div className={`id-dropdown${catergoryResponsive ? ' open' : ''}`}>*/}
      {/*  <CategoryResp />*/}
      {/*  <ul>*/}
      {/*    {getCategoryData?.map((menu, i) => {*/}
      {/*      return (*/}
      {/*        <Fragment key={i}>*/}
      {/*          {menu.menuOpen ? (*/}
      {/*            <li className='submenu'>*/}
      {/*              <a href='#javascript' onClick={() => setIsChecked(menu.title !== isChecked && menu.title)}>*/}
      {/*                {menu.title}*/}
      {/*                <span className='according-menu d-xl-none d-block '>{menu.title === isChecked ? '-' : '+'}</span>*/}
      {/*              </a>*/}
      {/*              <ul className={`id-mega-menu d-xl-block ${menu.title === isChecked ? 'd-block' : 'd-none'}`}>*/}
      {/*                <li>*/}
      {/*                  <Row>*/}
      {/*                    {menu?.children?.map((submenu, i) => {*/}
      {/*                      return (*/}
      {/*                        <Col xl='3' key={i}>*/}
      {/*                          <div className='id-childmenu'>*/}
      {/*                            <div className='title-id'>*/}
      {/*                              <h6 onClick={() => setSubChild(submenu.heading !== subChild && submenu.heading)}>*/}
      {/*                                {submenu.heading}*/}
      {/*                                <span className='according-menu d-xl-none d-block'>{submenu.heading === subChild ? '-' : '+'}</span>*/}
      {/*                              </h6>*/}
      {/*                            </div>*/}
      {/*                            <ul className={`d-xl-block ${submenu.heading === subChild ? 'd-block' : 'd-none'}`}>*/}
      {/*                              {submenu.items.map((megamenu, i) => {*/}
      {/*                                return (*/}
      {/*                                  <li key={i}>*/}
      {/*                                    <Link*/}
      {/*                                      href={megamenu.path}*/}
      {/*                                      onClick={() => {*/}
      {/*                                        width < 1200 && dispatch({ type: 'CATEGORYRESPONSIVE' });*/}
      {/*                                        dispatch({ type: 'CLOSEOVERLAY' });*/}
      {/*                                      }}>*/}
      {/*                                      {megamenu.title}*/}
      {/*                                    </Link>*/}
      {/*                                  </li>*/}
      {/*                                );*/}
      {/*                              })}*/}
      {/*                            </ul>*/}
      {/*                          </div>*/}
      {/*                        </Col>*/}
      {/*                      );*/}
      {/*                    })}*/}
      {/*                    <Col xl='3'>*/}
      {/*                      <div className='id-banner'>*/}
      {/*                        <img src={`${CommonPath}/${menu.bannerImage}`} className='img-fluid' alt='id' />*/}
      {/*                      </div>*/}
      {/*                    </Col>*/}
      {/*                  </Row>*/}
      {/*                </li>*/}
      {/*              </ul>*/}
      {/*            </li>*/}
      {/*          ) : (*/}
      {/*            <li>*/}
      {/*              <Link*/}
      {/*                href={menu.path}*/}
      {/*                onClick={() => {*/}
      {/*                  width < 1200 && dispatch({ type: 'CATEGORYRESPONSIVE' });*/}
      {/*                  dispatch({ type: 'CLOSEOVERLAY' });*/}
      {/*                }}>*/}
      {/*                {menu.title}*/}
      {/*              </Link>*/}
      {/*            </li>*/}
      {/*          )}*/}
      {/*        </Fragment>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </li>
  );
};
export default AllCategories;
