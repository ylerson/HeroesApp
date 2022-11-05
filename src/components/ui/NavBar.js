import {useContext} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../auth/authContext';
import {types} from '../../types/types';

export const NavBar = () => {
    const {state, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type: types.logout});

        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className="flex justify-between p-4  max-w-5xl m-auto items-center">
            <Link to="/">
                Heroes<span className="font-bold">App</span>{' '}
            </Link>
            <div className="">
                <NavLink
                    className={({isActive}) =>
                        'p-4 border-b-2 border-transparent hover:border-sky-500 ' +
                        (isActive && 'border-sky-500')
                    }
                    to="/marvel"
                >
                    Marvel
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        'p-4 border-b-2 border-transparent hover:border-sky-500 ' +
                        (isActive && 'border-sky-500')
                    }
                    to="/dc"
                >
                    DC
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        'p-4 border-b-2 border-transparent hover:border-sky-500 ' +
                        (isActive && 'border-sky-500')
                    }
                    to="/search"
                >
                    Search
                </NavLink>
            </div>

            <div>
                <button
                    onClick={handleLogout}
                    className="px-8 py-2 border rounded-3xl"
                >
                    Salir
                </button>
            </div>
        </nav>
    );
};
