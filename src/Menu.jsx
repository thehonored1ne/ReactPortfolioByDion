
const MenuItems = ({ menuUrl, menuName, children }) => {
    return (

        <div className="group relative flex items-center justify-between px-3 py-1 hover:bg-[#000080] hover:text-white cursor-default ">

            <div className="flex items-center gap-2">
                <img src={menuUrl} className="w-10 h-10" alt="img" />
                <span>{menuName}</span>
            </div>

            <span className="text-[10px]">▶</span>

            <div className="invisible group-hover:visible absolute left-full top-0 w-48 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-md">

                {children}

            </div>

        </div>
    )
}

export default MenuItems
