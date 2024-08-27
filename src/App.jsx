import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import VideoCover from "./VideoCover.jsx";

function App() {
  console.log("test1214");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello World</div>}></Route>
        {/* <Route path="/test/:imageId" component={VideoCover} /> */}
        {/* <Route path="/teams" element={<Teams />}>
  <Route index element={<TeamsIndex />} />
  <Route path=":teamId" element={<Team />} />
</Route> */}
        <Route path="tests" element={<Outlet />}>
          <Route path=":imageId" element={<VideoCover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
