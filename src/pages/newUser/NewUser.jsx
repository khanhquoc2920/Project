import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
         <h2 className="newUserTitle">Thêm thành viên</h2>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Tên tài khoản</label>
          <input type="text" placeholder="khanhDz" />
        </div>
        <div className="newUserItem">
          <label>Họ Tên</label>
          <input type="text" placeholder="Lê Quốc Khánh" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="khanhquoc292@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Mật khẩu</label>
          <input type="password" placeholder="*********" />
        </div>
        <div className="newUserItem">
          <label>SĐT</label>
          <input type="text" placeholder="+869280017" />
        </div>
        <div className="newUserItem">
          <label>Địa chỉ</label>
          <input type="text" placeholder="Hue | VietNam " />
        </div>
        <div className="newUserItem">
          <label>Giới tính</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Nam</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Nữ</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Khác</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Trạng thái</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Kích hoạt</option>
            <option value="no">Ẩn</option>
          </select>
        </div>
        <br />
        <button className="newUserButton">Tạo tài khoản</button>
      </form>
    </div>
  )
}
