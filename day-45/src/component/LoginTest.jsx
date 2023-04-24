import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BiHide } from "react-icons/bi";

import HeaderTest from "./test_head";

export default function LoginTest() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "tugsoo@gmail.com",
    password: "123456",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    if (
      user.email === e.target.email.value &&
      user.password === e.target.password.value
    ) {
      toast("user is permitted");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    } else {
      toast("user is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }
  };
  return (
    <div>
      <HeaderTest />
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" /> <br />
        <br />
        <label
          htmlFor="password"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          Password
          <span>
            <BiHide />
            Hide
          </span>
        </label>
        <input name="password" type="password" /> <br />
        <a
          href="/forgotpass"
          style={{
            display: "flex",
            justifyContent: "right",
            fontSize: "12px",
            textDecoration: "none",
            color: "#42424b",
            cursor: "pointer",
          }}
        >
          Forgot password?
        </a>
        <button>Log in</button>
      </form>
      <ToastContainer />
    </div>
  );
}
