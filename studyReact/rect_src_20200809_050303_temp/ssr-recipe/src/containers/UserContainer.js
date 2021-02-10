import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../modules/users';
import { Preloader } from '../lib/PreloadContext';
import User from '../components/User';

const UserContainer = ({ id }) => {

    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user && user.id === parseInt(id, 10)) return;
        dispatch(getUser(id));
    }, [dispatch, id, user]);

    if(!user) {
        return <Preloader resolve={ () => dispatch(getUser(id)) } />;
    }
    return <User user={user} />;
};

export default UserContainer;