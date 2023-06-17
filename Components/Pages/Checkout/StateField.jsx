import React from 'react';
import { Col, Label } from 'reactstrap';
import { Choose, State, StateArr } from '../../Constant';

const StateField = () => {
  return (
    <Col md='12'>
      <Label htmlFor='validationCustom04' className='form-label required-label'>
        City
      </Label>
      <select className='form-select custome-form-select checkout-form' id='validationCustom05'>
        <option disabled>{Choose}</option>
        {StateArr.map((elem, i) => {
          return <option key={i}>{elem}</option>;
        })}
      </select>
    </Col>
  );
};

export default StateField;
