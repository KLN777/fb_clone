function HeaderIcon({Icon}){
    return(
        <div className="cursor-pointer px-8 py-3 rounded-xl hover:bg-gray-200 ">
            <Icon className="h-5 w-5 text-gray-400 hover:text-blue-400"/>
        </div>
    )
}

export default HeaderIcon