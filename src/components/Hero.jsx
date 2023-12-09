import { useState, useEffect } from "react";

const Hero = ({ setData }) => {
  const heroStyle = {
    backgroundImage: "url(./hero-bg.png)" || 'https://i.ibb.co/4jX9h3s/hero-bg.png',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [inputValue, setInputValue] = useState("");
  const [data, setDataLocally] = useState([]);

  useEffect(() => {
    fetch("../donations.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setDataLocally(jsonData);
        setData(jsonData);
      });
  }, [setData]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const lowerInputValue = inputValue.toLowerCase();
    const searchData = data.filter(
      (obj) => obj.category.toLowerCase() === lowerInputValue
    );
    setData(searchData);
  };

  useEffect(() => {
    if (inputValue === "") {
      setData(data);
    }
  }, [inputValue, data, setData]);

  return (
    <div
      style={heroStyle}
      className="pb-48 pt-32 flex flex-col items-center text-center gap-10"
    >
      <h1 className="font-semibold text-3xl md:text-5xl text-gray-800 leading-tight">
        I Grow By Helping People In Need
      </h1>
      <div className="form-control">
        <div className="input-group">
          <input
            onChange={handleInputChange}
            value={inputValue}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button
            onClick={handleSearch}
            className="btn bg-[#FF444A] text-white hover:text-gray-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
