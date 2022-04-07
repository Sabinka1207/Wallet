import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

import Loader from "../Loader";

const HomeTab = lazy(() =>
  import("../../components/homeTab" /* webpackChunkName: "home-tab-view" */)
);

// const DiagramTab = lazy(() =>
//   import(
//     "../../components/DiagramTab" /* webpackChunkName: "diagram-tab-view" */
//   )
// );

function MainTab() {
  return (
    <Suspense fallback={<Loader />}>
      <Route path={"/home"}>
        <HomeTab />
      </Route>
      {/* <Route path={"/diagram"}>
        <DiagramTab />
      </Route> */}
    </Suspense>
  );
}

export default MainTab;
