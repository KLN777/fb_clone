import Image from "next/image"
import {ShareIcon, ThumbUpIcon, ChatAltIcon} from "@heroicons/react/outline"
function Post({key,name,email,message,timestamp,image,postImage}){
    return (
        <div className="flex flex-col">
            <div className=" p-3 rounded-lg shadow-sm mt-5 bg-white">
                <div className="flex items-center space-x-2">
                    <Image className="rounded-full" src={image} width={40} height={40}/>
                    <div className="flex flex-col pl-2">
                        <p className="text-sm font-medium">{name}</p>
                        <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>

                <p className="pt-4 pb-2">{message}</p>

                {postImage && (
                    <div className="relative h-96">
                        <Image className="rounded-lg" src={postImage} objectFit="cover" layout="fill" alt=""/>
                    </div>
                )}

                <div className="flex justify-between items-center text-gray-500 pt-2">
                    <div className="inputIcon">
                        <ThumbUpIcon className="h-4"/>
                        <p className="text-xs">Like</p>
                    </div>
                    <div className="inputIcon">
                        <ChatAltIcon className="h-4"/>
                        <p className="text-xs">Comment</p>
                    </div>
                    <div className="inputIcon">
                        <ShareIcon className="h-4"/>
                        <p className="text-xs">Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post