import useFetch from "../hooks/useFetch";
import { User } from "../types";
import UserInfo from "../components/UserInfo";
import TestComponent from "../components/TestComponent";
import { useState } from "react";
import { userURLS } from "../contants";

function PageOne() {
  const [showComponent, setShowComponent] = useState(false);
  const { data, loading, error, refetch } = useFetch<User>(userURLS.user01);

  const showHideComponent = () => {
    setShowComponent((prev) => !prev);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loading && error) {
    return (
      <>
        <h1>Request issue</h1>
        <h2>{error}</h2>
      </>
    );
  }

  return (
    <>
      {!loading && data && <UserInfo user={data} />}
      <button onClick={showHideComponent}>Show other component</button>
      <button onClick={refetch}>Refetch ID 1</button>
      {showComponent && <TestComponent />}
    </>
  );
}

export default PageOne;
