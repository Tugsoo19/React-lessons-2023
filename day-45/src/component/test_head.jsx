import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function HeaderTest() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="header">
      <nav>
        <Link
          to="/signup"
          className={activeIndex === 1 ? "active" : "nonactive"}
          onClick={() => setActiveIndex(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sign up
        </Link>
        <Link
          to="/login"
          className={activeIndex === 0 ? "active" : "nonactive"}
          onClick={() => setActiveIndex(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          Login{" "}
        </Link>
      </nav>
      {activeIndex === 0 ? (
        <div>
          <h3 style={{ marginBottom: "0" }}>Login</h3>
          <a style={{ fontSize: "12px" }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </a>
        </div>
      ) : (
        <h3 style={{ marginBottom: "5px" }}>Sign up</h3>
      )}
      <button className="social">
        <BsFacebook />
        <a>Sign up with Facebook</a>
      </button>
      <br />
      <button className="social">
        <FcGoogle />
        <a>Sign up with Google</a>
      </button>
      <p className="or">
        <span>or</span>
      </p>
    </div>
  );
}
