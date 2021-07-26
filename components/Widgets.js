import {SearchIcon} from "@heroicons/react/outline";
import {VideoCameraIcon, DotsHorizontalIcon} from "@heroicons/react/solid"
import Contact from "./Contact"
const contacts = [
    {src: "https://links.papareact.com/zvy", name:"Bill Gates"}
];

function Widgets(){
    return(
        <div>
            <div className=" flex  justify-between items-center mt-5 text-gray-500 -ml-60">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>

            {contacts.map(contact => (
                <Contact
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    )
}

export default Widgets