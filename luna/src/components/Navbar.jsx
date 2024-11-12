import React from "react";
import { Link } from "react-scroll";
import { LuCakeSlice } from "react-icons/lu";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <span>
              <LuCakeSlice size={32} />
            </span>
            <h1>Luna Di Miele</h1>
          </div>
          <nav>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about us"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="order"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Order
            </Link>
            <Link
              to="feedback"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
