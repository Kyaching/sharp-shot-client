import React from "react";
import { Avatar, Button, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Navbar className="shadow-lg" fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://img.freepik.com/free-photo/digital-camera-shoot-photo-icon_53876-14250.jpg?w=740&t=st=1667929909~exp=1667930509~hmac=a9ea04e28d794c9a94d04fa5750774dcab4c840b9e31a68e9886881ad9609231"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sharp Shot
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user?.uid ? (
          <Button onClick={signOut} className="mr-4">
            Sign Out
          </Button>
        ) : (
          <div className="flex">
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="mx-5">Sign Up</Button>
            </Link>
          </div>
        )}
        {user?.uid && <Avatar img={user?.photoURL} rounded={true} />}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        {user?.uid && (
          <>
            {" "}
            <Link to="/myreviews">My Reviews</Link>
            <Link to="/addservice">Add Service</Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
