import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed(){
    return(
        <div className="flex-grow h-screen pt-6 pb-44 mr-64 overflow-y-auto">
            <div className="mx-auto max-w-md">
                {/*Stories*/}
                <Stories/>
                {/*Input Box*/}
                <InputBox/>
                {/*Posts*/}
                <Posts/>
                
            </div>
            
        </div>
    )
}

export default Feed