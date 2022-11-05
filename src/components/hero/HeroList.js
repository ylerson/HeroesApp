import {useMemo} from 'react';
import {getHeroesByPublisher} from '../../selectors/getHeroesByPublisher';
import {HeroCard} from './HeroCard';

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate__animated animate__fadeInLeft">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
};
