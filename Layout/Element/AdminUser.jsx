import Link from 'next/link';
import {useRouter} from 'next/router';
import {User} from 'react-feather';
import {APICallUrl, Logins, Pleasefillthename, Registers} from '../../Components/Constant';
import {firebase_app} from '../../Config/firebase';
import {Input, Label} from "reactstrap";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectAuth, selectAuthUser,
    // selectAuth,
    selectLoginToken,
    setAuth,
    setLoginToken,
    setUser,
    signOut
} from "../../ReduxToolkit/Slices/LoginSlice";
import BeforeSignInAccount from "../../Components/Pages/UserDashboard/BeforeSignInAccount";
import AfterSignInAccount from "../../Components/Pages/UserDashboard/AfterSignInAccount ";

const AdminUser = () => {
    let loginToken = useSelector(selectLoginToken)
    // let userAuth = useSelector(selectAuthUser)
    // console.log(userAuth,"userAuth")

    // const firebaseLogout = () => {
    //     firebase_app.auth().signOut();
    //     router.push('/page/login');
    // };
    let auth = useSelector(selectAuth);

    const [open, setOpen] = useState(false);
    const divRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const toggleDivVisibility = () => {
        setOpen(!open);
    };

    // console.log(open, "Open")
    return (
        <li className='onhover-dropdown account-dropbox' onClick={toggleDivVisibility}>
            <div className='cart-media become-partner' ref={divRef}>
                <User/>
                <p style={{margin: "0 0 0 8px"}}>
                    BECOME A PARTNER
                </p>
            </div>
            {auth !== false ?
                <BeforeSignInAccount open={open}/> :
                <AfterSignInAccount open={open}/>
            }
        </li>
    );
};
export default AdminUser;
