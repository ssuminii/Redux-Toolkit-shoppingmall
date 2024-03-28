import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'



const Navbar = ({authenticate}) => {
    const menuList = ['Woman', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', '지속가능성'];

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToHome = () => {
        navigate('/');
    }

  return (
    <div>
        <div className='main-nav'>
            <ul className='etc-link'>
                <li>
                    <a href="#">고객 서비스</a>
                </li>
                <li>
                    <a href="#">뉴스레터</a>
                </li>
                <li>
                    <a href="#">매장 찾기</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faEllipsis} /></a>
                </li>
            </ul>
            <div className='nav-logo' onClick={goToHome}>
                <img width={80} src="data:image/png;base64,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" alt="ZAHfK7LObodKCx8GYkFOuFZTtPJU31u6NnXXM60XBhmAgEhSD7SU4GnsWD" />
            </div>
            <div className='login-button'>
                <div className='login' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{authenticate === true ? '로그아웃' : '로그인'}</div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHeart} />
                    <div>즐겨찾기</div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <div>쇼핑백</div>
                </div>
            </div>
        </div>
        <div className='middle-nav'>
            <ul className='menu-list'>
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='input-text'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='제품검색' />
            </div>
        </div>

    </div>
  )
}

export default Navbar