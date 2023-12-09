import { Chart } from "react-google-charts";

const Statistics = () => {
  const addedDonations = JSON.parse(localStorage.getItem("donation")) || [];
  const numberOfItems = addedDonations.length;

  const data = [
    ["Task", "Hours per Day"],
    ["Your Donation", numberOfItems],
    ["Total", 12 - numberOfItems],
  ];

  const options = {
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      className="bg-red-800 text-4xl"
      data={data}
      options={options}
    />
  );
};

export default Statistics;
