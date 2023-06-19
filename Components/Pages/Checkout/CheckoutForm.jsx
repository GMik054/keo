import React, {useEffect, useState} from 'react';
import {Col, Form, Input, Label, Row} from 'reactstrap';
import {useForm} from 'react-hook-form';
import {
    Address,
    Address2,
    address2required,
    addressrequired, APICallUrl,
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
import {setCart} from "../../../ReduxToolkit/Slices/CartSlice";

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

    let [state, setState] = useState([]);
    let [citi, setCiti] = useState({});

    const initialValues = {
        name: info?.name === null || undefined ? "" : info?.name,
        email: info?.email === null || undefined ? "" : info?.email,
        phone: info?.phone === null || undefined ? "" : info?.phone,
        postCode: info?.zip_code === null || undefined ? "" : info?.zip_code,
        street: info?.address === null || undefined ? "" : info?.address,
        house: ""
        // password: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid format").required("Required"),
        phone: Yup.string()
            .matches(
                /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
                "Invalid phone number").required("Required").max(18, "Invalid phone number"),
        postCode: Yup.string()
            .matches(/^\d{5}(-\d{4})?$/, "Invalid ZIP code")
            .required("Required"),
        street: Yup.string().required("Required"),
        house: Yup.string().required("Required")

        // password: Yup.string()
        //     .required('No password provided.')
        //     .min(6, 'Password is too short - should be 6 chars minimum.')
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
    })

    useEffect(() => {
        formik.validateForm();
        fetch(`${APICallUrl}/api/get-states`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
        })
            .then((res) => res.json()).then((res) => {
            setState(res)
            setCiti(res?.find((elem) => elem?.abbreviation === info?.state_name))
        })
            .catch((error) => {
                console.error('Failed to get States', error);
            });
    }, []);

    function ltrim(str) {
        if (!str) return str;
        return str.replace(/^\s+/g, '');
    }

    console.log(info, "info")
    console.log(citi, "citi")

    return (
        <>
            <Form className='needs-validation'
                // onSubmit={handleSubmit(onSubmit)}
            >
                <Row className='g-4'>
                    <Col md='12'>
                        <Label htmlFor='fname' className='form-label required-label'>
                            Full Name
                        </Label>
                        <input type='text' className='form-control checkout-form' name='name' id='fname'
                               placeholder='Enter Full Name'
                               value={ltrim(formik.values.name)}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <span style={{color: 'var(--theme-color)'}}>{formik.errors.name}</span>
                        )}
                    </Col>
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
                            <span style={{color: 'var(--theme-color)'}}>{formik.errors.email}</span>
                        )}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='phone' className='form-label required-label'>
                            Phone Number
                        </Label>
                        <input type='phone' className='form-control checkout-form' placeholder='Enter your phone number'
                               name='phone'
                               value={formik.values.phone}
                               onChange={(e) => {
                                   const phoneNumber = e.target.value.replace(/[^0-9+()-]/g, ''); // Remove non-numeric characters except 0-9, +, ()
                                   formik.setFieldValue('phone', phoneNumber); // Update the formik value
                               }}
                               onBlur={formik.handleBlur}
                        />
                        {/*{errors.phone && <span style={{color: 'red'}}>Phone is Required</span>}*/}
                        {formik.touched.phone && formik.errors.phone &&
                            <span style={{color: 'var(--theme-color)'}}>{formik.errors.phone}</span>}
                    </Col>

                    <StateField state={state} defState={info?.state_name} citi={citi} setCiti={setCiti}/>
                    <Col md='6'>
                        <Label htmlFor='zip' className='form-label required-label'>
                            Postcode
                        </Label>
                        <input type='text' className='form-control checkout-form' id='zip'
                               placeholder='Enter your postcode' name='postCode'
                               value={formik.values.postCode}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}/>
                        {formik.touched.postCode && formik.errors.postCode &&
                            <span style={{color: 'var(--theme-color)'}}>{formik.errors.postCode}</span>}
                    </Col>
                    {/*<StateField/>*/}
                    <CountryField cities={citi.cities}/>
                    <Col md='6'>
                        <Label htmlFor='address' className='form-label required-label'>
                            Street Address
                        </Label>
                        <input type='text' className='form-control checkout-form' id='address'
                               placeholder='Enter your address'
                               name='street'
                               value={ltrim(formik.values.street)}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.street && formik.errors.street && (
                            <span style={{color: 'var(--theme-color)'}}>{formik.errors.street}</span>
                        )}
                    </Col>
                    <Col md='6'>
                        <Label htmlFor='house-number' className='form-label required-label'>
                            House/Flat Number
                        </Label>
                        <input type='text' className='form-control checkout-form' id='address2'
                               placeholder='Enter your house/flat N' name='house'
                               value={ltrim(formik.values.house)}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.house && formik.errors.house && (
                            <span style={{color: 'var(--theme-color)'}}>{formik.errors.house}</span>
                        )}
                    </Col>

                </Row>
            </Form>
            {/*<PaymantMode isFormData={isFormData}/>*/}
        </>

    );
};

export default CheckoutForm;
