import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='block'>
      <div className='cover'>
        <div className='left'>
          <img src='https://whitefoobank.netlify.app/assets/img/whitefoologocap.png' width={150} />
          <p className='pfooter'>Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách các ngân hàng được người dùng bình chọn và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế giới.</p>
        </div>
        <div className='right'>
          <div className='box-introduce'>
            <h2 className='h2footer' >Giới Thiệu</h2>
            <li className='lifooter'><a className='afooter' href='#'>Về chúng tôi</a></li>
            <br />
            <li><a className='afooter' href='#'>Dịch vụ</a></li>
            <br />
            <li><a className='afooter' href='#'>Tính năng</a></li>
            <br />
            <li><a className='afooter' href='#'>Bảng giá</a></li>
          </div>
          <div className='box-support'>
            <h2 className='h2footer' >Hỗ Trợ</h2>
            <li><a className='afooter' href='#'>Câu hỏi thường gặp</a></li>
            <br />
            <li><a className='afooter' href='#'>Chính sách bảo mật</a></li>
            <br />
            <li><a className='afooter' href='#'>Điều khoản sử dụng</a></li>
            <br />
            <li><a className='afooter' href='#'>Liên hệ</a></li>
          </div>
          <div className='box-contact'>
            <h2 className='h2footer'>Liên hệ</h2>
            <li>Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</li>
            <br />
            <li>Email:admin@whitefoo.com</li>
            <br />
            <li>Phone:(+84) 1234567890</li>
          </div>
        </div>
      </div>
      <div className='under'>
        <p className='pfooter'>2020 WhiteFoo Corporation - Copyright lololol</p>
      </div>

    </div>
  )
}

export default Footer