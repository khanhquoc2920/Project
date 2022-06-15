import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type ,value}) => {
    return <button className={"widgetLgButton " + type}>{value}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Đơn hàng mới nhất</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Tên sản phẩm</th>
          <th className="widgetLgTh">Ngày đặt</th>
          <th className="widgetLgTh">Số tiền</th>
          <th className="widgetLgTh">Trạng thái</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chó Corgi</span>
          </td>
          <td className="widgetLgDate">22/3/2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" value="Đã thanh toán" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" value="Đang giao hàng" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" value="Đã hủy" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" value="Đang giao hàng"/>
          </td>
        </tr>
      </table>
    </div>
  );
}