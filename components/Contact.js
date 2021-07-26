import Image from "next/image"

function Contact({src, name}){
    return(
        <div className="flex items-center space-x-2 relative -ml-60 mt-4 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image className="rounded-full" src={src} width={50} height={50} layput="fixed" objectFill="cover" alt=""/>
            <p>{name}</p>
            <div className="absolute bottom-2 left-9 bg-green-400 h-3 w-3 rounded-full"></div>
        </div>
    )
}

export default Contact