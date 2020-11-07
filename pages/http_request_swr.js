// https://swr.vercel.app/
import useSWR from "swr";

// page url: http://localhost:3000/api/hello
const HttpRequestSwr = () => {
  const { data, error } = useSWR("user_info", () =>
    fetch("/api/hello").then((el) => el.json())
  );

  console.log(data, error)

  return (
    <div>
      {!data && !error && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <>
          <div>First name: {data.first_name}</div>
          <div>Last name: {data.last_name}</div>
          <div>Age: {data.age}</div>
        </>
      )}
    </div>
  );
};

export default HttpRequestSwr;
