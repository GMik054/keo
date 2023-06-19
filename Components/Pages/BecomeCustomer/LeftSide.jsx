import React, {useState} from 'react';
import {
    addressrequired,
    CommonPath,
    Emailaddress,
    emailrequired,
    FirstName,
    firstnamerequired,
    LastName,
    lastnamerequired, StateArr, ziprequired
} from "../../Constant";
import {Col, Form, Label, Row} from "reactstrap";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {useFormik} from "formik";

const LeftSide = () => {
    const [isFormData, setIsFormData] = useState('');
    // const {
    //     register,
    //     handleSubmit,
    //     formState: {errors},
    // } = useForm();
    // const onSubmit = (data) => {
    //     setIsFormData(data);
    // };

    const initialValues = {
        name: "",
        email: "",
        billingCompany:"",
        phone: "",
        postCode: "",
        street: "",
        house: ""
        // password: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid format").required("Required"),
        billingCompany: Yup.string().required("Required"),
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

    function ltrim(str) {
        if (!str) return str;
        return str.replace(/^\s+/g, '');
    }

    return (
        <>
            <div className="sign-in-banner"
                 style={{backgroundImage: `url(${CommonPath}/fashion/business.png)`}}>
                {/*<img src={`${CommonPath}/fashion/business.png`} className='img-fluid bg-img' alt='fashion'/>*/}
                <div className="sign-in-banner-div">
                    <h2>ONLINE ACCOUNT REGISTRATION</h2>
                    <h4>To become a new KOA EDI customer, complete the form below. </h4>

                    <h4> If you are an existing customer please </h4>
                    <div className='product-buttons' style={{marginBottom: "0", justifyContent: 'left'}}>
                        <a style={{maxWidth: "180px"}}
                           className='btn btn-solid hover-solid btn-animation quick-order-button'>
                            <span>SIGN IN</span>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#eff2f7", padding: "30px", marginTop: "30px", borderRadius: "8px"}}>
                <Form className='needs-validation'
                    // onSubmit={handleSubmit(onSubmit)}
                >
                    <Row className='g-4'>
                        <Col md='6'>
                            <Label htmlFor='fname' className='form-label required-label'>
                                {FirstName}
                            </Label>
                            <input type='text' className='form-control checkout-form' name='name'
                                   id='fname' placeholder='Enter First Name'
                                   value={ltrim(formik.values.name)}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <span style={{color: 'var(--theme-color)'}}>{formik.errors.name}</span>
                            )}
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='lname' className='form-label required-label'>
                                {LastName}
                            </Label>
                            <input type='text' className='form-control checkout-form' name='lastname'
                                   id='lname'
                                   placeholder='Enter Last Name'/>
                            {formik.touched.name && formik.errors.name && (
                                <span style={{color: 'var(--theme-color)'}}>{formik.errors.name}</span>
                            )}
                        </Col>

                        <Col md='12'>
                            <Label htmlFor='email' className='form-label required-label'>
                                {Emailaddress}
                            </Label>
                            <input type='email' className='form-control checkout-form' id='email'
                                   placeholder='example@example.com' name='email'
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}/>
                            {formik.touched.email && formik.errors.email && (
                                <span style={{color: 'var(--theme-color)'}}>{formik.errors.email}</span>
                            )}

                        </Col>
                        <Col md='12'>

                            <p>To keep your account safe create a strong password. Password must be min.
                                8 characters (max. 30) Including one uppercase letter, one lowercase
                                letter and alphanumeric characters</p>

                        </Col>
                        <Col md='6'>
                            <Label htmlFor='password' className='password required-label'>
                                Password
                            </Label>
                            <input type='password' className='form-control checkout-form'
                                   name='password'/>
                            {/*{errors.email && <span style={{ color: 'red' }}>{emailrequired}</span>}*/}
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='repeat-password' className='form-label required-label'>
                                Repeat Password
                            </Label>
                            <input type='password' className='form-control checkout-form'
                                   name='repeat-password'/>
                            {/*{errors.phone && <span style={{color: 'red'}}>Phone is Required</span>}*/}
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='billing' className='form-label required-label'>
                                Company Name
                            </Label>
                            <input type='billing-company' className='form-control checkout-form'
                                   name='billingCompany'
                                   value={ltrim(formik.values.billingCompany)}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}/>
                            {formik.touched.billingCompany && formik.errors.billingCompany && (
                                <span style={{color: 'var(--theme-color)'}}>{formik.errors.billingCompany}</span>)}
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='companyType' className='form-label required-label'>
                                Company Type
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option disabled>Type of Company</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='companyTaxID' className='form-label '>
                                Company Tax ID
                            </Label>
                            <input type='companyTaxID' className='form-control checkout-form'
                                   name='companyTaxID'/>
                            {/*{errors.email && <span style={{ color: 'red' }}>{emailrequired}</span>}*/}
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='resaleLicense' className='form-label required-label'>
                                Resale License
                            </Label>
                            <input type='resaleLicense' className='form-control checkout-form'
                                   name='resaleLicense'/>
                            {/*{errors.email && <span style={{ color: 'red' }}>{emailrequired}</span>}*/}
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='companyType' className='form-label required-label'>
                                # of Employees
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option disabled>Type of Company</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='companyType' className='form-label required-label'>
                                Years In Business
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option disabled>Type of Company</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='companyType' className='form-label required-label'>
                                Average Project Size
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option disabled>Type of Company</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='6'>
                            <Label htmlFor='companyType' className='form-label required-label'>
                                Annual Sale
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option disabled>Type of Company</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='4'>
                            <Label htmlFor='phone' className='form-label required-label'>
                                Phone Number
                            </Label>
                            <input type='phone' className='form-control checkout-form'
                                   placeholder='Enter your phone number' name='phone'
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
                        <Col md='4'>
                            <Label htmlFor='companyType' className='form-label required-label'>
                                Phone Type
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option disabled>Phone Type</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='4'>
                            <Label htmlFor='website-url' className='form-label'>
                                Website URL
                            </Label>
                            <input type='text' className='form-control checkout-form'
                                   name='website-url'/>

                        </Col>
                        <Col md='6'>
                            <Label htmlFor='address' className='form-label required-label'>
                                Street Address
                            </Label>
                            <input type='text' className='form-control checkout-form' id='address'
                                   placeholder='Enter your address' name='street'
                                   value={ltrim(formik.values.street)}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.street && formik.errors.street && (
                                <span style={{color: 'var(--theme-color)'}}>{formik.errors.street}</span>
                            )}
                        </Col>


                        <Col md='6'>
                            <Label htmlFor='suite-unit' className='form-label'>
                                Suite, Unit
                            </Label>
                            <input type='text' className='form-control checkout-form'
                                   name='suite-unit'/>
                        </Col>
                        <Col md='4'>
                            <Label htmlFor='city' className='form-label required-label'>
                                City
                            </Label>
                            <input type='text' className='form-control checkout-form'
                                   name='city'/>
                        </Col>
                        {/*<CountryField/>*/}
                        {/*<StateField/>*/}

                        <Col md='4'>
                            <Label htmlFor='validationCustom04' className='form-label required-label'>
                                State
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option>State</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='4'>
                            <Label htmlFor='zip' className='form-label required-label'>
                                Zip Code
                            </Label>
                            <input type='text' className='form-control checkout-form' id='zip'
                                   placeholder='Enter your postcode' name='postCode'
                                   value={formik.values.postCode}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}/>
                            {formik.touched.postCode && formik.errors.postCode &&
                                <span style={{color: 'var(--theme-color)'}}>{formik.errors.postCode}</span>}
                        </Col>
                        <Col md='12'>
                            <Label htmlFor='KOA' className='form-label'>
                                How did you hear about KOA?
                            </Label>
                            <select className='form-select custome-form-select checkout-form'>
                                <option>Please Make Selection</option>
                                {StateArr.map((elem, i) => {
                                    return <option key={i}>{elem}</option>;
                                })}
                            </select>
                        </Col>
                        <Col md='12'>
                            <div className="product-your-interest">
                                <h3>WHICH TYPE OF PRODUCTS ARE YOU INTERESTED IN?</h3>
                                <Row className="product-your-interest-row">
                                    <Col lg="6">
                                        <div className='form-check p-0 custome-form-check'>
                                            <input className='checkbox_animated check-it'
                                                   type='checkbox' style={{top: "-2px"}}/>
                                            <Label className='form-check-label'
                                                   style={{marginBottom: "0"}}>
                                                Video Survelliance</Label>
                                            {/*<p className='font-light'>(25)</p>*/}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className='form-check p-0 custome-form-check'>
                                            <input className='checkbox_animated check-it'
                                                   type='checkbox' style={{top: "-2px"}}/>
                                            <Label className='form-check-label'
                                                   style={{marginBottom: "0"}}>
                                                A/V Distribution</Label>
                                            {/*<p className='font-light'>(25)</p>*/}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className='form-check p-0 custome-form-check'>
                                            <input className='checkbox_animated check-it'
                                                   type='checkbox' style={{top: "-2px"}}/>
                                            <Label className='form-check-label'
                                                   style={{marginBottom: "0"}}>
                                                Intrusin</Label>
                                            {/*<p className='font-light'>(25)</p>*/}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className='form-check p-0 custome-form-check'>
                                            <input className='checkbox_animated check-it'
                                                   type='checkbox' style={{top: "-2px"}}/>
                                            <Label className='form-check-label'
                                                   style={{marginBottom: "0"}}>
                                                Lighting & Control</Label>
                                            {/*<p className='font-light'>(25)</p>*/}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className='form-check p-0 custome-form-check'>
                                            <input className='checkbox_animated check-it'
                                                   type='checkbox' style={{top: "-2px"}}/>
                                            <Label className='form-check-label'
                                                   style={{marginBottom: "0"}}>
                                                Networking</Label>
                                            {/*<p className='font-light'>(25)</p>*/}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className='form-check p-0 custome-form-check'>
                                            <input className='checkbox_animated check-it'
                                                   type='checkbox' style={{top: "-2px"}}/>
                                            <Label className='form-check-label'
                                                   style={{marginBottom: "0"}}>
                                                Smart Home</Label>
                                            {/*<p className='font-light'>(25)</p>*/}
                                        </div>
                                    </Col>
                                </Row>
                                <p>By clicking submit button below, I agree to receive promotional emails
                                    from KOA EDI. I agree to KOA EDI's <span
                                        style={{color: "black", fontWeight: "500"}}>Terms</span> and
                                    acknowledge <span style={{color: "black", fontWeight: "500"}}>Privacy Policy</span>,
                                    including Cookies policy.I understand I may unsubscribe from promotional
                                    emails at anytime.</p>
                                <div className='product-buttons' style={{marginTop: "20px"}}>
                                    <a style={{maxWidth: "280px"}}
                                       className='btn btn-solid hover-solid btn-animation quick-order-button'>
                                        <span>SUBMIT</span>
                                    </a>
                                </div>
                                <h4>Already have an Account? <a style={{
                                    textDecoration: "underline",
                                    color: "var(--theme-color)"
                                }}>Sign In</a></h4>
                            </div>
                        </Col>
                    </Row>

                </Form>
            </div>
        </>
    );
};

export default LeftSide;