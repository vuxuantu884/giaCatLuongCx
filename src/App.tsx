import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
// http://kubett.online/iC8sc

const Component1 = () => {
  useEffect(() => {
    window.location.replace("http://kubett.online/iC8sc");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
const AppRoute = () => {
  let routes = useRoutes([{ path: "/", element: <Component1 /> }]);
  return routes;
};

function App() {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}

export default App;
