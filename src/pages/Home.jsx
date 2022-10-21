import { Stack, Box } from "@mui/material";
import AboutUs from "../components/AboutUs";
import CardProfile from "../components/CardProfile";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Technology from "../components/Technology";

const Home = () => {
  return (
    <Stack width={"100%"}>
      <div className="background">
        <Stack maxWidth={"1000px"} margin="0 auto" mt={10}>
          <CardProfile />
        </Stack>
      </div>
      <Stack maxWidth={"1000px"} margin="0 auto">
        <AboutUs />
        <Technology />
        <Projects />
        <Contact />
      </Stack>
    </Stack>
  );
};

export default Home;
