
const FolderItem = ({ iconUrl, alt, filename, onOpen }) => {

    return (
        
        <div className="flex flex-col justify-center items-center text-5xl hover:bg-teal-700/25 rounded-sm p-2 cursor-pointer text-center"
            onClick={onOpen}>
            <img src={iconUrl} alt={alt} className="my-2 w-10 h-10 md:w-15 md:h-15" />
            <span className="text-sm">{filename}</span>
        </div>
    )
};

export default FolderItem