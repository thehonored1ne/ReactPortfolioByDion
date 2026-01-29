import { DigitalClock, MenuItems, FileIcons, SubItems, getModalData } from '../imports/organizedIndex'
import CustomDropdown from './HiddenMenu';
import { FontAwesomeIcon } from '../imports/organizedIndex';
import { faWifi, faBatteryHalf, faVolumeHigh, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {useNavigate } from 'react-router-dom';

function Footer({ openModals = [], focusedModal }) {

    const navigate = useNavigate();

    const logout = () => {
        setTimeout(() => {
         navigate('/');
      }, 2000);
    }

    return (
        <div className="border p-1 w-full flex items-center bg-gray-300 text-black border-t-2 border-white flex-row h-full shadow-[inset_1px_1px_#dfdfdf]">

            <div className="flex items-center gap-2">

                <div className="dropdown dropdown-top ml-2">

                    <div tabIndex={0} role="button" className="flex items-center gap-1 bg-gray-300 font-bold px-2 py-0.5  text-sm cursor-pointer active:border-t-black active:border-l-black active:border-b-white active:border-r-white hover:bg-gray-400 hover:rounded-md">
                        <img src={FileIcons.start} className="w-9 h-9" alt="window" />                     
                    </div>

                    <ul tabIndex="-1" className="dropdown-content menu bg-transparent rounded-sm z-1 w-50 p-1 shadow-sm text-black mb-4">

                        <div className=" w-full bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-md text-sm">
                        

                            <MenuItems menuUrl={FileIcons.menuIcon1} menuName="menu1">
                                <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                                <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            </MenuItems>

                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>
                            <SubItems subMenuUrl={FileIcons.menuIcon2} subName="subitem2"/>

                            <div className="h-15 flex justify-between items-center p-2 mx-2">
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIjC5aBPdnAqKTT7ma87HW2kX_WCH23WFfEevdDvuuqVASOyu-z=s288-c-no" />
                                    </div>
                                </div>
                                <button onClick={logout} className="py-2 px-2.5 rounded-full hover:bg-gray-400 duration-200 cursor-pointer">
                                  <FontAwesomeIcon icon={faRightFromBracket} />  
                                </button>
                            </div>

                        </div>
                    
                    </ul>
                </div>

            </div>

            <div className="flex-1 flex gap-2 px-2 overflow-x-auto h-full items-center text-black mx-2 w-full">
                
                { openModals.map((modalId) => {

                    const { icon } = getModalData(modalId);

                    const isActive = focusedModal === modalId;

                    return (
                        <div 
                            key={modalId} 
                            className={`py-5 px-2 flex items-center justify-center min-w-15 max-w-37.5 h-7 cursor-default transition-all hover:bg-gray-400 ${isActive ? 
                            "border-b-4 border-blue-600" :
                            "border-b-4 border-gray-500"}`}
                        >
                            <img src={icon} className="w-8 h-8" alt="icon" />
                        </div>
                    )
                })}

            </div>


            <CustomDropdown />

            <div className="flex items-center gap-3 p-2 mr-2">
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faVolumeHigh} />
                <FontAwesomeIcon icon={faBatteryHalf} />
            </div>

            <div className="bg-gray-300 border-2 border-t-gray-600 border-l-gray-600 border-b-white border-r-white px-2 flex items-center h-7 shadow-inner mr-2">
                <DigitalClock />
            </div>
            
        </div>
    );
}

export default Footer;