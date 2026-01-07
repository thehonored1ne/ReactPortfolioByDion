import { AboutMe } from './data/aboutMe';
import { FileIcons } from './data/fileIcons'
import FolderItem from './Folder'
import Modal from './Modal'
import MusicPlayer from './Playlist';

function Content({ openModals, handleOpen, handleClose, focusedModal, setFocusedModal }) {

    const folderName = ['About Me', 'Projects', 'Portfolio', 'Contact', 'Computer', 'Playlist', 'Socials'];
    const [aboutme, projects, portfolio, contact, computer, playlist, socials] = folderName;

    return (
        <div className="relative border flex grow flex-col w-full h-[calc(100vh-40px)] bg-cover bg-center bg-[url('https://i.pinimg.com/originals/bc/23/b9/bc23b955d467d91ccbcb21ba44dabf17.gif')]">

            <div className="grid grid-cols-2 md:grid-cols-15 md:grid-rows-5 gap-4 p-4 text-black font-bold font-serif">
                <FolderItem label="aboutme" filename={aboutme} iconUrl={FileIcons.aboutme} onOpen={() => handleOpen('my_modal_1')}/>
                <FolderItem label="projects" filename={projects} iconUrl={FileIcons.projects} onOpen={() => handleOpen('my_modal_4')}/>
                <FolderItem label="portfolio" filename={portfolio} iconUrl={FileIcons.portfolio} onOpen={() => handleOpen('my_modal_5')}/>
                <FolderItem label="contact" filename={contact} iconUrl={FileIcons.contacts} onOpen={() => handleOpen('my_modal_6')}/>
                <FolderItem label="computer" filename={computer} iconUrl={FileIcons.computer} onOpen={() => handleOpen('my_modal_7')}/>
                <FolderItem label="playlist" filename={playlist} iconUrl={FileIcons.playlist} onOpen={() => handleOpen('my_modal_8')}/>
                <FolderItem label="socials" filename={socials} iconUrl={FileIcons.socials} onOpen={() => handleOpen('my_modal_9')}/>
            </div>

            <Modal 
                isOpen={openModals.includes('my_modal_1')} 
                onClose={() => handleClose('my_modal_1')} 
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="About Me" 
                className="h-140"
                defaultPosition={{ x: 50, y: 50 }}
                modalId="my_modal_1"
            >

                <div className="flex justify-center m-4">
                    <div className="avatar">
                        <div className="w-24 rounded border-gray-700 border-2 border-t-white border-l-white">
                            <img src={AboutMe.imgUrl} alt="avatar" />
                        </div>
                    </div>
                </div>
                <div className="bg-white m-4 border-2 border-gray-400 border-b-white border-r-gray-200 rounded-xs">
                    <p className="p-4 text-justify font-serif text-sm">{AboutMe.introduction}</p>
                </div>
                <div className="mx-4 flex justify-around items-center border-t border-gray-400 pt-4 flex-wrap gap-2">
                    <button className="win98-btn" onClick={() => handleOpen('my_modal_2')}>Experiences</button>
                    <button className="win98-btn" onClick={() => handleOpen('my_modal_3')}>Education</button>
                </div>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_2')} 
                onClose={() => handleClose('my_modal_2')} 
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Experiences" 
                defaultPosition={{ x: 100, y: 100 }}
                modalId="my_modal_2"
            >
                <p className="p-4">{AboutMe.experience}</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_3')} 
                onClose={() => handleClose('my_modal_3')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Education" 
                defaultPosition={{ x: 150, y: 150 }}
                modalId="my_modal_3"
            >
                <p className="p-4">{AboutMe.education}</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_4')} 
                onClose={() => handleClose('my_modal_4')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Projects" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId="my_modal_4"
            >
                <p className="p-4">Project content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_5')} 
                onClose={() => handleClose('my_modal_5')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Portfolio" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId="my_modal_5"
            >
                <p className="p-5">Portfolio content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_6')} 
                onClose={() => handleClose('my_modal_6')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Contact" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId="my_modal_6"
            >
                <p className="p-5">Contact content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_7')} 
                onClose={() => handleClose('my_modal_7')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Computer" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId="my_modal_7"
            >
                <p className="p-5">Computer content...</p>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_8')} 
                onClose={() => handleClose('my_modal_8')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Playlist" 
                defaultPosition={{ x: 200, y: 150 }}
                modalId="my_modal_8"
            >
                <MusicPlayer></MusicPlayer>
            </Modal>

            <Modal 
                isOpen={openModals.includes('my_modal_9')} 
                onClose={() => handleClose('my_modal_9')}
                focusedModal={focusedModal}
                setFocusedModal={setFocusedModal}
                title="Socials" 
                defaultPosition={{ x: 200, y: 80 }}
                modalId="my_modal_9"
            >
                <p className="p-5">Socials content...</p>
            </Modal>



        </div>
    )
}

export default Content;