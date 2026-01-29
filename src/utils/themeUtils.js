
export const win95Styles = {
    container: {
        backgroundColor: '#c0c0c0',
        border: '2px solid',
        borderBottomColor: '#404040',
        borderRightColor: '#404040',
        borderTopColor: '#dfdfdf',
        borderLeftColor: '#dfdfdf',
        fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
        boxShadow: '1px 1px 0 0 black',
    },
    closeBtn: {
        width: '16px',
        height: '14px',
        backgroundColor: '#c0c0c0',
        border: '1px solid white',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        fontSize: '9px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        backgroundColor: 'black',
        color: '#00ff00',
        padding: '5px',
        border: '2px inset #dfdfdf',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        height: '60px'
    },
    art: {
        width: '50px',
        height: '50px',
        border: '1px solid #555'
    },
    button: {
        color: 'white',
        cursor: 'pointer',
        fontSize: '25px',
        flex: 1,
        fontWeight: 'bold',
    },
    range: {
        width: '100%',
        cursor: 'pointer',
    },
    playlistBox: {
        backgroundColor: 'white',
        border: '2px inset #dfdfdf',
        overflowY: 'scroll',
        fontSize: '12px',
        color: 'black'
    },
    listItem: {
        padding: '10px 10px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    modal: {
        wrapper: "absolute top-0 left-0",
        container: "bg-gray-300 min-w-80 text-black p-1 border-3 border-t-white border-l-white border-b-gray-800 border-r-gray-800 rounded-sm shadow-2xl overflow-hidden",
        header: "modal-header flex items-center gap-2 p-1 text-white font-serif cursor-move select-none mb-1",
        button: "bg-gray-300 text-black border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-1 hover:bg-gray-200 active:border-t-gray-800 active:border-l-gray-800 cursor-pointer",
        child: "overflow-auto max-h-[70vh] bg-gray-300",
        title: "flex-1 font-bold text-sm truncate"
    },
    submenu: {
        container: "px-3 py-1 text-black hover:bg-[#000080] hover:text-white flex items-center gap-2"
    },
    contacts: {
        wrapper: "",
        contactContainer: "border-2 border-gray-600 border-r-white border-b-white p-3 my-3",
        contactInfo: "flex justify-start items-center gap-3 text-xl my-2 font-bold",
        listWrapper: "m-4 flex flex-col gap-4 justify-center items-center text-center",
        list: "text-xl font-bold",
    }

};

export const PLaylistTheme = {
    gridItem: {
        backgroundColor: '#c0c0c0',
        border: '2px solid',
        borderBottomColor: '#404040',
        borderRightColor: '#404040',
        borderTopColor: '#dfdfdf',
        borderLeftColor: '#dfdfdf',
        boxShadow: '1px 1px 0 0 black',
        cursor: 'pointer',
        padding: '2px 5px',
        display: 'grid'
    }
}