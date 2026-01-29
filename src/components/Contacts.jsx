import { ContactInfo, win95Styles } from '../imports/organizedIndex'

const Contacts = () => {

    return (
        
        <div className={win95Styles.contacts.wrapper}>

            <div className={win95Styles.contacts.contactContainer}>
                
                <div className={win95Styles.contacts.contactInfo}>
                    <img src={ContactInfo.imgLink} alt="img" />
                    <h1>{ContactInfo.title}</h1>
                </div>
                
                <p className="text-xl">{ContactInfo.subtext}</p>

            </div>

            <ul className={win95Styles.contacts.listWrapper}>

                <li>
                    <div>
                        <p className={win95Styles.contacts.list}>
                            ✉
                            <a href={ContactInfo.emailLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className=" hover:underline"  
                            >
                                <span className="mx-2">Email: {ContactInfo.email}</span>
                            </a>
                        </p>
                    </div>
                </li>

                <li>
                    <p className={win95Styles.contacts.list}>📞 <span className="mx-2">Phone #: {ContactInfo.phoneNumber}</span></p>
                </li>

            </ul>
            
        </div>
    )
}

export default Contacts