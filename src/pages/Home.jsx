import Cards from "../components/Cards";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("../donations.json")
  //     .then((response) => response.json())
  //     .then((jsonData) => setData(jsonData));
  // }, []);

  return (
    <div>
      <Hero data={data} setData={setData} />
      <Cards jsonData={data} />
    </div>
  );
};

export default Home;
