import useSWR from "swr";
import IssueCard from "../components/IssueCard";

const Hooks = () => {
  const { data, error } = useSWR("user_info", () =>
    fetch(
      "https://api.github.com/repos/microsoft/typescript/issues"
    ).then((el) => el.json())
  );
  return (
    <div>
      {!data && !error && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data?.map((el) => {
        return <IssueCard item={el} />;
      })}
    </div>
  );
};

export default Hooks;
