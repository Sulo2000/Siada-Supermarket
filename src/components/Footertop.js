import { SiAdafruit } from "react-icons/si"
import { Link } from "react-router-dom"

export default function Footertop() {
    return (
        <div className="top__footer">
            <Link to="/">
                <p><SiAdafruit /> Siada Supermarket</p>
            </Link>
            <div className="inside__top">
                <span>+374 88 55 99 55</span>
                <h2>or</h2>
                <span>8022</span>
                <span>online@siada.am</span>
            </div>
        </div>
    )
  }