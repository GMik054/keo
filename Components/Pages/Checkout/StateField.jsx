import React, {useEffect} from 'react';
import {Col, Label} from 'reactstrap';
import {Choose, State, StateArr} from '../../Constant';

const StateField = ({state, citi, setCiti}) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = state.find((elem) => elem.abbreviation === selectedValue);
        setCiti(selectedOption);
    };
    return (
        <Col md='12'>
            <Label htmlFor='validationCustom04' className='form-label required-label'>
                City
            </Label>
            <select
                className='form-select custome-form-select checkout-form'
                id='validationCustom05'
                value={citi?.abbreviation}
                onChange={handleSelectChange}
            >
                <option disabled>{Choose}</option>
                {state?.map((elem, i) => (
                    <option key={i} value={elem.abbreviation} >
                        {elem.name}
                    </option>
                ))}
            </select>
        </Col>
    );
};

export default StateField;