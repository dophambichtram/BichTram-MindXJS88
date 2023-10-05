import React from 'react';
import './Title.css';

function Title() {
  return (
    <div className='block'>
      <div className='blockTitle'>
        <div className='textbox'>
          <img src='https://cdn-icons-png.flaticon.com/512/5873/5873130.png' width={85} color='red'></img>
          <h2>Tiết Kiệm</h2>
          <p className='ptitle'>Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.</p>
          <a href='#' className='atitle'>Xem thêm</a>
        </div>
        <div className='textbox'>
          <img src="data:image/png;base64,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" width={85}></img>
          <h2>Chất Lượng</h2>
          <p className='ptitle'>Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.</p>
          <a href='#' className='atitle'>Xem thêm</a>
        </div>
        <div className='textbox'>
          <img src='https://ipos.vn/wp-content/uploads/2020/04/Ket-noi-doi-tac-icon1.jpg' width={85}></img>
          <h2>Nhanh Chóng</h2>
          <p className='ptitle'>Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.</p>
          <a href='#' className='atitle'>Xem thêm</a>
        </div>
        <div className='textbox'>
          <img src='https://png.pngtree.com/png-clipart/20221017/original/pngtree-security-icon-png-image_8700464.png' width={85}></img>
          <h2>Bảo Mật</h2>
          <p className='ptitle'>Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.</p>
          <a href='#' className='atitle'>Xem thêm</a>
        </div>
      </div>
    </div>
  )
}

export default Title


