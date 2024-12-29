import { Route, Routes as Switch } from "react-router-dom";
import { HeaderComponent } from "../pages/header";

function Routes() {
  return (
    <Switch>
      <Route path="" element={<HeaderComponent />} />
    </Switch>
  );
}

export default Routes;
