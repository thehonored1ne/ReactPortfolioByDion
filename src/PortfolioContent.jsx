import Contacts from './Contacts';
import { AboutMe } from './data/aboutMe';
import { FileIcons } from './data/fileIcons'
import FolderItem from './Folder'
import Modal from './Modal'
import MusicPlayer from './Playlist';
import BrandIcon from './components/BrandLogo'

function Content({ openModals, handleOpen, handleClose, focusedModal, setFocusedModal }) {

    const folderName = ['About Me', 'Projects', 'Portfolio', 'Contact', 'Computer', 'Playlist', 'Socials', 'Resume'];
    const [aboutme, projects, portfolio, contact, computer, playlist, socials, resume] = folderName;

    const modalName = {
        AboutMeModal: 'my_modal_1',
        ExperienceModal: 'my_modal_2',
        EducationModal: 'my_modal_3',
        ProjectModal: 'my_modal_4',
        PortfolioModal: 'my_modal_5',
        ContactModal: 'my_modal_6',
        ComputerModal: 'my_modal_7',
        PlaylistModal: 'my_modal_8',
        SocialModal: 'my_modal_9'
    }

    return (
        <div className="relative border flex grow flex-col w-full h-[calc(100vh-40px)] bg-cover bg-center bg-[url('https://i.pinimg.com/originals/bc/23/b9/bc23b955d467d91ccbcb21ba44dabf17.gif')]">

            <div className="grid grid-cols-2 md:grid-cols-15 md:grid-rows-5 gap-4 p-4 text-black font-bold font-serif">

                <FolderItem label="aboutme" filename={aboutme} iconUrl={FileIcons.aboutme} onOpen={() => handleOpen(modalName.AboutMeModal)}/>
                <FolderItem label="projects" filename={projects} iconUrl={FileIcons.projects} onOpen={() => handleOpen(modalName.ProjectModal)}/>
                <FolderItem label="portfolio" filename={portfolio} iconUrl={FileIcons.portfolio} onOpen={() => handleOpen(modalName.PortfolioModal)}/>
                <FolderItem label="contact" filename={contact} iconUrl={FileIcons.contacts} onOpen={() => handleOpen(modalName.ContactModal)}/>
                <FolderItem label="computer" filename={computer} iconUrl={FileIcons.computer} onOpen={() => handleOpen(modalName.ComputerModal)}/>
                <FolderItem label="playlist" filename={playlist} iconUrl={FileIcons.playlist} onOpen={() => handleOpen(modalName.PlaylistModal)}/>
                <FolderItem label="socials" filename={socials} iconUrl={FileIcons.socials} onOpen={() => handleOpen(modalName.SocialModal)}/>

                <a href="/cv.pdf" download="2026-Dion-Areglo-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center text-5xl hover:bg-teal-700/25 rounded-sm p-2 cursor-pointer text-center">
                    <img src="https://win98icons.alexmeub.com/icons/png/file_lines-0.png" alt="img" className="my-3"/>
                    <span className="text-sm">{resume}</span>
                </a>

            </div>

            <Modal 
                isOpen={openModals.includes(modalName.AboutMeModal)} 
                onClose={() => handleClose(modalName.AboutMeModal)} 
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="About Me" 
                className="h-140"
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
                        <span><b>Status:</b> Single</span>
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

            <Modal 
                isOpen={openModals.includes(modalName.ExperienceModal)} 
                onClose={() => handleClose(modalName.ExperienceModal)} 
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Experiences" 
                defaultPosition={{ x: 100, y: 100 }}
                modalId={modalName.ExperienceModal}
            >
                <p className="p-4">{AboutMe.experience}</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.EducationModal)} 
                onClose={() => handleClose(modalName.EducationModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Education" 
                defaultPosition={{ x: 150, y: 150 }}
                modalId={modalName.EducationModal}
            >
                <p className="p-4">{AboutMe.education}</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.ProjectModal)} 
                onClose={() => handleClose(modalName.ProjectModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Projects" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.ProjectModal}
            >
                <p className="p-4">Project content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.PortfolioModal)} 
                onClose={() => handleClose(modalName.PortfolioModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Portfolio" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.PortfolioModal}
            >
                <p className="p-5">Portfolio content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.ContactModal)} 
                onClose={() => handleClose(modalName.ContactModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Contact" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.ContactModal}
            >
                <Contacts></Contacts>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.ComputerModal)} 
                onClose={() => handleClose(modalName.ComputerModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Computer" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.ComputerModal}
            >
                <p className="p-5">Computer content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.PlaylistModal)} 
                onClose={() => handleClose(modalName.PlaylistModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Playlist" 
                defaultPosition={{ x: 200, y: 150 }}
                modalId={modalName.PlaylistModal}
            >
                <MusicPlayer></MusicPlayer>
            </Modal>

            <Modal 
                isOpen={openModals.includes(modalName.SocialModal)} 
                onClose={() => handleClose(modalName.SocialModal)}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Social Media Accounts" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId={modalName.SocialModal}
            >
                <div className="border-2 border-dotted p-3 flex gap-4 justify-evenly flex-wrap">
                    <BrandIcon logoSrc="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png" linkHref="https://web.facebook.com/dion.areglo.1"></BrandIcon>
                    <BrandIcon logoSrc="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" linkHref="#"></BrandIcon>
                    <BrandIcon logoSrc="https://cdn-icons-png.freepik.com/512/2496/2496097.png" linkHref="#"></BrandIcon>
                </div>
            </Modal>

        </div>
    )
}

export default Content;