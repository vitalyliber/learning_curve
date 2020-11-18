import FlexCard from "../components/FlexCard";

const CssFlexboxes = () => {
  return (
    <div className="container">
      <div className="column">
        {[
          { title: "First", data: "8.10.2020" },
          { title: "Second", data: "9.10.2020" },
          { title: "Third", data: "10.10.2020" },
        ].map((el) => (
          <FlexCard {...el} info="From Thailand" />
        ))}
      </div>

      <style jsx>{`
        .container {
          background-color: blue;
          padding: 10px;
          display: flex;
          justify-content: center;
        }
        .column {
          background-color: white;
          max-width: 600px;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default CssFlexboxes;
