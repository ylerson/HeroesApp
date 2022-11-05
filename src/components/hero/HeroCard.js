import {Link} from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const imgPath = `/assets/${id}.jpg`;

    return (
        <Link className="text-blue-300 underline" to={`/hero/${id}`}>
            <div className=" rounded-xl drop-shadow-md  overflow-hidden animate__animated animate__fadeInLeft">
                <div className="flex flex-col overflow-hidden">
                    <div className="w-full">
                        <img
                            className="object-fill w-full"
                            src={imgPath}
                            alt={superhero}
                        />
                    </div>
                    <div className="p-4 absolute bottom-0 bg-gray-900/50 w-full">
                        <h3 className="text-xl font-bold text-white">
                            {superhero}
                        </h3>
                        <p className="text-gray-400">{alter_ego}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
