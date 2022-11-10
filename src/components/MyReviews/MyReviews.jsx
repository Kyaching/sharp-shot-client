import { Button, Modal, Spinner, Table, Textarea } from "flowbite-react";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const MyReviews = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [id, setId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertOpen = () => {
    setAlert(true);
  };
  const handleAlertClose = () => {
    setAlert(false);
  };

  const handleUpdate = (data) => {
    const updateReview = {
      review: data.review,
    };
    fetch(`https://photography-review-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpen(false);
        if (data.data.modifiedCount > 0) {
          toast.success(data.message);
          setRefresh(!refresh);
          reset();
        } else {
          toast.error("Sorry try again");
        }
      })
      .catch((err) => toast.error(err));
  };
  const handleDelete = (id) => {
    fetch(`https://photography-review-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setAlert(false);
        if (data.data.deletedCount) {
          toast.success("Successfully deleted Data");
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://photography-review-server.vercel.app/reviews?email=${user?.email}`,
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
        setReviews(data.data);
        setLoading(false);
      });
  }, [user?.email, userSignOut, refresh]);

  return (
    <div className="m-4">
      <div className="md:w-9/12 mx-auto my-20">
        <Helmet>
          <title>Sharp Shot - My Review</title>
        </Helmet>
        {loading ? (
          <div className="flex justify-center items-center mx-auto h-96">
            <Spinner aria-label="Warning spinner example" size="xl" />
          </div>
        ) : (
          <>
            {reviews?.length ? (
              <Table>
                <Table.Head>
                  <Table.HeadCell>Service Name</Table.HeadCell>
                  <Table.HeadCell>Review</Table.HeadCell>
                  <Table.HeadCell>Option</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {reviews.map((review) => {
                    return (
                      <Table.Row
                        key={review._id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {review.serviceName}
                        </Table.Cell>
                        <Table.Cell className="text-gray-900">
                          {review.review}
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex">
                            <Button
                              onClick={() => {
                                handleOpen();
                                setId(review._id);
                              }}
                              className="mr-1"
                              size="xs"
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => {
                                handleAlertOpen();
                                setDeleteId(review._id);
                              }}
                              size="xs"
                            >
                              delete
                            </Button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            ) : (
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-screen-sm sm:text-center sm:mx-auto my-12">
                  <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    No reviews were added
                  </h2>
                  <hr className="w-full my-8 border-gray-300" />
                </div>
              </div>
            )}
          </>
        )}
        {/* Modal  */}
        <React.Fragment>
          <Modal show={open} size="xl" popup={true} onClose={handleClose}>
            <Modal.Header />
            <Modal.Body>
              <form
                onSubmit={handleSubmit(handleUpdate)}
                className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 w-full"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                  Edit Your review
                </h3>

                <Textarea
                  {...register("review", { required: true })}
                  placeholder="Leave a review here..."
                  rows={4}
                />

                <div className="flex justify-center">
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </React.Fragment>
        <React.Fragment>
          <Modal show={alert} size="md" popup={true} onClose={handleAlertClose}>
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete your review?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => handleDelete(deleteId)}
                  >
                    Yes, I'm sure
                  </Button>
                  <Button color="gray" onClick={handleAlertClose}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
};

export default MyReviews;
