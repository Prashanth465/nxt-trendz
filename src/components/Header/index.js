// Write your JS code here
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <div className="image-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-btn"
        />
      </div>
      <div className="options-sec-mobile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-icons"
        />
      </div>

      <ul className="options-sec-laptop">
        <li className="option">Home</li>
        <li className="option">Products</li>
        <li className="option">Cart</li>
        <button type="button" className="logout-btn-laptop">
          Logout
        </button>
      </ul>
    </div>
  )
}

export default Header
