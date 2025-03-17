import { User } from "../types";
import useFetch from "../hooks/useFetch";
import { userURLS } from "../contants";

function TestComponent() {
  const { refetch } = useFetch<User>(userURLS.user02);

  return (
    <>
      <h1>Test component</h1>
      <h2>Fetch user 2</h2>
      <button onClick={refetch}>Refetch ID 2</button>
    </>
  );
}

export default TestComponent;
