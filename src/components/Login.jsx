import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const title = "Login";
// const socialTitle = "Login With Social Media";
const btnText = "Submit Now";

const Login = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);

  // console.log(signUpWithGmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // login with google
  const handleGoogleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        toast.success("Logged in with Google 🎉");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google login failed ❌");
        console.log(error);
      });
  };

  // login with email password
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    // ---- VALIDATION ----
    if (!email || !password) {
      toast.error("Please fill all the fields ❌");
      event.target.reset();
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address 📧");
      event.target.reset();
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters 🔐");
      event.target.reset();
      return;
    }

    // ---- LOGIN PROCESS ----
    login(email, password)
      .then((result) => {
        toast.success("Login successful 🎉");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.code;
        console.log(error);

        if (err === "auth/invalid-login-credentials") {
          toast.error("No such user found. Please sign up first.");
        } else if (err === "auth/wrong-password") {
          toast.error("Incorrect password. Try again!");
        } else if (err === "auth/invalid-email") {
          toast.error("Invalid email format!");
        } else {
          toast.error("Login failed. Please try again.");
        }
        event.target.reset();
      });
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom text-center">
              <span className="d-block cate pt-10">
                Don't Have any Account? <Link to="/sign-up">Sign Up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* social icons */}
              {/* <h5 className="subtitle">{socialTitle}</h5> */}
              <button
                onClick={handleGoogleLogin}
                className="lab-btn"
                style={{
                  background: "#fff",
                  color: "#000",
                  border: "1px solid #ddd",
                  padding: "10px 20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  style={{ width: "20px" }}
                />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
