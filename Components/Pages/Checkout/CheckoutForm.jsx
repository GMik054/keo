import React, {useState} from 'react';
import {Col, Form, Input, Label, Row} from 'reactstrap';
import {useForm} from 'react-hook-form';
import {
    Address,
    Address2,
    address2required,
    addressrequired,
    Continuecheckout,
    Emailaddress,
    emailrequired,
    FirstName,
    firstnamerequired,
    LastName,
    lastnamerequired,
    SaveInfo,
    Username,
    usernamerequired,
    Zip,
    ziprequired,
} from '../../Constant';
import CountryField from './CountryField';
import StateField from './StateField';
import {Btn} from '../../AbstractElements';
import PaymantMode from './PaymantMode';

const CheckoutForm = () => {
    const [isFormData, setIsFormData] = useState('');
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => {
        setIsFormData(data);
    };

    return (
        <>
            <Form className='needs-validation' onSubmit={handleSubmit(onSubmit)}>
                <Row className='g-4'>
                    <Col md='6'>
                        <Label htmlFor='fname' className='form-label required-label'>
                            {FirstName}
                        </Label>
                        <input type='text' className='form-control checkout-form' name='firstname' id='fname'
                               placeholder='Enter First Name' {...register('firstname', {required: true})} />
                        {errors.firstname && <span style={{color: 'red'}}>{firstnamerequired}</span>}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='lname' className='form-label required-label'>
                            {LastName}
                        </Label>
                        <input type='text' className='form-control checkout-form' name='lastname' id='lname'
                               placeholder='Enter Last Name' {...register('firstname', {required: true})} />
                        {errors.lastname && <span style={{color: 'red'}}>{lastnamerequired}</span>}
                    </Col>
                    {/*<Col md='6'>*/}
                    {/*  <Label htmlFor='lname' className='form-label'>*/}
                    {/*    {Username}*/}
                    {/*  </Label>*/}
                    {/*  <div className='input-group'>*/}
                    {/*    <span className='input-group-text' id='basic-addon1'>*/}
                    {/*      @*/}
                    {/*    </span>*/}
                    {/*    <input type='text' className='form-control' placeholder='Username' name='username' {...register('username', { required: true })} />*/}
                    {/*  </div>*/}
                    {/*  {errors.username && <span style={{ color: 'red' }}>{usernamerequired}</span>}*/}
                    {/*</Col>*/}
                    <Col md='12'>
                        <Label htmlFor='billing' className='form-label'>
                            Company (optional)
                        </Label>
                        <input type='billing-company' className='form-control checkout-form'
                               placeholder='Enter your first name' name='billing-company'/>
                        {/*{errors.email && <span style={{ color: 'red' }}>{emailrequired}</span>}*/}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='email' className='form-label required-label'>
                            {Emailaddress}
                        </Label>
                        <input type='email' className='form-control checkout-form' id='email'
                               placeholder='example@example.com'
                               name='email' {...register('email', {required: true})} />
                        {errors.email && <span style={{color: 'red'}}>{emailrequired}</span>}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='phone' className='form-label required-label'>
                            Phone Number
                        </Label>
                        <input type='email' className='form-control checkout-form' placeholder='Enter your phone number'
                               name='billing-phone' {...register('phone', {required: true})} />
                        {errors.phone && <span style={{color: 'red'}}>Phone is Required</span>}
                    </Col>
                    <CountryField/>
                    <Col md='6'>
                        <Label htmlFor='zip' className='form-label required-label'>
                            Postcode
                        </Label>
                        <input type='text' className='form-control checkout-form' id='zip' placeholder='Enter your postcode'
                               name='zip' {...register('zip', {required: true})} />
                        {errors.zip && <span style={{color: 'red'}}>{ziprequired}</span>}
                    </Col>
                    <StateField/>

                    <Col md='6'>
                        <Label htmlFor='address' className='form-label required-label'>
                            {Address}
                        </Label>
                        <input type='text' className='form-control checkout-form' id='address'
                               placeholder='Enter your address' name='address' {...register('address', {required: true})} />
                        {errors.address && <span style={{color: 'red'}}>{addressrequired}</span>}
                    </Col>

                    {/*<Col md='6'>*/}
                    {/*  <Label htmlFor='address2' className='form-label'>*/}
                    {/*    {Address2}*/}
                    {/*  </Label>*/}
                    {/*  <input type='text' className='form-control' id='address2' placeholder='1234 Main St' name='address2' {...register('address2', { required: true })} />*/}
                    {/*  {errors.address2 && <span style={{ color: 'red' }}>{address2required}</span>}*/}
                    {/*</Col>*/}
                    <Col md='6'>
                        <Label htmlFor='house-number' className='form-label required-label'>
                            {Address2}
                        </Label>
                        <input type='text' className='form-control checkout-form' id='address2'
                               placeholder='Enter your house/flat N' name='address2' {...register('address2', {required: true})} />
                        {errors.address2 && <span style={{color: 'red'}}>{address2required}</span>}
                    </Col>

                </Row>
                {/*<div className='form-check mt-3 custome-form-check'>*/}
                {/*  <Input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault11' />*/}
                {/*  <Label className='form-check-label checkout-label' htmlFor='flexCheckDefault11'>*/}
                {/*    {SaveInfo}*/}
                {/*  </Label>*/}
                {/*</div>*/}
                {/*<Btn attrBtn={{ className: 'btn btn-solid-default mt-4' }}>{Continuecheckout}</Btn>*/}
                {/*<hr className='my-lg-5 my-4' />*/}
            </Form>
            {/*<PaymantMode isFormData={isFormData}/>*/}
        </>

    );
};

export default CheckoutForm;
