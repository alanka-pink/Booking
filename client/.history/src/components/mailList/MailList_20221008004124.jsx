import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiệt kiệm tiền!</h1>
      <span className="mailDesc">Đăng ký và chúng tôi sẽ gửi cho bạn những ưu đãi tốt nhất</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email của bạn" />
        <button>Đăng Ký</button>
      </div>
    </div>
  )
}

export default MailList