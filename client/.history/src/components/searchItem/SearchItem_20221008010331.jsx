import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Như quỳnh</h1>
        <span className="siDistance">500m từ trung tâm</span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">
         Khách sạn có máy lạnh
        </span>
        <span className="siFeatures">
          Toàn bộ khách sạn • 1 nhà tắm • 21m² 1 giường ngủ
        </span>
        <span className="siCancelOp">Hủy miễn phí </span>
        <span className="siCancelOpSubtitle">
        Bạn có thể hủy phòng, vì vậy hãy chốt giá ưu đãi này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Rất tốt</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">1.200.000 VND</span>
          <span className="siTaxOp">Bao gồm thuế và phí</span>
          <button className="siCheckButton">Còn phòng</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
