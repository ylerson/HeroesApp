import {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useForms} from '../../hooks/useForms';
import {getHeroesByName} from '../../selectors/getHeroesByName';
import {HeroCard} from '../hero/HeroCard';

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getQuery = () => {
        return new URLSearchParams(location.search);
    };
    const query = getQuery().get('q') != null ? getQuery().get('q') : '';

    const [value, setvalue, reset] = useForms({
        searchText: query,
    });

    const {searchText} = value;

    const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">Buscar un superhero</h1>

            <div className="grid grid-cols-2 gap-4 ">
                <div>
                    <form
                        className="mt-8 flex flex-col"
                        onSubmit={handleSubmit}
                    >
                        <input
                            placeholder="Buscar un Heroe"
                            type="text"
                            name="searchText"
                            autoComplete="off"
                            onChange={setvalue}
                            className="outline-none border py-2 px-4 my-2 rounded-3xl"
                            value={searchText}
                        />

                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-3xl"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div>
                    <h4 className="text-lg font-bold m-4">Resultado</h4>

                    {query === '' ? (
                        <div className="px-4 py-4 bg-cyan-200 m-2 rounded">
                            Buscar un heroe
                        </div>
                    ) : (
                        heroesFiltered.length === 0 && (
                            <div className="px-4 py-4 bg-red-200 m2 rounded">
                                No hay Resultados para "{query}"
                            </div>
                        )
                    )}

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
