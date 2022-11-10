import { Button, Card, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, profileUpdate, signInWithGoogle, setUser } =
    useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const getToken = (email) => {
    const currentUser = {
      email,
    };
    fetch("https://photography-review-server.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.data.token);
      });
  };
  const onSubmit = (data) => {
    setLoading(true);
    const { name, photo, email, password } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getToken(user.email);
        updateProfile(name, photo, user);
        if (user) {
          toast.success("Account Created Successfully");
          setLoading(false);
          reset();
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`Sorry ${err.message}`);
        console.error(err.message);
      });
  };
  const updateProfile = (name, photo, user) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    profileUpdate(profile)
      .then(() => {
        if (profile) {
          toast.success("Profile Updated");
        }
        setUser(user);
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  const googleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setLoading(false);
        getToken(user.email);
        if (user) {
          toast.success("Successfully Logged In");
        }
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center mx-auto h-96">
          <Spinner aria-label="Warning spinner example" size="xl" />
        </div>
      ) : (
        <div className="max-w-sm mx-auto my-8">
          <Helmet>
            <title>Sharp Shot - SignUp</title>
          </Helmet>
          <Card>
            <div className="mb-2 text-center">
              <h1 className="text-4xl font-bold">Sign Up</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput
                  {...register("name", { required: true })}
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="photo" value="Your Photo" />
                </div>
                <TextInput
                  {...register("photo")}
                  id="photo"
                  placeholder="Photo Link"
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  placeholder="example@example.example"
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  {...register("password", { required: true })}
                  id="password"
                  type="password"
                  placeholder="Your Password"
                />
              </div>
              <Button gradientMonochrome="teal" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex items-center space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-900"></div>
              <p className="px-3 text-sm dark:text-gray-400">OR</p>
              <div className="flex-1 h-px sm:w-16 bg-gray-900"></div>
            </div>
            <div className="space-y-4">
              <Button
                gradientMonochrome="teal"
                onClick={googleSignIn}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p className="ml-3">Login with Google</p>
              </Button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Already have an account?
              <Link to="/login" className="underline dark:text-gray-100">
                {" "}
                Sign In
              </Link>
            </p>
          </Card>
        </div>
      )}
    </>
  );
};

export default SignUp;
