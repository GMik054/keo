import React, {useState} from 'react';
import {Input, Label} from "reactstrap";
import {APICallUrl, Pleasefillthename} from "../../Constant";
import {
    selectAuth,
    selectLoginToken,
    setAuth,
    setLoginToken,
    setUser,
    signOut
} from "../../../ReduxToolkit/Slices/LoginSlice";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

const BeforeSignInAccount = ({open, toggleDivVisibility}) => {
    const router = useRouter();
    let auth = useSelector(selectAuth)
    let dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIN = () => {
        fetch(`${APICallUrl}/api/v1/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
            .then((res) => res.json()).then((res) => {
                if (res.error === false) {
                    dispatch(setLoginToken(res.data));
                    dispatch(setAuth(res.error));

                    fetch(`${APICallUrl}/api/v1/me`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            Authorization: `Bearer ${res.data.token}`
                        }
                    })
                        .then((res) => res.json()).then((res) => {
                            dispatch(setUser(res));
                        })
                        .catch((error) => {
                            // Handle error if the second fetch fails
                            console.error('Failed to fetch user data:', error);
                        });
                } else {
                    // Handle error if the first fetch returns an error
                    console.error('Login failed:', res.error);
                }
            })
            .catch((error) => {
                // Handle general fetch error
                console.error('Failed to login:', error);
            });
    }


    return (
        <div className='onhover-div profile-dropdown'
             style={open ? {opacity: "1", visibility: "visible"} : { visibility: "hidden"}}
        >
            <div className='profile-dropdown-div'>
                <div>
                    <h3 className="before-h3">Sign In</h3>
                    <p style={{marginBottom: "0"}}>Use Your email address & password to login</p>
                </div>
                {/*<div className="my-orders-section-filter">*/}
                {/*    <h5>PO Number, Order #, Reference #</h5>*/}
                {/*    <input type='text' className='form-control checkout-form' name='POnumber'*/}
                {/*           style={{fontSize: "14px", borderColor: "#ced4da"}}*/}
                {/*           placeholder='Enter Number Here...'/>*/}
                {/*</div>*/}
                <form>
                    <h5>Email</h5>
                    <Input type='email' placeholder='Email' name='email' id='email'
                           className='checkout-form login-form'
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    {/*<span className='spin'></span>*/}
                    <div className='valid-feedback'>{Pleasefillthename}</div>
                    <h5 style={{marginTop: "12px"}}>Password</h5>
                    <Input type='password' name='password' id='password' placeholder='Password'
                           className='checkout-form login-form'
                           onChange={(e) => setPassword(e.target.value)}
                        // value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    {/*<span className='spin'></span>*/}
                </form>

                <div className='form-check p-0 custome-form-check'>
                    <input className='checkbox_animated check-it'
                           type='checkbox' style={{top: "-4px"}}/>
                    <Label className='form-check-label'
                           style={{marginBottom: "0"}}>Remember me</Label>
                    {/*<p className='font-light'>(25)</p>*/}
                </div>
                <div className='product-buttons' style={{marginBottom: "0"}}>
                    {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                    <a id='cartEffect' onClick={() => signIN()}
                       className='btn btn-solid hover-solid btn-animation quick-order-button'>
                        {/*<i className='fa fa-shopping-cart'></i>*/}
                        <span>SIGN IN</span>
                    </a>
                </div>
                <p style={{color: "var(--theme-color)"}}>Forgot Username or Password?</p>
            </div>

            <div className="profile-dropdown-div" style={{marginTop: "1rem", border: "none"}}>
                <h4 className="before-h4">
                    New Here?
                </h4>
                <div className='product-buttons' style={{marginBottom: "0"}}

                >
                    {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                    <a id='cartEffect'
                       className='btn btn-solid btn-transparent hover-solid btn-animation quick-order-button'>
                        {/*<i className='fa fa-shopping-cart'></i>*/}
                        <span>Become a customer</span>
                    </a>
                </div>
            </div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link href={'/page/login'} className='d-block'>*/}
            {/*            {Logins}*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link href={'/page/register'} className='d-block'>*/}
            {/*            {Registers}*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li onClick={() => firebaseLogout()} className='d-block'>*/}
            {/*        {'Logout'}*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </div>
    );
};

export default BeforeSignInAccount;