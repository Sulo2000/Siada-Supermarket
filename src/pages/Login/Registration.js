import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function Registration() {
  return (
    <div className="registrPage">
      <div className="registration__container">
        <div className="registration__container__reg">
          <div className="registration">
            <h2>Registration</h2>
            <Link to={"/Login"}>
              <button className="registr">Login</button>
            </Link>
          </div>
          <div className="face">
            <button>
              <BsFacebook />
              <p>Continue With</p>
            </button>
            <button>
              <FcGoogle />
              <p>Continue With</p>
            </button>
          </div>
          <div className="mail">
            <div className="registration__names">
              <h3>First Name</h3>
              <input type="text" />
              <h3>Last Name</h3>
              <input type="text" />
            </div>
            <h3>Email</h3>
            <input type="email" />
            <h3>
              Phone number (In the comments also the number of the adressee who
              will be delivered to)
            </h3>
            <input type="text" />
            <h3>Password</h3>
            <input type="password" />
            <h3>Password Confirmation</h3>
            <input type="password" />
            <div className="check">
              <input type="checkbox" />
              <h3>Agree with Terms and conditions</h3>
            </div>
            <button>Submit</button>
          </div>
        </div>
        <div className="image">
          <img src="img/login/p2.png" alt="Img" />
        </div>
      </div>
    </div>
  );
}
