import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    id,
    image,
    category,
    title,
    background_color,
    text_color,
    button_color,
  } = data;

  //   console.log(id);

  return (
    <Link to={`/carddetails/${id}`}>
      <div
        style={{ backgroundColor: background_color }}
        className="w-[80%] md:w-full flex flex-col"
      >
        <img src={image} alt="" />
        <div className="p-3">
          <p
            className="inline-block py-1 px-2 rounded-md"
            style={{ backgroundColor: button_color, color: text_color }}
          >
            {category}
          </p>
        <h2 style={{ color: text_color }} className="font-bold text-xl mt-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
