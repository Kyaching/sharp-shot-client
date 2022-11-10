import React from "react";
import { Avatar, Button, Navbar } from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    userSignOut()
      .then(() => {
        navigate("/");
        localStorage.removeItem("token");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Navbar className="shadow-lg" fluid={true} rounded={true}>
      <Navbar.Brand>
        <Link className="flex" to="/">
          <img
            src="https://img.freepik.com/free-photo/digital-camera-shoot-photo-icon_53876-14250.jpg?w=740&t=st=1667929909~exp=1667930509~hmac=a9ea04e28d794c9a94d04fa5750774dcab4c840b9e31a68e9886881ad9609231"
            className="mr-3 h-6 sm:h-9"
            alt="My logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Sharp Shot
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user?.uid ? (
          <Button gradientMonochrome="teal" onClick={signOut} className="mr-4">
            Sign Out
          </Button>
        ) : (
          <div className="flex">
            <Link to="/login">
              <Button gradientMonochrome="teal">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button gradientMonochrome="teal" className="mx-5">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
        {user?.uid && (
          <Avatar className="mr-4" img={user?.photoURL} rounded={true} />
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-purple-500 px-5 py-3 rounded text-white"
              : "px-5 py-3 rounded hover:bg-gray-200"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "bg-purple-500 px-5 py-3 rounded text-white"
              : "px-5 py-3 rounded hover:bg-gray-200"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "bg-purple-500 px-5 py-3 rounded text-white"
              : "px-5 py-3 rounded hover:bg-gray-200"
          }
        >
          Blog
        </NavLink>
        {user?.uid && (
          <>
            {" "}
            <NavLink
              to="/myreviews"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-500 px-5 py-3 rounded text-white"
                  : "px-5 py-3 rounded hover:bg-gray-200"
              }
            >
              My Reviews
            </NavLink>
            <NavLink
              to="/addservice"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-500 px-5 py-3 rounded text-white"
                  : "px-5 py-3 rounded hover:bg-gray-200"
              }
            >
              Add Service
            </NavLink>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
