import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const title = "Register Now";
const btnText = "Get Started Now";

const Signup = () => {
  // const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // login with email password
  const handleSignup = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const confirmPassword = event.target.confirmPassword.value.trim();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all the fields ❌");
      event.target.reset();
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address 📧");
      event.target.reset();
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters 🔐");
      event.target.reset();
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      event.target.reset();
      return;
    }

    // -------------------------
    // FIREBASE SIGNUP
    // -------------------------
    createUser(email, password)
      .then((userCredential) => {
        toast.success("Account Created Successfully 🎉");

        event.target.reset(); // Clear form fields
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.code;
        console.log("Signup Error:", err);

        if (err === "auth/email-already-in-use") {
          toast.error("Email already registered. Try logging in.");
        } else if (err === "auth/invalid-email") {
          toast.error("Invalid email format ❌");
        } else if (err === "auth/weak-password") {
          toast.error("Password too weak ⚠️");
        } else {
          toast.error("Signup failed. Try again ❌");
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
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="form-group">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* <h5 className="subtitle">{socialTitle}</h5> */}
              <button
                onClick={handleRegister}
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

export default Signup;
