import Button from "./button";
const Card = ({ person }) => {
    return (
        <div className="flex flex-col items-center space-y-2 bg-gray-200 pb-5">
            <div className="text-base font-bold py-3 bg-white w-full text-center">{person.name}</div>
            <div className="flex justify-center">
                <div className="flex flex-col space-y-1">
                    <span className="font-bold text-right pr-3 text-xs">Birth Year: </span>
                    <span className="font-bold text-right pr-3 text-xs">Gender: </span>
                    <span className="font-bold text-right pr-3 text-xs">Eye Color: </span>
                    <span className="font-bold text-right pr-3 text-xs">Hair Color: </span>
                </div>
                <div className="flex flex-col space-y-1">
                    <div className="text-xs">{person.birthYear}</div>
                    <div className="text-xs">{person.gender}</div>
                    <div className="text-xs">{person.eyeColor}</div>
                    <div className="text-xs">{person.hairColor}</div>
                </div>
            </div>
            <Button person={person} />
        </div>
    )
}

export default Card;