import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center container mx-auto mt-5 md:mt-2">
      <Link to={"/"}>
        <img src="https://i.ibb.co/3SpgQHg/image.png" alt="" />
      </Link>
      <div className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white"
              : isActive
              ? "text-red-500 border-b-2 border-red-300"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white"
              : isActive
              ? "text-red-500 border-b-2 border-red-300"
              : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white"
              : isActive
              ? "text-red-500 border-b-2 border-red-300"
              : ""
          }
        >
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
