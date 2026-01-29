import { win95Styles } from '../imports/organizedIndex'

const SubItems = ({ subMenuUrl, subName }) => {
    return (
        <div className={win95Styles.submenu.container}>
            <img src={subMenuUrl} className="w-10 h-10" alt="img" />
            <span>{subName}</span>
        </div>
    )
}

export default SubItems
