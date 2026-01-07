import DigitalClock from "./ClockTime"
import MenuItems from "./Menu"
import { FileIcons } from './data/fileIcons'
import SubItems from './SubMenu'

// Add { openModals } to the function arguments
function Footer({ openModals = [] }) {

    // Helper to turn modal IDs into clean titles
    const getModalTitle = (id) => {
        const titles = {
            my_modal_1: "About Me",
            my_modal_2: "Experiences",
            my_modal_3: "Education",
            my_modal_4: "Projects",
            my_modal_5: "Portfolio",
            my_modal_6: "Contact",
            my_modal_7: "Computer",
            my_modal_8: "Playlist",
            my_modal_9: "Socials"
        };
        return titles[id] || "Window";
    };

    return (
        <div className="border p-1 w-full flex justify-between items-center bg-gray-300 text-black border-t-2 border-white flex-row h-full shadow-[inset_1px_1px_#dfdfdf]">

            {/* Start Button Section */}
            <div className="flex items-center">
                <div className="dropdown dropdown-top">
                    <div tabIndex={0} role="button" className="flex items-center gap-1 bg-gray-300 font-bold px-2 py-0.5 border-2 border-t-white border-l-white border-b-black border-r-black text-sm cursor-pointer active:border-t-black active:border-l-black active:border-b-white active:border-r-white">
                        <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" className="w-5 h-5" alt="window" />
                        Start
                    </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-transparent rounded-sm z-1 w-70 h-100 p-1 shadow-sm mb-2 text-black">

                    <div className="relative w-full bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-md text-sm">
                    

                        {/* Menu Item with Submenu */}
                        <MenuItems menuUrl={FileIcons.menuIcon1} menuName="menu1">
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        </MenuItems>

                        <MenuItems menuUrl={FileIcons.menuIcon1} menuName="menu1">
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        </MenuItems>

                        <MenuItems menuUrl={FileIcons.menuIcon1} menuName="menu1">
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        </MenuItems>

                        <MenuItems menuUrl={FileIcons.menuIcon1} menuName="menu1">
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        </MenuItems>

                        {/* Sub Menu Components */}
                        <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                        <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>


                    </div>
                </ul>
                </div>
            </div>

            {/* TASKBAR AREA: The code you wanted to add goes here */}
            <div className="flex-1 flex gap-1 px-2 overflow-x-auto h-full items-center text-black">
                {openModals.map((modalId) => (
                    <div 
                        key={modalId} 
                        className="bg-gray-300 border-2 border-t-white border-l-white border-b-black border-r-black px-2 py-1 flex items-center min-w-[80px] max-w-[150px] h-7 shadow-sm cursor-default"
                    >
                        <img src="https://win98icons.alexmeub.com/icons/png/msg_information-0.png" className="w-4 h-4 mr-1.5" alt="icon" />
                        <span className="text-[11px] font-serif truncate font-bold">
                            {getModalTitle(modalId)}
                        </span>
                    </div>
                ))}
            </div>

            {/* Clock Section */}
            <div className="bg-gray-300 border-2 border-t-gray-600 border-l-gray-600 border-b-white border-r-white px-2 flex items-center h-7 shadow-inner">
                <DigitalClock />
            </div>
        </div>
    );
}

export default Footer;