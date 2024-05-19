import './Footer.css';
import facebookImg from '../../images/fb.png';
import twitterImg from '../../images/tw.png';
import instagramImg from '../../images/ig.png';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={facebookImg} alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={twitterImg} alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={instagramImg} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Footer;
