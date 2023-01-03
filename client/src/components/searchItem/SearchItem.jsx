import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m từ trung tâm</span>
        <span className="siTaxiOp">Taxi từ sân bay đến khách sạn miễn phí</span>
        <span className="siSubtitle">
         Khách sạn có máy lạnh
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Hủy miễn phí</span>
        <span className="siCancelOpSubtitle">
        Bạn có thể hủy phòng, Không cần thanh toán trước
        </span>
      </div>
      <div className="siDetails">
        {item.rating &&<div className="siRating">
          <span>Rất tốt</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{(item.cheapestPrice).toLocaleString("vn-de")} VND</span>
          <span className="siTaxOp">Bao gồm thuế và phí</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Xem chỗ trống</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
