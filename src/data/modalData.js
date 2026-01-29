import { FileIcons } from './fileIcons';

const config = {
    my_modal_1: { title: "About Me", icon: FileIcons.aboutme },
    my_modal_2: { title: "Experience", icon: FileIcons.projects },
    my_modal_3: { title: "Education", icon: FileIcons.projects },
    my_modal_4: { title: "Projects", icon: FileIcons.projects },
    my_modal_5: { title: "Portfolio", icon: FileIcons.portfolio },
    my_modal_6: { title: "Contacts", icon: FileIcons.contacts },
    my_modal_7: { title: "My Computer", icon: FileIcons.computer },
    my_modal_8: { title: "Playlist", icon: FileIcons.playlist },
    my_modal_9: { title: "Socials", icon: FileIcons.socials },
    my_modal_10: { title: "Tic Tac Toe", icon: FileIcons.ticIcon },
    my_modal_11: { title: "Memory Match", icon: FileIcons.projects },
};

export const getModalData = (modalDataId) => {
    return config[modalDataId] || { title: "Window", icon: FileIcons.menuIcon1 };
};