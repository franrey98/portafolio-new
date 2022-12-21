import { Stack, Box } from "@mui/material";
import AboutUs from "../components/AboutUs";
import CardProfile from "../components/CardProfile";
import CardResponsive from "../components/CardResponsive";
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
          marginTop={"1rem"}
          mt={{ lg: "4rem", md: "0" }}
          alignItems={{ xs: "center", lg: "stretch" }}
        >
          <CardResponsive />
          <Stack display={{ xs: "none", md: "flex" }}>
            <CardProfile />
          </Stack>
        </Stack>
      </div>

      <Stack
        maxWidth={{ md: "1000px", sm: "600px", xs: "350px" }}
        margin="0 auto"
      >
        <AboutUs />
      </Stack>
      <Box sx={{ backgroundColor: "black" }}>
        <Stack
          maxWidth={{ xs: "350px", sm: "600px", md: "1000px" }}
          margin="0 auto"
          height={{ xs: "50rem", md: "35rem" }}
          mt={4}
        >
          <Technology />
        </Stack>
      </Box>
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
