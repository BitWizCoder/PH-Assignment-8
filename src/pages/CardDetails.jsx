import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CardDetails = () => {
  const { id } = useParams();
  const donations = useLoaderData();
  const [donationDetails, setDonationDetails] = useState({});

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id == id);
    setDonationDetails(findDonation);
  }, [id, donations]);

  // Add to local storage
  const addToLocalStorage = () => {
    const addedDonations = JSON.parse(localStorage.getItem("donation")) || [];

    const isExist = addedDonations.find(
      (donation) => donation.id === parseInt(id)
    );

    if (!isExist) {
      const updatedDonations = [...addedDonations, donationDetails];
      localStorage.setItem("donation", JSON.stringify(updatedDonations));
      Swal.fire({
        title: "Success :)",
        text: "Donated successfully.",
        icon: "success",
        confirmButtonText: "Close",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Already donated.",
        icon: "warning",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="mt-14 container mx-auto relative mb-10">
      <img
        src={donationDetails.image}
        alt=""
        className="w-full"
        style={{ height: "500px" }}
      />
      <div className="bg-gray-900 bg-opacity-60	 py-6 absolute bottom-[88px] w-full">
        <button
          className="btn text-white ml-8"
          style={{ backgroundColor: donationDetails.text_color }}
          onClick={addToLocalStorage}
        >
          Donate {donationDetails.donate}$
        </button>
      </div>
      <p className="font-bold text-2xl my-4">{donationDetails.title}</p>
      <p>{donationDetails.description}</p>
    </div>
  );
};

export default CardDetails;
