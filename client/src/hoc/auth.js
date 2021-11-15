import React, { useEffect } from 'react';
import { auth } from '../actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

 function Auth (props) {
        const adminRoute = null;
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(async response => {
                if (await !response.payload.isAuth) {
                    if (props.reload) {
                        props.history.push('/register_login')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    else {
                        if (props.reload === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
            
        }, [dispatch, props.history, user.googleAuth, adminRoute, props.reload])

        return (
            <props.children {...props} user={user} />
        )
}
export default Auth;