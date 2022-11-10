import React from "react";
import { Button, Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import AddReview from "./AddReview";
import UserReview from "./UserReview";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Review = ({ id, service }) => {
  const { user, userSignOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://photography-review-server.vercel.app/reviews?serviceId=${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userSignOut();
        }
        return res.json();
      })
      .then((data) => {
        setRefresh(!refresh);
        setReviews(data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id, userSignOut, refresh]);
  return (
    <div>
      <Helmet>
        <title>Review</title>
      </Helmet>
      <div>
        <h1 className="text-5xl text-center font-bold border-b pb-3 my-6">
          User Review
        </h1>
      </div>
      <>
        {loading ? (
          <div className="flex justify-center items-center mx-auto h-96">
            <Spinner aria-label="Warning spinner example" size="xl" />
          </div>
        ) : (
          <div>
            {reviews.length ? (
              <div className="grid md:grid-cols-3 gap-4">
                {reviews.map((review) => (
                  <UserReview key={review._id} userReviews={review} />
                ))}
              </div>
            ) : (
              <p className="text-2xl text-center">No Reviews were added.</p>
            )}
          </div>
        )}
      </>
      {!user?.uid && (
        <Link to="/login">
          <Button gradientMonochrome="teal" className="mx-auto mt-16">
            Please Sign In to add Review
          </Button>
        </Link>
      )}
      {user?.uid && <AddReview user={user} id={id} service={service} />}
    </div>
  );
};

export default Review;
