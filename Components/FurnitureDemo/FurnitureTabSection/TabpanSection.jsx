import React, {Fragment} from 'react';
import {Row, TabContent, TabPane} from 'reactstrap';
import LeftTab from './LeftTab';
import MiddleTab from './MiddleTab';
import RightTab from './RightTab';

const TabpanSection = ({activeTab, TabFilter, num, val, TabMiddleColor, LeftRightTab}) => {
    // console.log(TabFilter,"TabFilter2")
    return (
        <TabContent activeTab={activeTab}>
            {/*{TabFilter?.map((el, i) => {*/}
            {/*  console.log(el,"EL")*/}
            {/*  return (*/}
            <Fragment>
                {TabFilter
                    ?.filter((el) => el.name === val)
                    .map((item, id) => {
                        // console.log(item, "item")
                        let a = item.products.sort(function (a, b) {
                            return a.order - b.order
                        })?.slice(0, 3)
                        let b = item.products.sort(function (a, b) {
                            return a.order - b.order
                        })?.slice(3, 4)
                        let c = item.products.sort(function (a, b) {
                            return a.order - b.order
                        })?.slice(4, 7)
                        // console.log(a,"a")
                        // console.log(b,"b")
                        // console.log(c,"c")
                        return (
                            <Fragment key={id}>
                                {item.name === val && (
                                    <TabPane tabId={num}
                                             className={`${activeTab && activeTab === id ? 'active show' : ''}`}
                                             key={id}>
                                        <div className='offer-wrap product-style-1'>
                                            <Row className='g-xl-4 g-3'>
                                                {item?.products?.map((elem, i) => {
                                                    // console.log(elem,"elem")


                                                    return (
                                                        <div key={i}></div>
                                                    );
                                                })
                                                }
                                                <Fragment>
                                                    <LeftTab elem={a} LeftRightTab={LeftRightTab}/>
                                                    {
                                                        b.length !== 0 &&
                                                        <MiddleTab elem={b[0]} TabMiddleColor={TabMiddleColor}
                                                                   LeftRightTab={LeftRightTab}/>
                                                    }
                                                    <RightTab elem={c} LeftRightTab={LeftRightTab}/>
                                                </Fragment>

                                            </Row>
                                        </div>
                                    </TabPane>
                                )}
                            </Fragment>
                        );
                    })}
            </Fragment>
            {/*  );*/}
            {/*})}*/}
        </TabContent>
);
};

export default TabpanSection;
