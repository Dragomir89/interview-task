import { ReactNode } from "react";
import { appRouts } from "./contants";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const routes: { [key: string]: () => ReactNode } = {
  [appRouts.pageOne]: PageOne,
  [appRouts.pageTwo]: PageTwo,
};

export default routes;
