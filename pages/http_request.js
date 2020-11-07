import { useState, useEffect } from "react";

const HttpRequest = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/hello");
      const json = await response.json();
      setUser(json);
    } catch (e) {
      console.log(e);
      alert("Error!!!");
    }
  };

  useEffect(() => {
    // fetch("/api/hello").then((el) => el.json().then((el) => console.log(el)));
    fetchUser();
  }, []);
  return (
    <div>
      {!user && <div>Loading...</div>}
      {user && (
        <>
          <div>First name: {user.first_name}</div>
          <div>Last name: {user.last_name}</div>
          <div>Age: {user.age}</div>
        </>
      )}
    </div>
  );
};

export default HttpRequest;
