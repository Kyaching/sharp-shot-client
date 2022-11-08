import React from "react";
import { Avatar, Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const signOut = () => {
    userSignOut()
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
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
