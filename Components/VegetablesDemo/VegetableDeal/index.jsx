import React, {Fragment} from 'react';
import {Container, Row} from 'reactstrap';
import LeftSideDeal from './LeftSideDeal';
import RightSideDeal from './RightSideDeal';

const VegetableDeal = ({bannerData, elemclass, newOffer}) => {
    // const VegetableFilter = bannerData.filter((el) => el.subtype === 'vegetablesdeal');


    return (
        <section className={`ratio2_1 section-b-space ${elemclass}`}>
            <Container>
                <Row className='gy-3'>
                    <Fragment>
                        <LeftSideDeal elem={newOffer[0]}/>
                        <RightSideDeal elem={newOffer[1]}/>
                    </Fragment>
                </Row>
            </Container>
        </section>
    );
};
export default VegetableDeal;
