import { useEffect, useState } from 'react';
import UsersApiService from '../service/UsersApiService';

export const useUsers = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const data = await UsersApiService.getAll();
        setUsers(data ?? []);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return {
        users,
    };
};

export const useUserL = (loginEnter) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const data = await UsersApiService.getAll(`?login=${loginEnter}`);
        setUsers(data ?? []);
    };

    useEffect(() => {
        getUsers();
    }, [loginEnter]);

    const handlerLoginChanged = () => {
        getUsers();
    };

    return {
        users,
        handlerLoginChanged,
    };
};

export const useUser = (id) => {
    const emptyUser = {
        id: '',
        login: '',
        password: '',
    };
    const [user, setUser] = useState({ ...emptyUser });

    const getUser = async (userId = undefined) => {
        if (userId && userId > 0) {
            const data = await UsersApiService.get(userId);
            setUser(data);
        } else {
            setUser({ ...emptyUser });
        }
    };

    useEffect(() => {
        getUser(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        user,
        setUser,
    };
};
