import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Cập nhật</h1>
       
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://vtv1.mediacdn.vn/thumb_w/650/2020/8/5/11707537937887109944759096401674123002289793o-1596615779281752133639-crop-1596615789986723827443.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Lê Quốc Khánh</span>
              <span className="userShowUserTitle">Front-End Dev</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Thông tin tài khoản</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">KhanhDzai292</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">02.09.2000</span>
            </div>
            
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+86928001</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">khanhquoc2920@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Hue | VietNam</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Cập nhật thông tin</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Tên tài khoản</label>
                <input
                  type="text"
                  placeholder="khanhdz292"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Họ Tên</label>
                <input
                  type="text"
                  placeholder="Lê Quốc Khánh"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="khanhquoc2920@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>SĐT</label>
                <input
                  type="text"
                  placeholder="+869280017"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Hue | VN"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://vtv1.mediacdn.vn/thumb_w/650/2020/8/5/11707537937887109944759096401674123002289793o-1596615779281752133639-crop-1596615789986723827443.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
