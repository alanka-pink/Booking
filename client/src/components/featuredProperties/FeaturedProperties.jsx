import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";


const FeaturedProperties = () => {

  const {data, loading,error} = useFetch("/hotels?featured=true&limit=2");

  return (
    <div className="fp">
      {loading ? ("Loading"
      ) : (
       <>

      {data.map((item)=>(
      <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt="" 
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Giá từ {(item.cheapestPrice).toLocaleString("vn-de")}VND</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Tốt</span>
        </div>}
      </div>
      ))}
      </>
      )}
    </div>
  );
};

export default FeaturedProperties;
