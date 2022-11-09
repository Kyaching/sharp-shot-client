import React from "react";
import { Button } from "flowbite-react";
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

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userSignOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data.data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [id, userSignOut]);
  return (
    <div>
      <Helmet>
        <title>Review</title>
      </Helmet>
      <div className="relative">
        <h1 className="text-5xl text-center my-6">User Review</h1>
        {!user?.uid && (
          <Link to="/login">
            <Button className="absolute right-0 top-0">
              Please Login to add Review
            </Button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review) => (
          <UserReview key={review._id} userReviews={review} />
        ))}
      </div>
      {user?.uid && (
        <h2 className="text-5xl text-center my-6">Add Your review</h2>
      )}
      {user?.uid && <AddReview user={user} id={id} service={service} />}
    </div>
  );
};

export default Review;
