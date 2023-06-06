import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import GridContain from './GridContain';
import SortByType from './SortByType';
import {Prices} from "../../Constant";
import {Btn} from "../../AbstractElements";

const SortingFilter = ({sortName, grid5, listGrid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { sorting } = useSelector((state) => state.ProductFilter);
  const { price } = useSelector((state) => state.ProductFilter);

  const SortData = [
    {
      id: 1,
      sort: 'Select Sorting',
    },
    {
      id: 2,
      sort: 'Alphabetically A-Z',
    },
    {
      id: 3,
      sort: 'Alphabetically Z-A',
    },
    {
      id: 4,
      sort: 'Price, High To Low',
    },
    {
      id: 5,
      sort: 'Price, Low To High',
    },
  ];
  return (
    <Col xs='12' style={{margin:"0"}}>
      <div className='filter-options'>
        <ul className='short-name'>
          {sortName && (
              <li>
                <div className='label-tag'>
                <span>
                  {/*{Prices}*/}
                  Showing: {price[0]} to {price[1]}
                </span>
                </div>
              </li>
          )}
          {sortName &&
              Object.keys(sortName).map((elem, i) => (
                  <Fragment key={i}>
                    {elem !== 'price' &&
                        elem !== 'sorting' &&
                        elem !== 'discount' &&
                        sortName &&
                        sortName[elem].map((data, i) => (
                            <li key={i}>
                              <div className='label-tag'>
                                <span>{data}</span>
                                <Btn attrBtn={{ type: 'button', className: 'btn-close', onClick: () => dispatch({ type: elem.toUpperCase(), payload: data }) }}></Btn>
                              </div>
                            </li>
                        ))}
                  </Fragment>
              ))}
        </ul>
        <div className='select-options' style={{marginLeft:"auto"}}>
          <div className='page-view-filter'>
            <Dropdown className='select-featured' isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
              <DropdownToggle className='dropdown-toggle'>
                <span>{sorting}</span> <i className='fas fa-angle-down ms-lg-3 ms-2'></i>
              </DropdownToggle>
              <DropdownMenu>
                {SortData &&
                  SortData.map((elem) => (
                    <DropdownItem key={elem.id} onClick={() => dispatch({ type: 'SORTINGFILTER', payload: elem.sort })}>
                      {elem.sort}
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          {/*<SortByType />*/}
        </div>
        <GridContain grid5={grid5} listGrid={listGrid} />
      </div>
    </Col>
  );
};

export default SortingFilter;
