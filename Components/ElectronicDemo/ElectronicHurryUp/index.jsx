import React from 'react';
import { Container, Row } from 'reactstrap';
import { HurryUp, SpecialOffer } from '../../Constant';
import SectionHeader from '../../Element/SectionHeader';
import TabNavBar from './TabNavBar';
const ElectronicHurryUp = ({ tabSection }) => {
  // console.log(tabSection,"tabSection")
  // const TabFilter = tabSection?.filter((el) => el.type === 'electronic');
  return (
    <section className='tab-section'
             style={{padding:
                   "80px 0"
                   // bottom?`${bottom} 0`:"0"
    }}>
      <Container>
        <Row>
          <div className='col'>
            <SectionHeader title={SpecialOffer} subTitle={SpecialOffer} />
            <div className='tab-wrap'>
              {/*<TabNavBar TabFilter={tabSection} />*/}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default ElectronicHurryUp;
