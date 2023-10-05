import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='cover'>
        <div className='left'>
          <img src='https://whitefoobank.netlify.app/assets/img/whitefoologocap.png' />
          <p className='pfooter'>Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách các ngân hàng được người dùng bình chọn và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế giới.</p>
        </div>
        <div className='right'>
          <div className='box-introduce'>
            <h2 className='footer_title' >Giới Thiệu</h2>
            <li><a className='pfooter' href='#'>Về chúng tôi</a></li>
            <br />
            <li><a className='pfooter' href='#'>Dịch vụ</a></li>
            <br />
            <li><a className='pfooter' href='#'>Tính năng</a></li>
            <br />
            <li><a className='pfooter' href='#'>Bảng giá</a></li>
          </div>
          <div className='box-support'>
            <h2 className='footer_title' >Hỗ Trợ</h2>
            <li><a className='pfooter' href='#'>Câu hỏi thường gặp</a></li>
            <br />
            <li><a className='pfooter' href='#'>Chính sách bảo mật</a></li>
            <br />
            <li><a className='pfooter' href='#'>Điều khoản sử dụng</a></li>
            <br />
            <li><a className='pfooter' href='#'>Liên hệ</a></li>
          </div>
          <div className='box-contact'>
            <h2 className='footer_title'>Liên hệ</h2>
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