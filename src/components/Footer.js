import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer>
            <div className="footer__payment" data-aos="zoom-in-up">
                <h4>Payment Methods</h4>
                <div className="footer__img">
                    <Link to = 'payment-methods'>
                    <img src="img/pic1.png" alt="" />
                    <img src="img/pic3.webp" alt="" />
                    <img src="img/pic4.jpg" alt="" />
                    <img src="img/pic6.svg" alt="" />
                    <img src="img/pic9.jpg" alt="" />
                    <img src="img/pic8.png" alt="" />
                    </Link>
                </div>
               
            </div>
            <div className="footer__menu" data-aos="zoom-in-up">
                <Link>About us</Link>
                <Link to='/Vacansies'>Vacancies</Link>
                <Link to={'/Frequently-Asked-Questions'}>Frequently Asked Questions</Link>
                <Link>Terms and Conditions</Link>
                <Link>Privacy Policy</Link>
                <Link>Financial report</Link>
            </div>
            <div className="footer__app" data-aos="zoom-in-up">
                <BsFacebook />
                <BiLogoInstagramAlt />
            </div>
            <p data-aos="zoom-in-up">© Siada Supermarket. All rights reserved</p>
        </footer>
    )
  } 