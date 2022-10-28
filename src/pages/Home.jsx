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
        <Stack
          maxWidth={"1000px"}
          margin="0 auto"
          mt={{ lg: "4rem", md: "0" }}
          alignItems={{ xs: "center", lg: "stretch" }}
        >
          <CardProfile />
        </Stack>
      </div>
      <Stack
        maxWidth={{ md: "1000px", sm: "600px", xs: "350px" }}
        margin="0 auto"
      >
        <AboutUs />
      </Stack>
      <Stack sx={{ backgroundColor: "black" }} height="35rem" mt={4}>
        <Stack maxWidth={{ xs: "350px", md: "1000px" }} margin="0 auto">
          <Technology />
        </Stack>
      </Stack>
      <Stack
        maxWidth={{ xs: "350px", sm: "600px", md: "1000px" }}
        margin="0 auto"
      >
        <Projects />
      </Stack>

      <Stack
        maxWidth={{ xs: "350px", sm: "600px", md: "1000px" }}
        margin="0 auto"
      >
        <Contact />
      </Stack>
    </Stack>
  );
};

export default Home;
