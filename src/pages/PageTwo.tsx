import { userURLS } from "../contants";
import useFetch from "../hooks/useFetch";
import { User } from "../types";

function PageTwo() {
  useFetch<User>(userURLS.user03);
  return (
    <>
      <h1>PageTwo</h1>
    </>
  );
}

export default PageTwo;
