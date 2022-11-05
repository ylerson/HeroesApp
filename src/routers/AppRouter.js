import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {LoginScreen} from '../components/login/LoginScreen';
import {MarvelScreen} from '../components/marvel/MarvelScreen';
import {DashBoardRoutes} from './DashBoardRoutes';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <DashBoardRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
