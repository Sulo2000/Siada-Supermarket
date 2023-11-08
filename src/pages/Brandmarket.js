import { Link } from "react-router-dom";
import { brandmarket } from "../lists/brandmarket";

export default function Brandmarket() {
    return (
        <div className="brandmarket__container">
            <div className="title">
            <h1>Brandmarket</h1>
            </div>
            <div className="brandmarket">
            {brandmarket.map(item => {
                return (
                <Link to={'/Brandmarket'}>
                    <div className="brand" data-aos="zoom-out-down">
                        <img src={item.picture}  alt=""  data-aos="fade-down-right"/>
                        <h3 data-aos="fade-down-left">{item.name}</h3>
                    </div>
                </Link>
                );
            })}
            </div>
        </div>
    )
}
