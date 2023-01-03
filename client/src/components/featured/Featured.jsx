import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const {data, loading,error} = useFetch("/hotels/countByCity?cities=Đà Nẵng,Hồ Chí Minh,Đà Lạt")

  console.log(data)
  return (
    <div className="featured">
      {loading ?"Loading please wait"
      :
        <><div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1505018620898-92616e1849cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà Nẵng</h1>
          <h2>{data[0]} Địa điểm</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hồ Chí Minh</h1>
          <h2>{data[1]} Địa Điểm</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1562257063-ee4f29502294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=965&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà Lạt</h1>
          <h2>{data[2]} Địa điểm</h2>
        </div>
      </div></>}
    </div>
  );
};

export default Featured;
