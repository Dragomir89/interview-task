import { User } from "../types";

function MainScreen({ user }: { user: User }) {
  return (
    <>
      <div>
        <h2>Loaded User</h2>
        <h3>Name: {user.name}</h3>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
      </div>
    </>
  );
}

export default MainScreen;
