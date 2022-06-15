import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">Sản phẩm nổi bật</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Mèo anh lông dài</span>
            <span className="widgetSmUserTitle">Dev</span>
          </div>
          <button className="widgetSmBtn">
            <VisibilityIcon className='widgetSmIcon'/>
            Xem 
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Mèo anh lông dài</span>
            <span className="widgetSmUserTitle">Dev</span>
          </div>
          <button className="widgetSmBtn">
            <VisibilityIcon className='widgetSmIcon'/>
            Xem 
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Mèo anh lông dài </span>
            <span className="widgetSmUserTitle">Dev</span>
          </div>
          <button className="widgetSmBtn">
            <VisibilityIcon className='widgetSmIcon'/>
            Xem
          </button>
        </li>
        

      </ul>
    </div>
  )
}
