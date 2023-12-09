import Card from "./Card";

const Cards = ({ jsonData }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10 justify-items-center">
      {jsonData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Cards;
