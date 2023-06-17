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
import * as Yup from 'yup'
import {useFormik} from "formik";

const CheckoutForm = ({info}) => {
    // const [isFormData, setIsFormData] = useState('');
    // const {
    //     register,
    //     handleSubmit,
    //     formState: {errors},
    // } = useForm();
    // const onSubmit = (data) => {
    // setIsFormData(data);
    // };

    console.log(info, "info")


    const initialValues = {
        name: info?.name,
        lastName: "",
        email: info?.email,
        phone: info?.phone,
        postCode: info?.zip_code === null ? "" : info?.zip_code,
        street: info?.address,
        house: ""
        // password: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid format").required("Required"),
        phone: Yup.string()
            .matches(
                /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
                "Invalid phone number").required("Required").max(18, "Invalid phone number"),
        postCode: Yup.string()
            .matches(/^\d{5}(-\d{4})?$/, "Invalid ZIP code")
            .required("Required"),
        house: Yup.string().required("Required")

        // password: Yup.string()
        //     .required('No password provided.')
        //     .min(6, 'Password is too short - should be 6 chars minimum.')
    })

    const formik = useFormik({
        initialValues,
        validationSchema
    })

    {/*{...register('firstname', {required: true})} */
    }
    console.log(formik, "FFF")
    return (
        <>
            <Form className='needs-validation'
                // onSubmit={handleSubmit(onSubmit)}
            >
                <Row className='g-4'>
                    <Col md='6'>
                        <Label htmlFor='fname' className='form-label required-label'>
                            {FirstName}
                        </Label>
                        <input type='text' className='form-control checkout-form' name='name' id='fname'
                               placeholder='Enter First Name'
                               value={formik.values.name}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <span style={{color: 'red'}}>{formik.errors.name}</span>
                        )}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='lname' className='form-label required-label'>
                            {LastName}
                        </Label>
                        <input type='text' className='form-control checkout-form' name='lastName' id='lname'
                               placeholder='Enter Last Name'
                               value={formik.values.lastName}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <span style={{color: 'red'}}>{formik.errors.lastName}</span>
                        )}
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
                               placeholder='example@example.com' name='email'
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}

                        />
                        {formik.touched.email && formik.errors.email && (
                            <span style={{color: 'red'}}>{formik.errors.email}</span>
                        )}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='phone' className='form-label required-label'>
                            Phone Number
                        </Label>
                        <input type='text' className='form-control checkout-form' placeholder='Enter your phone number'
                               name='phone'
                               value={formik.values.phone}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {/*{errors.phone && <span style={{color: 'red'}}>Phone is Required</span>}*/}
                        {formik.touched.phone && formik.errors.phone &&
                            <span style={{color: 'red'}}>{formik.errors.phone}</span>}
                    </Col>

                    <StateField/>
                    <Col md='6'>
                        <Label htmlFor='zip' className='form-label required-label'>
                            Postcode
                        </Label>
                        <input type='text' className='form-control checkout-form' id='zip'
                               placeholder='Enter your postcode'
                               name='postCode'
                               value={formik.values.postCode}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}/>
                        {/*{errors.zip && <span style={{color: 'red'}}>{ziprequired}</span>}*/}
                        {formik.touched.postCode && formik.errors.postCode &&
                            <span style={{color: 'red'}}>{formik.errors.postCode}</span>}
                    </Col>
                    {/*<StateField/>*/}
                    <CountryField/>
                    <Col md='6'>
                        <Label htmlFor='address' className='form-label required-label'>
                            Street Address
                        </Label>
                        <input type='text' className='form-control checkout-form' id='address'
                               placeholder='Enter your address'
                               name='street'
                               value={formik.values.street}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.street && formik.errors.street && (
                            <span style={{color: 'red'}}>{formik.errors.street}</span>
                        )}
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
                            House/Flat Number
                        </Label>
                        <input type='text' className='form-control checkout-form' id='address2'
                               placeholder='Enter your house/flat N' name='house'
                               value={formik.values.house}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.house && formik.errors.house && (
                            <span style={{color: 'red'}}>{formik.errors.house}</span>
                        )}
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
