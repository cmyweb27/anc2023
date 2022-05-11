import { Routes, Route, Link } from "react-router-dom";

import { Box, Typography, Paper } from "@mui/material";

function App() {
  return (
    <div className="bg-[url('')]">
      {" "}
      <Typography className=" ml-7 mt-7">Welcome to React Router!</Typography>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
