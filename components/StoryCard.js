import Image from "next/image"

function StoryCard({src,name, profile}){
    return (
        <div className="relative h-40 w-20 p-1">
            <Image className="absolute z-50 opacity-100 rounded-full  cursor-pointer" src={profile} width={40} height={40} layout="fixed" objectFit="cover" alt=""/>
            <Image className="sm:hidden object-cover filter rounded-md brightness-75 " src={src} layout="fill" alt=""/>
            <p className="absolute bottom-3 truncate opacity-100 text-white font-semibold text-xs">{name}</p>
        </div>
    )
}

export default StoryCard