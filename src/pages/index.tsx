import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import { Box, VStack} from "@chakra-ui/react";
import HeroSection from "./Hero";
import ExperiencesSection from "./Experiences";
import ProjectsSection from "./Projects";
import MoreAboutSection from "./MoreAbout";

export default function IndexPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <DefaultLayout>
      <VStack gap={16} py={4}>

      
      <Box
        id="about"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={16}
      >
        <HeroSection />
      </Box>
      <Box
        id="experience"
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={{ base: 4, md: 16 }}
      >
        <ExperiencesSection />
      </Box>
      <Box
        id="projects"
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={{ base: 4, md: 16 }}
      >
        <ProjectsSection />
      </Box>
      <Box
        id="more-about"
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={{ base: 4, md: 16 }}
      >
\
        <MoreAboutSection />
      </Box>
      </VStack>
    </DefaultLayout>
  );
}
