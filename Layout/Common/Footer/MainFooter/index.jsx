import { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import { getAPIData } from '../../../../Utils';
import ContactFooter from './ContactFooter';
import MenuFooter from './MenuFooter';
import GetTouch from './GetTouch';
import QuestionTabs from './QuestionTab';

const MainFooter = ({ QuestionTab,footerLeft,footerCenter,footerRight }) => {
  const [getFooter, setGetFooter] = useState([]);

  // useEffect(() => {
  //   const type = 'footer';
  //
  //   getAPIData(`${process.env.API_URL}${type}`)
  //     .then((res) => {
  //       setGetFooter(res.data);
  //     })
  //     .catch((Error) => {
  //       console.log('Error', Error);
  //     });
  // }, []);

  return (
    <Container>
      <Row className='gy-4'>
        <ContactFooter getFooter={getFooter} />
        <MenuFooter getFooter={getFooter} footerLeft={footerLeft} footerCenter={footerCenter} footerRight={footerRight}/>
        <GetTouch />
        {/*{QuestionTab ? <GetTouch />:  <QuestionTabs /> }*/}
      </Row>
    </Container>
  );
};
export default MainFooter;
