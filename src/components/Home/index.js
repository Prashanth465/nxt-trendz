// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-bg">
        <div className="text-con">
          <h1 className="cloth-heading">Clothes that get YOU noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            className="clothes-img-mobile"
            alt="clothes that get you noticed"
          />
          <p>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button type="button" className="shopnow-btn">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="clothes-img-laptop"
          alt="clothes that get you noticed"
        />
      </div>
    </>
  )
}

export default Home
