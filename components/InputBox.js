import Image from 'next/image'
import {useSession} from "next-auth/client"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from"@heroicons/react/solid"
import {useRef} from "react"
import {db, storage} from "../firebase"
import firebase from 'firebase';
import 'firebase/firestore';
import {useState} from "react"

function InputBox(){

    const [session] = useSession();

    const inputRef = useRef(null);
    const filePickerRef =useRef(null);

    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) =>{
        e.preventDefault();

        if(!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(doc => {
            if(imageToPost){
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');
                removeImage();
                uploadTask.on("state_change", null, (err) => console.log(err), 
                () => {
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        }, { merge: true })
                    })
                })
            }
        })

        inputRef.current.value = "";
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = readerEvent => {
            setImageToPost(readerEvent.target.result);
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return(
        <div className="bg-white rounded-md mt-6 p-2 shadow-md font-medium">
            <div className="flex space-x-4 items-center p-4 border-b-2">
                <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed"></Image>
                <form className="flex flex-1">
                    <input className="rounded-full h-12 bg-gray-200 flex-grow px-5 focus:outline-none" type="text" ref={inputRef} placeholder={`What's on your mind, ${session.user.name}`}/>
                    <button type="submit" hidden onClick={sendPost}>Submit</button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col">
                        <Image className="object-contain" layout="fill" src={imageToPost} alt=""/>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly p-3">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs ">Live Video</p>
                </div>
                <div className="inputIcon" onClick={() => filePickerRef.current.click()}>
                    <CameraIcon className="h-7 text-green-500"/>
                    <p className="text-xs ">Photo/Video</p>
                    <input hidden ref={filePickerRef} type="file" onChange={addImageToPost}></input>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-500"/>
                    <p className="text-xs ">Feeling/Activity</p>
                </div>
                
            </div>
        </div>
        
    )
}

export default InputBox