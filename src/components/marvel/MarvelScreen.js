import React from 'react';
import {HeroList} from '../hero/HeroList';

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold my-4 text-center">
                Marvel Heroes
            </h1>

            <HeroList publisher={'Marvel Comics'} />
        </div>
    );
};
