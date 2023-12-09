import { useState } from "react";
import DonationCard from "../components/DonationCard";

const Donation = () => {
  const [isShow, setIsShow] = useState(false);
  const addedDonations = JSON.parse(localStorage.getItem("donation")) || [];

  return (
    <div className="flex flex-col items-center mt-10">
      {addedDonations.length === 0 ? (
        <p className="text-3xl mt-10 text-gray-700 font-semibold text-center">
          No donations available. Please add some donations.
        </p>
      ) : (
        <div className="container mx-auto grid grid-cols-2 gap-10">
          {isShow
            ? addedDonations.map((donation) => (
                <DonationCard key={donation.id} donation={donation} />
              ))
            : addedDonations
                .slice(0, 4)
                .map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
        </div>
      )}
      <div>
        {addedDonations.length > 4 &&
          (isShow ? (
            ""
          ) : (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn btn-primary bg-[#009444] border-[#009444] hover:bg-[#009445c2] hover:border-[#009444] text-white mb-12"
            >
              {" "}
              see more
            </button>
          ))}
      </div>
    </div>
  );
};

export default Donation;
