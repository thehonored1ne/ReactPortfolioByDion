
const SubItems = ({ subMenuUrl, subName }) => {
    return (
        <div className="px-3 py-1 text-black hover:bg-[#000080] hover:text-white flex items-center gap-2">
            <img src={subMenuUrl} className="w-10 h-10" alt="img" />
            <span>{subName}</span>
        </div>
    )
}

export default SubItems