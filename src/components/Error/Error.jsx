import { Button } from "flowbite-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Error = () => {
  const error = useRouteError();
  return (
    <section className="flex items-center h-full p-16 text-gray-900">
      <Helmet>
        <title>Sharp Shot - Error</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>
            {error.status}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-900">
            {error.statusText || error.message}
          </p>
          <Link to="/">
            <Button
              gradientMonochrome="teal"
              className="px-8 py-3 font-semibold mx-auto"
            >
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
