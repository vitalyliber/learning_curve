const FlexCard = ({ title }) => {
  return (
    <div className="container">
      <div>{title}</div>
      <div>
        <div>10.10.2020</div>
        <div>Some info...</div>
      </div>

      <style jsx>{`
        .container {
          background-color: gray;
          margin: 10px;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default FlexCard;
