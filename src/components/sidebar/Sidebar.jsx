import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PetsIcon from '@mui/icons-material/Pets';
import CategoryIcon from '@mui/icons-material/Category';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TimelineIcon from '@mui/icons-material/Timeline';
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SummarizeIcon from '@mui/icons-material/Summarize';
export default function Sidebar() {
  return (
   <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                <LineStyleIcon/>
                Trang chủ 
                </li>
                <li className="sidebarListItem">
                <TrendingUpIcon/>
                Thống kê
                </li>
                <li className="sidebarListItem">
                <TimelineIcon/>
                Doanh thu
                </li>
                
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Quản lý sản phẩm</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                <PetsIcon/>
                Sản phẩm
                </li>
                <li className="sidebarListItem ">
                <CategoryIcon/>
                Danh mục
                </li>
                <li className="sidebarListItem ">
                <AssessmentIcon/>
                Báo cáo
                </li>
                
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quản lý người dùng</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                <PersonOutlineIcon/>
                Người dùng
                </li>
                <li className="sidebarListItem ">
                <StarBorderIcon/>
                Đánh giá 
                </li>
                <li className="sidebarListItem ">
                <CommentIcon/>
                Bình luận
                </li>
                <li className="sidebarListItem ">
                <ShoppingCartIcon/>
                Đơn hàng    
                </li>
                
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quản lý nhân viên</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                <AccountCircleIcon/>
                Nhân viên
                </li>
                <li className="sidebarListItem ">
                <SummarizeIcon/>
                Báo cáo
                </li>
                
            </ul>

        </div>
    </div>
   </div>
  )
}
