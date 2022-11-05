import {Route, Routes} from 'react-router-dom';

import {NavBar} from '../components/ui/NavBar';
import {MarvelScreen} from '../components/marvel/MarvelScreen';
import {SearchScreen} from '../components/search/SearchScreen';
import {DcScreen} from '../components/dc/DcScreen';
import {Hero} from '../components/hero/Hero';

export const DashBoardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="p-8 max-w-3xl m-auto">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<Hero />} />
                </Routes>
            </div>
        </>
    );
};
