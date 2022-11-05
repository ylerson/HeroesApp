import {useMemo} from 'react';
import {useParams, Navigate, useNavigate} from 'react-router-dom';
import {getHeroById} from '../../selectors/getHeroesById';

export const Hero = () => {
    const {heroId} = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    if (!hero) return <Navigate to="/" />;

    const imgPath = `/assets/${hero.id}.jpg`;

    return (
        <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
                <img
                    className="p-2 shadow rounded animate__animated animate__fadeInUp"
                    src={imgPath}
                    alt={hero.superhero}
                />
            </div>
            <div>
                <h3 className="text-xl font-bold">{hero.superhero}</h3>
                <ul className="p-2">
                    <li className="border-b p-2">
                        <b>Alter Ego</b> {hero.alter_ego}{' '}
                    </li>
                    <li className="border-b p-2">
                        <b>Publisher</b> {hero.publisher}{' '}
                    </li>
                    <li className="border-b p-2">
                        <b>First Apperance</b> {hero.first_appearance}{' '}
                    </li>
                </ul>
                <h5 className="text-lg font-bold">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="px-4 py-2 border border-cyan-500 text-cyan-500 rounded-3xl mt-4 focus:ring ring-cyan-500"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};
