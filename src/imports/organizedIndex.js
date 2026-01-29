// component
export { default as Footer } from "../components/Footer";
export { default as Content } from "../pages/PortfolioContent";
export { default as FolderItem } from '../components/Folder';
export { default as Modal } from '../components/Modal';
export { default as MusicPlayer } from '../components/Playlist';
export { default as BrandIcon } from '../components/BrandLogo';
export { default as Contacts } from '../components/Contacts';
export { default as DigitalClock } from "../components/ClockTime"
export { default as MenuItems } from "../components/Menu"
export { default as SubItems } from '../components/SubMenu'
export { default as EducationTimeline } from '../components/Timeline'

// data
export { modalName } from '../data/modalId'
export { AboutMe } from '../data/aboutMe';
export { FileIcons, BrandIcons } from '../data/fileIcons';
export { getModalData } from '../data/modalData'
export { playlist } from '../data/playlist';
export { ContactInfo } from '../data/contacts'

// hooks
export { useWindowManager } from '../hooks/windowManager';
export { useMusicPlayer } from '../hooks/musicPlayer';
export { default as useTimer } from '../hooks/userTimer';

// utils
export { win95Styles, PLaylistTheme } from '../utils/themeUtils'
export { formatAudioTime } from '../utils/timeUtils';
export { formatTime } from '../utils/timeUtils';

// react
export { useRef, useEffect, useState } from 'react';
export { default as Draggable } from 'react-draggable';

// fontawesome
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export { faXmark } from '@fortawesome/free-solid-svg-icons';



