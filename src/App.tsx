import { RouterProvider } from "./RouterContext";
import Switch from "./Switch";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <RouterProvider>
        <Nav />
        <Switch />
      </RouterProvider>
    </>
  );
}

export default App;
