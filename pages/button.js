import { useState } from "react";

const Button = ({
    person
}) => {
    console.log(person)
    const [toggle, setToggle] = useState(false);
    return (
        <div className="relative">
            <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { setToggle(!toggle) }}>HomeWorld</button>
            {toggle &&
                <div className="absolute flex justify-center p-5 z-10 w-44 bg-white rounded-md divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <div className="flex flex-col space-y-1">
                        <div className="font-bold text-right pr-3 text-xs">Name:</div>
                        <div className="font-bold text-right pr-3 text-xs">Population:</div>
                        <div className="font-bold text-right pr-3 text-xs">Diameter:</div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="text-xs">{person.species.homeworld.name}</div>
                        <div className="text-xs">{person.species.homeworld.population}</div>
                        <div className="text-xs">{person.species.homeworld.diameter}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Button;