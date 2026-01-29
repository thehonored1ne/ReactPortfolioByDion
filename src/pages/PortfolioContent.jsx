
import { modalName, AboutMe, FileIcons, BrandIcons, FolderItem, Modal, MusicPlayer, BrandIcon,  Contacts, EducationTimeline, DigitalClock } from '../imports/organizedIndex'
import { FontAwesomeIcon } from '../imports/organizedIndex';
import {faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {useNavigate } from 'react-router-dom';
import TicTacToe from '../games/TicTactoe.jsx';
import MemoryGame from '../games/MemoryMatch.jsx';

function Content({ openModals, handleOpen, handleClose, focusedModal, setFocusedModal }) {

    const folderName = ['About Me', 'Projects', 'Portfolio', 'Contact', 'Computer', 'Playlist', 'Socials', 'Resume', 'Tic Tac Toe', 'Memory Match'];
    const [aboutme, projects, portfolio, contact, computer, playlist, socials, resume, tictactoe, memorymatch] = folderName;
    const navigate = useNavigate();
    const logout = () => {
        setTimeout(() => {
         navigate('/');
      }, 2000);
    }

    return (
        <div className="relative flex grow flex-col bg-cover h-screen w-full md:h-[calc(100vh-60px)] bg-no-repeat bg-center bg-[url('/backgrounds/bgs1.png')]">

                <button type='button' onClick={logout} className="absolute bottom-12 left-0 md:hidden m-4 text-xl cursor-pointer"><FontAwesomeIcon icon={faRightFromBracket} /></button>

                <div className="absolute bottom-12 right-0 m-4 font-bold backdrop-blur-sm rounded md:hidden"><DigitalClock /></div>

            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-5 lg:grid-cols-10 lg:grid-rows-5 gap-2 p-4 text-white font-bold font-serif">

                <FolderItem alt="aboutme" filename={aboutme} iconUrl={FileIcons.aboutme} onOpen={() => handleOpen(modalName.AboutMeModal)}/>

                <FolderItem alt="projects" filename={projects} iconUrl={FileIcons.projects} onOpen={() => handleOpen(modalName.ProjectModal)}/>

                <FolderItem alt="portfolio" filename={portfolio} iconUrl={FileIcons.portfolio} onOpen={() => handleOpen(modalName.PortfolioModal)}/>

                <FolderItem alt="contact" filename={contact} iconUrl={FileIcons.contacts} onOpen={() => handleOpen(modalName.ContactModal)}/>

                <FolderItem alt="computer" filename={computer} iconUrl={FileIcons.computer} onOpen={() => handleOpen(modalName.ComputerModal)}/>

                <FolderItem alt="playlist" filename={playlist} iconUrl={FileIcons.playlist} onOpen={() => handleOpen(modalName.PlaylistModal)}/>

                <FolderItem alt="socials" filename={socials} iconUrl={FileIcons.socials} onOpen={() => handleOpen(modalName.SocialModal)}/>

                <FolderItem alt="tictactoe" filename={tictactoe} iconUrl={FileIcons.ticIcon} onOpen={() => handleOpen(modalName.TicTactoeModal)}/>

                <FolderItem alt="memorymatch" filename={memorymatch} iconUrl={FileIcons.memIcon} onOpen={() => handleOpen(modalName.MemoryMatch)}/>

                <a href="/files/cv.pdf" download="2026-Dion-Areglo-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center text-5xl hover:bg-teal-700/25 rounded-sm p-2 cursor-pointer text-center">
                    <img src={FileIcons.resume} alt="img" className="my-3 w-15 h-15"/>
                    <span className="text-sm">{resume}</span>
                </a>

            </div>

            {/* About Me Modal */}

            <Modal 
                isOpen={openModals.includes(modalName.AboutMeModal)} 
                onClose={() => handleClose(modalName.AboutMeModal)} 
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={aboutme}
                className="min-h-150 max-h-130 md:w-120 mx-4"
                defaultPosition={{ x: 50, y: 50 }}
                modalId={modalName.AboutMeModal}
            >

                <div className=" p-3 flex m-4 gap-2">
                    <div className="avatar">
                        <div className="w-24 rounded border-gray-700 border-2 border-t-white border-l-white">
                            <img src={AboutMe.imgUrl} alt="avatar" />
                        </div>
                    </div>

                    <div className="border-2 border-b-white border-r-white p-2 flex flex-col grow font-mono">
                        <span><b>Name:</b> Dion L. Areglo</span>
                        <span><b>Age:</b> 22</span>
                        <span><div className="status status-success animate-bounce"></div> Online</span>
                    </div>
                </div>

                <div className="bg-white m-4 border-2 border-gray-400 border-b-white border-r-gray-200 rounded-xs">
                    <p className="p-4 text-justify font-serif text-sm">{AboutMe.introduction}</p>
                </div>

                <div className="mx-4 flex justify-around items-center border-t border-gray-400 pt-4 flex-wrap gap-2">
                    <button className="win98-btn" onClick={() => handleOpen(modalName.ExperienceModal)}>Experiences</button>
                    <button className="win98-btn" onClick={() => handleOpen(modalName.EducationModal)}>Education</button>
                </div>
            </Modal>

            {/* Experience Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.ExperienceModal)} 
                onClose={() => handleClose(modalName.ExperienceModal)} 
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Experiences" 
                defaultPosition={{ x: 100, y: 100 }}
                modalId={modalName.ExperienceModal}
                className="min-h-150 max-h-130 md:w-120 mx-4"
            >
                <p className="p-4">{AboutMe.experience}</p>
            </Modal>

            {/* Education Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.EducationModal)} 
                onClose={() => handleClose(modalName.EducationModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Education" 
                defaultPosition={{ x: 150, y: 150 }}
                modalId={modalName.EducationModal}
                className=" mx-4"
            >
                <EducationTimeline elem={AboutMe.elementary} hs={AboutMe.highschool} shs={AboutMe.seniorhigh} college={AboutMe.college}></EducationTimeline>
                
            </Modal>

            {/* Projects Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.ProjectModal)} 
                onClose={() => handleClose(modalName.ProjectModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={projects} 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.ProjectModal}
                className=" mx-4"
            >
                <p className="p-4">Project content...</p>
            </Modal>

            {/* Portfolio Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.PortfolioModal)} 
                onClose={() => handleClose(modalName.PortfolioModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={portfolio} 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.PortfolioModal}
                className=" mx-4"
            >
                <p className="p-5">Portfolio content...</p>
            </Modal>

            {/* Contact Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.ContactModal)} 
                onClose={() => handleClose(modalName.ContactModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={contact} 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.ContactModal}
                className="mx-4"
            >
                <Contacts></Contacts>
            </Modal>

            

            {/* Computer Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.ComputerModal)} 
                onClose={() => handleClose(modalName.ComputerModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={computer}
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.ComputerModal}
                className=" mx-4"
            >
                <h1 className="font-bold text-2xl mx-2">Device Spefications</h1>
                <div className="border-2 border-dashed m-3 p-4 font-stretch-ultra-expanded text-lg bg-teal-200/25">
                    <h1><strong>Device name:</strong> Dion</h1>
                    <h1><strong>Brand:</strong> Acer A314-23P</h1>
                    <h1><strong>Processor:</strong> AMD Ryzen 5 7520U with Radeon Graphics(2.80 GHz)</h1>
                    <h1><strong>Installed RAM:</strong> 16.0 GB</h1>
                    <h1><strong>System type:</strong> 64-bit operating system, x64-based processor</h1>
                </div>
            </Modal>

            {/* Playlist Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.PlaylistModal)} 
                onClose={() => handleClose(modalName.PlaylistModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={playlist}
                defaultPosition={{ x: 200, y: 150 }}
                modalId={modalName.PlaylistModal}
                className=" mx-4 w-full h-170"
            >
                <MusicPlayer></MusicPlayer>
            </Modal>

            {/* Socials Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.SocialModal)} 
                onClose={() => handleClose(modalName.SocialModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={socials} 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.SocialModal}
                className=" mx-4"
            >
                <div className="border-2 border-dotted p-3 flex gap-4 justify-evenly flex-wrap">
                    <BrandIcon logoSrc={BrandIcons.facebook} linkHref="https://web.facebook.com/dion.areglo.1"></BrandIcon>
                    <BrandIcon logoSrc={BrandIcons.github} linkHref="#"></BrandIcon>
                    <BrandIcon logoSrc={BrandIcons.linkedin} linkHref="#"></BrandIcon>
                </div>
            </Modal>

            {/* Tic Tac Toe Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.TicTactoeModal)} 
                onClose={() => handleClose(modalName.TicTactoeModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={tictactoe} 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.TicTactoeModal}
                className=" mx-4"
            >
                <TicTacToe></TicTacToe>
            </Modal>

            {/* Memory Match Modal */}
            <Modal 
                isOpen={openModals.includes(modalName.MemoryMatch)} 
                onClose={() => handleClose(modalName.MemoryMatch)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title={memorymatch} 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.MemoryMatch}
                className=" mx-4"
            >
                <MemoryGame></MemoryGame>
            </Modal>

        </div>
    )
}

export default Content;