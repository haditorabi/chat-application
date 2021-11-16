import React, { useEffect } from 'react';
import { auth } from '../actions/user_actions';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
    useLocation
} from "react-router-dom";

 function Auth (props) {
        const adminRoute = null;
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { pathname } = useLocation();
        useEffect(() => {
            dispatch(auth()).then(async response => {
                if (await !response.payload.isAuth) {
                    if (!props.reload && (pathname !== "/login" && pathname !== "/register")) {
                        navigate('login');
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                            navigate('/chat');
                    }
                    else {
                        if (props.reload === false) {
                            navigate('/chat')
                        }
                    }
                }
            })
            
        }, [dispatch, user.googleAuth, adminRoute])

        return (
            <props.children {...props} user={user} />
        )
}
export default Auth;