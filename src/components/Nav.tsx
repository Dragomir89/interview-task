import { appRouts } from "../contants";
import { useNavigator } from "../RouterContext";

const Nav: React.FC = () => {
  const { navigate } = useNavigator();

  return (
    <nav>
      <button onClick={() => navigate(appRouts.pageOne)}>Page One</button>
      <button onClick={() => navigate(appRouts.pageTwo)}>Page Two</button>
    </nav>
  );
};

export default Nav;
