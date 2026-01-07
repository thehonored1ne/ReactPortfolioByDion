
const FolderItem = ({ iconUrl, label, filename, onOpen }) => {
    return (
        <div className="flex flex-col justify-center items-center text-5xl hover:bg-teal-700/25 rounded-sm p-2 cursor-pointer text-center"
            onClick={onOpen}>
            <img src={iconUrl} alt={label} className="my-2" />
            <span className="text-sm">{filename}</span>
        </div>
    )
};

export default FolderItem