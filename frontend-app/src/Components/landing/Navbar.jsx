import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";

const API_URL = "http://localhost:3000/api/auth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("signup"); // 'signup' or 'signin'

  useEffect(() => {
    // Check if user is logged in by checking for token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear both token and user data
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
        setIsLoggedIn(true);
        setIsModalOpen(false);
        navigate("/home");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle error (show error message to user)
    }
  };

  const handleRegister = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
        setIsLoggedIn(true);
        setIsModalOpen(false);
        navigate("/home");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (show error message to user)
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="navLeft">
          <NavLink to="/">
            <h1 className="logo">Career Path</h1>
          </NavLink>
        </div>
        <div className="navRight">
          <div className="btns">
            {!isLoggedIn ? (
              <>
                <button
                  className="btn logBtn"
                  onClick={() => {
                    setModalType("signin");
                    setIsModalOpen(true);
                  }}
                >
                  Login
                </button>
                <button
                  className="btn"
                  id="genBtn"
                  onClick={() => {
                    setModalType("signup");
                    setIsModalOpen(true);
                  }}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <NavLink to="/home">
                  <button className="btn" id="genBtn">
                    Dashboard
                  </button>
                </NavLink>
                <button className="btn logBtn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg p-6 w-1/2 relative overflow-y-auto"
            style={{ maxHeight: "90vh", backgroundColor: "#001a2c" }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            {modalType === "signup" ? (
              <SignUp
                onSubmit={handleRegister}
                onSwitch={() => setModalType("signin")}
              />
            ) : (
              <SignIn
                onSubmit={handleLogin}
                onSwitch={() => setModalType("signup")}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
