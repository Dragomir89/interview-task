import { useNavigator } from "./RouterContext";
import routes from "./routes";

const Switch = () => {
  const { route } = useNavigator();
  const Component = routes[route as keyof typeof routes] || routes["/"];

  return <Component />;
};

export default Switch;
