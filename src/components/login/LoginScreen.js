import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../auth/authContext';
import {types} from '../../types/types';

export const LoginScreen = () => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Bienvenido',
            },
        };
        const getRoute = localStorage.getItem('lastPath') || '/marvel';
        dispatch(action);

        navigate(getRoute, {
            replace: true,
        });
    };

    return (
        <main className="p-8 bg-gray-700 text-white flex justify-center items-center h-screen flex-col">
            <h1 className="text-2xl uppercase font-bold ">Entrar en la app</h1>
            <hr />

            <button
                onClick={handleLogin}
                className="px-8 mt-4 py-2 border border-gray-300 text-white rounded-3xl hover:border-2 hover:border-blue-300"
            >
                Login
            </button>
        </main>
    );
};
