import FlexCard from "../components/FlexCard";

const CssFlexboxes = () => {
  return (
    <div className="container">
      <div className="column">
        {[{ title: "First" }, { title: "Second" }, { title: "Third" }].map(
          (el) => (
            <FlexCard {...el} />
          )
        )}
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
