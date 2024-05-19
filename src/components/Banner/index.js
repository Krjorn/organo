import './Banner.css';
import logo from '../../images/logo.png';
import bannerImg from '../../images/banner-img.png';

function Banner() {
    return (
        <header className='banner'>
            <img src={logo} alt='Organo' className='logo' />
            <h1>
                Pessoas e times<br/>
                <span>organizados em um só lugar!</span>
            </h1>
            <img src={bannerImg} className='banner-img' />
        </header>
    )
}

export default Banner;