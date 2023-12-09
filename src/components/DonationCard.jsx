const DonationCard = ({ donation }) => {
  return (
    <div
      className="flex gap-5 mb-5"
      style={{ backgroundColor: donation.background_color }}
    >
      <div>
        <img src={donation.image} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="mt-3">
          <p
            className="inline-block py-1 px-2"
            style={{
              backgroundColor: donation.background_color,
              color: donation.text_color,
            }}
          >
            {donation.category}
          </p>
        </div>
        <h2 className="font-bold text-xl">{donation.title}</h2>
        <p
          className="font-semibold"
          style={{
            color: donation.text_color,
          }}
        >
          ${donation.donate}.00
        </p>
        <div>
          <button
            className="btn btn-primary text-white border-none"
            style={{
              backgroundColor: donation.text_color,
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
