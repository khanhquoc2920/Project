import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Tổng hàng đã bán</span>
            <div className="featuredMoneyContainer">
                    <span className="featuredMoney">9999999</span>
                    <span className="featureMoneyRate">
                    <LocalMallIcon/>
                    </span>
            </div>
            <span className="featuredSub">
                Cập nhật vào tuần trước
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Tổng doanh thu</span>
            <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2000000</span>
                    <span className="featureMoneyRate">-11.4
                    <ArrowDownwardIcon className='featuredIcon negative'/>
                    </span>
            </div>
            <span className="featuredSub">
                Cập nhật vào tuần trước
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Feedback</span>
            <div className="featuredMoneyContainer">
                    <span className="featuredMoney">5592</span>
                    <span className="featureMoneyRate">
                    <ChatIcon/>
                    </span>
            </div>
            <span className="featuredSub">
                Cập nhật vào tuần trước
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Khách hàng ghé thăm</span>
            <div className="featuredMoneyContainer">
                    <span className="featuredMoney">59852</span>
                    <span className="featureMoneyRate">
                    <PeopleAltIcon/>
                    </span>
            </div>
            <span className="featuredSub">
                Cập nhật hôm nay
            </span>
        </div>
    </div>
    
  )
}
