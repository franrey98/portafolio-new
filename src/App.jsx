import { Typography } from "@mui/material";
import Layout from "./layout/Layout";
import Routing from "./router/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
