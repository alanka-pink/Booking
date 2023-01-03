import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Đất nước</li>
          <li className="fListItem">Vùng</li>
          <li className="fListItem">Thành phố</li>
          <li className="fListItem">Địa chỉ</li>
          <li className="fListItem">Sân bay</li>
          <li className="fListItem">Khách sạn</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Hostels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hồ trợ khách hàng</li>
          <li className="fListItem">Đối tác</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Khách sạn.</div>
    </div>
  );
};

export default Footer;
