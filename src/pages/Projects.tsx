import { Text, Card, Box, Grid, HStack, Icon, TooltipRoot, TooltipTrigger, TooltipPositioner, TooltipContent, TooltipArrow } from "@chakra-ui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiAmazonwebservices, SiCypress, SiDocker, SiExpress, SiFigma, SiFramer, SiMongodb, SiNodedotjs, SiNextdotjs, SiOpenai, SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { projects } from "@/config/projects";
import dubylogo from "@/assets/dubylogo.png";
import sachdubyss1 from "@/assets/sachdubyss1.png";
import sachdubyss2 from "@/assets/sachdubyss2.png";
import sachdubyss3 from "@/assets/sachdubyss3.png";
import tshgroup from "@/assets/tshgroup.png";
import upsutd1 from "@/assets/upsutd1.png";
import upsutd2 from "@/assets/upsutd2.png";
import upsutd3 from "@/assets/upsutd3.png";
import lumify from "@/assets/lumify.png";
import lorax from "@/assets/lorax.png";
import tinyfishLogo from "@/assets/tinyfish_ai_logo.jpeg";
import pigforpulse from "@/assets/pigforpulse.png";

const MotionCard = motion.create(Card.Root as any);
const MotionBox = motion.create(Box as any);

function TechTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <TooltipRoot positioning={{ placement: "top" }}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent px={2} py={1} fontSize="xs" borderRadius="md" bg="#1a1a1a" color="white">
          <TooltipArrow />
          {label}
        </TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
}

const showcasePalette = [
  {
    glow: "radial-gradient(circle at top right, rgba(248, 205, 165, 0.95), rgba(248, 205, 165, 0) 58%)",
    border: "rgba(237, 199, 162, 0.7)",
    accent: "#f1c796",
    shadow: "rgba(193, 154, 116, 0.18)",
  },
  {
    glow: "radial-gradient(circle at top right, rgba(181, 208, 248, 0.95), rgba(181, 208, 248, 0) 58%)",
    border: "rgba(172, 198, 238, 0.72)",
    accent: "#8ab3eb",
    shadow: "rgba(121, 149, 191, 0.18)",
  },
  {
    glow: "radial-gradient(circle at top right, rgba(194, 234, 207, 0.95), rgba(194, 234, 207, 0) 58%)",
    border: "rgba(171, 214, 186, 0.72)",
    accent: "#9eccad",
    shadow: "rgba(117, 156, 128, 0.18)",
  },
] as const;

const projectMediaByTitle: Record<string, { image: string; fit?: "cover" | "contain" }> = {
  "Automated Training Management Application": { image: tshgroup, fit: "contain" },
  "Lumify - Smart Urban Oasis": { image: lumify },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
  }),
};

function PipelineNode({
  label,
  x,
  y,
  color,
  hovered,
  delay = 0,
}: {
  label: string;
  x: string;
  y: string;
  color: string;
  hovered: boolean;
  delay?: number;
}) {
  return (
    <MotionBox
      position="absolute"
      left={x}
      top={y}
      px={3}
      py={2}
      borderRadius="20px"
      border={`2px dashed ${color}`}
      bg="rgba(255,255,255,0.95)"
      boxShadow="0 10px 20px rgba(86, 86, 86, 0.08)"
      animate={{ y: hovered ? -2 : 0, scale: hovered ? 1.02 : 1 }}
      transition={{ duration: 0.28, ease: "easeOut", delay }}
    >
      <Text fontSize="xs" color="#2f2f2f" fontWeight="700" textAlign="center" lineHeight="1.2" whiteSpace="pre-line">
        {label}
      </Text>
    </MotionBox>
  );
}

function CodeSwitchPipeline({ hovered }: { hovered: boolean }) {
  return (
    <MotionBox
      w="100%"
      h="100%"
      bg="linear-gradient(180deg, #f6f6f4 0%, #efefec 100%)"
      position="relative"
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <PipelineNode label={"XNLI English\nDataset"} x="10px" y="56px" color="#8eaad1" hovered={hovered} />
      <PipelineNode label={"Translation\nAgent"} x="94px" y="56px" color="#1697b5" hovered={hovered} delay={0.03} />
      <PipelineNode label={"Refiner\nAgent"} x="164px" y="14px" color="#326fd6" hovered={hovered} delay={0.06} />
      <PipelineNode label={"Summarise\nAgent"} x="236px" y="52px" color="#f28d4e" hovered={hovered} delay={0.09} />
      <PipelineNode label={"Acceptance\nAgent"} x="262px" y="110px" color="#7bcf5a" hovered={hovered} delay={0.12} />

      <MotionBox position="absolute" left="146px" top="72px" h="2px" w="96px" bg="#323232" animate={{ opacity: hovered ? 1 : 0.8 }} />
      <MotionBox position="absolute" left="210px" top="34px" h="38px" w="2px" bg="#323232" animate={{ opacity: hovered ? 1 : 0.8 }} />
      <MotionBox position="absolute" left="296px" top="98px" h="18px" w="2px" bg="#323232" animate={{ opacity: hovered ? 1 : 0.8 }} />
      <MotionBox position="absolute" left="287px" top="88px" h="2px" w="18px" bg="#323232" animate={{ opacity: hovered ? 1 : 0.8 }} />

      <Box position="absolute" left="168px" top="56px"><Text fontSize="9px" fontStyle="italic" color="#444">scores outputs</Text></Box>
      <Box position="absolute" left="130px" top="24px"><Text fontSize="9px" fontStyle="italic" color="#444">refines sentences</Text></Box>
      <Box position="absolute" left="236px" top="92px"><Text fontSize="9px" fontStyle="italic" color="#444">accepts sentences</Text></Box>

      <MotionBox
        position="absolute"
        right="12px"
        top="58px"
        w="46px"
        h="46px"
        bg="rgba(255,255,255,0.92)"
        border="2px solid #2b2b2b"
        transform="rotate(45deg)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        animate={{ rotate: hovered ? 48 : 45, scale: hovered ? 1.03 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Text transform="rotate(-45deg)" fontSize="9px" fontWeight="700" color="#2b2b2b" textAlign="center" lineHeight="1.1">Score{"\n"}&gt; T</Text>
      </MotionBox>

      <MotionBox
        position="absolute"
        left="124px"
        bottom="10px"
        px={4}
        py={2}
        bg="rgba(255,255,255,0.95)"
        border="2px solid rgba(60, 60, 60, 0.9)"
        boxShadow="0 10px 22px rgba(92, 92, 92, 0.08)"
        animate={{ y: hovered ? -2 : 0 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <Text fontSize="9px" color="#2a2a2a" textAlign="center" lineHeight="1.25">
          I was so <Box as="span" color="#008fb8" fontWeight="700">难过</Box> that I just
          <br />
          started talking to him again.
        </Text>
      </MotionBox>

      <MotionBox
        position="absolute"
        left="12px"
        bottom="14px"
        px={3}
        py={2}
        borderRadius="16px"
        border="2px solid #76c85a"
        bg="rgba(247,255,244,0.95)"
        animate={{ y: hovered ? -2 : 0 }}
      >
        <Text fontSize="10px" color="#2d2d2d" fontWeight="700" textAlign="center" lineHeight="1.2">Code-Switched XNLI<br />Test Dataset</Text>
      </MotionBox>
    </MotionBox>
  );
}

function DubySpread({ hovered }: { hovered: boolean }) {
  const cards = [
    {
      title: "Roster Planning",
      x: "18px",
      y: "82px",
      w: "205px",
      h: "118px",
      rotate: -8,
      accent: "#1ab7d6",
      image: sachdubyss1,
      delay: 0,
    },
    {
      title: "Leave Requests",
      x: "106px",
      y: "58px",
      w: "214px",
      h: "118px",
      rotate: -1,
      accent: "#1784a8",
      image: sachdubyss2,
      delay: 0.04,
    },
    {
      title: "Roster Scheduling",
      x: "194px",
      y: "88px",
      w: "214px",
      h: "118px",
      rotate: 7,
      accent: "#15586d",
      image: sachdubyss3,
      delay: 0.08,
    },
  ] as const;

  return (
    <MotionBox
      w="100%"
      h="100%"
      position="relative"
      bg="linear-gradient(180deg, #f7f7f6 0%, #efefec 100%)"
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <Box position="absolute" insetX="0" bottom="0" h="56px" bg="linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215, 232, 238, 0.7) 100%)" />

      {cards.map((card) => (
        <MotionBox
          key={card.title}
          position="absolute"
          left={card.x}
          top={card.y}
          w={card.w}
          h={card.h}
          borderRadius="24px"
          overflow="hidden"
          bg="rgba(255,255,255,0.96)"
          border="1px solid rgba(228, 226, 221, 0.95)"
          boxShadow="0 22px 34px rgba(91, 91, 91, 0.12)"
          animate={{
            rotate: hovered ? card.rotate + (card.rotate < 0 ? 2 : -2) : card.rotate,
            y: hovered ? -6 : 0,
            x: hovered ? (card.rotate < 0 ? -4 : 4) : 0,
          }}
          transition={{ duration: 0.34, ease: "easeOut", delay: card.delay }}
        >
          <motion.img
            src={card.image}
            alt={`${card.title} screen`}
            initial={false}
            animate={{ scale: hovered ? 1.04 : 1.01, y: hovered ? -2 : 0 }}
            transition={{ duration: 0.34, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            position="absolute"
            left="10px"
            top="10px"
            px={2.5}
            py={1.5}
            borderRadius="14px"
            bg="rgba(255,255,255,0.88)"
            border="1px solid rgba(233,231,227,1)"
            boxShadow="0 10px 18px rgba(91, 91, 91, 0.12)"
          >
            <Text fontSize="9px" color="#2d2d2d" fontWeight="700">
              {card.title}
            </Text>
          </Box>
        </MotionBox>
      ))}

      <MotionBox
        position="absolute"
        left="18px"
        top="16px"
        animate={{ y: hovered ? -3 : 0, rotate: hovered ? -2 : 0 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <img src={dubylogo} alt="Duby preview" style={{ width: "74px", height: "28px", objectFit: "contain" }} />
      </MotionBox>
    </MotionBox>
  );
}

function UpsutdPhone({
  screen,
  objectPosition,
  top,
  left,
  right,
  rotation,
  hovered,
  delay = 0,
  zIndex = 1,
}: {
  screen: string;
  objectPosition: string;
  top: string;
  left?: string;
  right?: string;
  rotation: number;
  hovered: boolean;
  delay?: number;
  zIndex?: number;
}) {
  return (
    <MotionBox
      position="absolute"
      top={top}
      left={left}
      right={right}
      w="94px"
      h="186px"
      zIndex={zIndex}
      animate={{
        rotate: hovered ? rotation + (rotation < 0 ? 1.5 : -1.5) : rotation,
        y: hovered ? -7 : 0,
        x: hovered ? (rotation < 0 ? -4 : 4) : 0,
      }}
      transition={{ duration: 0.38, ease: "easeOut", delay }}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        borderRadius="24px"
        overflow="hidden"
        boxShadow="0 24px 50px rgba(14, 18, 22, 0.28)"
        bg="transparent"
      >
        <motion.img
          src={screen}
          alt="UPSUTD mobile screen"
          initial={false}
          animate={{ scale: hovered ? 1.06 : 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition }}
        />
      </Box>
    </MotionBox>
  );
}

function UpsutdSpread({ hovered }: { hovered: boolean }) {
  return (
    <MotionBox
      w="100%"
      h="100%"
      position="relative"
      bg="linear-gradient(180deg, #f6f7f7 0%, #e8edf1 100%)"
      animate={{ scale: hovered ? 1.015 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(circle at 16% 18%, rgba(255,255,255,0.96), transparent 24%), radial-gradient(circle at 82% 18%, rgba(198,220,235,0.82), transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 62%)"
        opacity={0.95}
      />

      <MotionBox
        position="absolute"
        top="16px"
        left="18px"
        px={3}
        py={1.5}
        borderRadius="full"
        bg="rgba(255,255,255,0.84)"
        border="1px solid rgba(255,255,255,0.96)"
        boxShadow="0 10px 22px rgba(89, 104, 118, 0.12)"
        animate={{ y: hovered ? -2 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Text fontSize="10px" color="#61707d" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase">
          Marketplace App
        </Text>
      </MotionBox>

      <UpsutdPhone screen={upsutd1} objectPosition="12% center" top="46px" left="12px" rotation={-11} hovered={hovered} zIndex={2} />
      <UpsutdPhone screen={upsutd2} objectPosition="50% center" top="22px" left="118px" rotation={2} hovered={hovered} delay={0.04} zIndex={4} />
      <UpsutdPhone screen={upsutd3} objectPosition="88% center" top="50px" right="12px" rotation={12} hovered={hovered} delay={0.08} zIndex={3} />
    </MotionBox>
  );
}

function PulseIphoneShowcase({ hovered }: { hovered: boolean }) {
  return (
    <MotionBox
      w="100%"
      h="100%"
      position="relative"
      bg="linear-gradient(180deg, #f6f7f7 0%, #e8edf1 100%)"
      animate={{ scale: hovered ? 1.015 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(circle at 18% 20%, rgba(255,255,255,0.95), transparent 28%), radial-gradient(circle at 78% 16%, rgba(180, 204, 224, 0.2), transparent 24%)"
        opacity={0.95}
      />

      <MotionBox
        position="absolute"
        top="16px"
        left="18px"
        px={3}
        py={1.5}
        borderRadius="full"
        bg="rgba(255,255,255,0.86)"
        border="1px solid rgba(255,255,255,0.96)"
        boxShadow="0 10px 22px rgba(89, 104, 118, 0.12)"
        animate={{ y: hovered ? -2 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Text fontSize="10px" color="#6b7785" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase">
          Product Preview
        </Text>
      </MotionBox>

      <MotionBox
        position="absolute"
        left="50%"
        top="28px"
        transform="translateX(-50%)"
        w="178px"
        h="214px"
        borderRadius="34px"
        bg="#0f1115"
        boxShadow="0 24px 54px rgba(20, 28, 36, 0.28)"
        border="1px solid rgba(255,255,255,0.1)"
        animate={{ y: hovered ? -6 : 0, rotate: hovered ? -1.5 : -3 }}
        transition={{ duration: 0.34, ease: "easeOut" }}
      >
        <Box
          position="absolute"
          top="8px"
          left="50%"
          transform="translateX(-50%)"
          w="64px"
          h="16px"
          borderRadius="10px"
          bg="#0b0d10"
          boxShadow="inset 0 0 0 1px rgba(255,255,255,0.08)"
        />

        <MotionBox
          position="absolute"
          inset="10px"
          borderRadius="28px"
          overflow="hidden"
          bg="#ffffff"
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.34, ease: "easeOut" }}
        >
          <motion.img
            src={pigforpulse}
            alt="Pulse preview"
            initial={false}
            animate={{ scale: hovered ? 1.05 : 1.01, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.36, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </MotionBox>

        <Box
          position="absolute"
          right="-3px"
          top="54px"
          w="3px"
          h="38px"
          borderRadius="8px"
          bg="linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))"
        />
        <Box
          position="absolute"
          left="-3px"
          top="58px"
          w="3px"
          h="26px"
          borderRadius="8px"
          bg="linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08))"
        />
      </MotionBox>

      <MotionBox
        position="absolute"
        right="18px"
        bottom="18px"
        px={3}
        py={2}
        borderRadius="18px"
        bg="rgba(255,255,255,0.9)"
        border="1px solid rgba(232, 238, 240, 1)"
        boxShadow="0 10px 20px rgba(88, 98, 104, 0.12)"
        animate={{ y: hovered ? -3 : 0, rotate: hovered ? 2 : 0 }}
      >
        <Text fontSize="10px" color="#5d6b78" fontWeight="700">Pulse Live Event Flow</Text>
      </MotionBox>
    </MotionBox>
  );
}

function LoraxShowcase({ hovered }: { hovered: boolean }) {
  return (
    <MotionBox
      w="100%"
      h="100%"
      position="relative"
      bg="linear-gradient(180deg, #f7f7f7 0%, #eef4f6 100%)"
      animate={{ scale: hovered ? 1.015 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(circle at 18% 20%, rgba(255,255,255,0.96), transparent 26%), radial-gradient(circle at 82% 16%, rgba(94, 208, 229, 0.18), transparent 22%)"
      />

      <MotionBox
        position="absolute"
        top="14px"
        left="18px"
        px={3}
        py={1.5}
        borderRadius="full"
        bg="rgba(255,255,255,0.86)"
        border="1px solid rgba(255,255,255,0.96)"
        boxShadow="0 10px 22px rgba(89, 104, 118, 0.1)"
        animate={{ y: hovered ? -2 : 0 }}
      >
        <Text fontSize="10px" color="#53bfd1" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase">
          App Concept
        </Text>
      </MotionBox>

      <MotionBox
        position="absolute"
        insetX="22px"
        top="30px"
        h="190px"
        borderRadius="28px"
        overflow="hidden"
        bg="rgba(255,255,255,0.78)"
        border="1px solid rgba(255,255,255,0.92)"
        boxShadow="0 22px 46px rgba(91, 104, 112, 0.14)"
        animate={{ rotate: hovered ? -2 : -5, y: hovered ? -4 : 0, x: hovered ? -4 : 0 }}
        transition={{ duration: 0.34, ease: "easeOut" }}
      >
        <motion.img
          src={lorax}
          alt="Lorax concept collage"
          initial={false}
          animate={{ scale: hovered ? 1.06 : 1.01, x: hovered ? 8 : 0, y: hovered ? -6 : 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </MotionBox>

      <MotionBox
        position="absolute"
        right="18px"
        bottom="18px"
        px={3}
        py={2}
        borderRadius="18px"
        bg="rgba(255,255,255,0.9)"
        border="1px solid rgba(232, 238, 240, 1)"
        boxShadow="0 10px 20px rgba(88, 98, 104, 0.1)"
        animate={{ y: hovered ? -3 : 0, rotate: hovered ? 2 : 0 }}
      >
        <Text fontSize="10px" color="#4cbfd1" fontWeight="700">Loreal Brandstorm 2024</Text>
      </MotionBox>
    </MotionBox>
  );
}

function ProjectShowcase({
  project,
  hovered,
  palette,
}: {
  project: (typeof projects)[number];
  hovered: boolean;
  palette: (typeof showcasePalette)[number];
}) {
  const media = projectMediaByTitle[project.title];
  const isCodeSwitchProject = project.title === "Code-Switching Data Translation Pipeline";
  const isDubyProject = project.title === "Duby — Workforce Management Application";
  const isUpsutdProject = project.title === "UPSUTD — Upcycling Marketplace";
  const isLoraxProject = project.title === "Lorax' Luscious Hair";
  const isPulseProject = project.title === "LevelUpNow! Hackathon (3rd Place Winner)";

  return (
    <MotionBox
      position="relative"
      h="260px"
      w="100%"
      borderRadius="32px"
      overflow="hidden"
      bg="#efeeec"
      border="1px solid"
      borderColor={palette.border}
      boxShadow={`0 24px 60px ${palette.shadow}`}
      animate={{ scale: hovered ? 1.01 : 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <Box position="absolute" inset={0} bg={palette.glow} opacity={0.95} />
      <Box position="absolute" inset={0} opacity={0.45} backgroundImage="linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)" backgroundSize="24px 24px" /><MotionBox
        position="absolute"
        insetX="26px"
        top="56px"
        h="148px"
        borderRadius="28px"
        bg="rgba(255,255,255,0.55)"
        border="1px solid rgba(255,255,255,0.85)"
        boxShadow="0 18px 40px rgba(99, 99, 99, 0.1)"
        animate={{ rotate: hovered ? -2 : -5, x: hovered ? -2 : 0, y: hovered ? 2 : 0 }}
        transition={{ duration: 0.34, ease: "easeOut" }}
      />

      <MotionBox
        position="absolute"
        insetX="30px"
        top="68px"
        h="148px"
        borderRadius="28px"
        bg="rgba(255,255,255,0.74)"
        border="1px solid rgba(255,255,255,0.92)"
        boxShadow="0 20px 40px rgba(110, 110, 110, 0.12)"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        animate={{ rotate: hovered ? 0 : 2, y: hovered ? -4 : 0, x: hovered ? 4 : 0 }}
        transition={{ duration: 0.34, ease: "easeOut" }}
      >
        {isUpsutdProject ? (
          <UpsutdSpread hovered={hovered} />
        ) : isPulseProject ? (
          <PulseIphoneShowcase hovered={hovered} />
        ) : isLoraxProject ? (
          <LoraxShowcase hovered={hovered} />
        ) : media ? (
          <motion.img
            src={media.image}
            alt={project.title}
            initial={false}
            animate={{ scale: hovered ? 1.08 : 1.02, y: hovered ? -5 : 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", objectFit: media.fit ?? "cover", objectPosition: "center", padding: media.fit === "contain" ? "18px" : 0 }}
          />
        ) : isDubyProject ? (
          <DubySpread hovered={hovered} />
        ) : isCodeSwitchProject ? (
          <CodeSwitchPipeline hovered={hovered} />
        ) : (
          <MotionBox
            w="100%"
            h="100%"
            px={5}
            py={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bg="linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(245,243,239,0.92) 100%)"
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Text fontSize="sm" color="#6d6a66" fontWeight="700">{project.title.split(" ").slice(0, 2).join(" ")}</Text>
              <Box h="10px" w="10px" borderRadius="full" bg={palette.accent} />
            </Box>
            <Box display="grid" gap={2}>
              {[project.title, project.description, "case study"].map((line) => (
                <Box key={line} px={3} py={2} borderRadius="16px" bg="rgba(255,255,255,0.9)" border="1px solid rgba(220, 216, 209, 0.9)" boxShadow="0 10px 18px rgba(122, 118, 111, 0.08)">
                  <Text color="#67645f" fontSize="sm" fontWeight={line === project.title ? "600" : "500"} lineClamp={1}>{line}</Text>
                </Box>
              ))}
            </Box>
          </MotionBox>
        )}
      </MotionBox></MotionBox>
  );
}

function AnimatedCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const navigate = useNavigate();
  const isWip = project.href === "/wip";
  const isDubyProject = project.title === "Duby — Workforce Management Application";
  const isCodeSwitchProject = project.title === "Code-Switching Data Translation Pipeline";
  const isTrainingProject = project.title === "Automated Training Management Application";
  const isLoraxProject = project.title === "Lorax' Luscious Hair";
  const isPulseProject = project.title === "LevelUpNow! Hackathon (3rd Place Winner)";
  const isOpenVoyageProject = project.title === "OpenVoyage — AI Travel Booking";
  const palette = showcasePalette[index % showcasePalette.length];
  const techStackLabels = isDubyProject
    ? ["AWS", "Python", "React", "TypeScript", "Docker"]
    : isCodeSwitchProject
      ? ["Python", "LangGraph", "LangChain"]
      : isPulseProject
        ? ["Next.js", "React", "Tailwind CSS"]
        : null;

  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    if (!project.href) return;
    if (isWip) navigate("/wip");
    else window.open(project.href, "_blank");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <Box position="relative" h="100%" onMouseEnter={() => { setHovered(true); }} onMouseLeave={() => { setHovered(false); }} onMouseMove={isWip ? handleMouseMove : undefined}>
      <MotionCard
        ref={ref}
        w="100%"
        h="100%"
        variant="subtlewhite"
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ cursor: project.href ? "pointer" : "default", borderRadius: "36px", overflow: "hidden", boxShadow: hovered ? `0 30px 70px ${palette.shadow}` : "0 16px 40px rgba(79, 79, 79, 0.08)" }}
        onClick={handleClick}
      >
        <Card.Body gap="5" p={{ base: 4, md: 5 }}>
          <Box position="relative">
            <ProjectShowcase project={project} hovered={hovered} palette={palette} />
            {isLoraxProject && (
              <MotionBox
                position="absolute"
                left={4}
                bottom={4}
                px={3}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.9)"
                border="1px solid rgba(255,255,255,0.95)"
                boxShadow="0 14px 30px rgba(103, 103, 103, 0.12)"
                animate={{ y: hovered ? -3 : 0, x: hovered ? 1 : 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Text fontSize="10px" color="#68645f" fontWeight="700">Hair treatment, scan, consultation</Text>
              </MotionBox>
            )}
            {project.href && (
              <MotionBox
                position="absolute"
                top={4}
                right={4}
                bg="rgba(255,255,255,0.86)"
                borderRadius="full"
                p={2.5}
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid rgba(255,255,255,0.95)"
                boxShadow="0 14px 30px rgba(103, 103, 103, 0.16)"
                animate={{ y: hovered ? -4 : 0, x: hovered ? 2 : 0, rotate: hovered ? 8 : 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <ArrowUpRight size={18} color="#595858" />
              </MotionBox>
            )}
          </Box>
          <Box px={1}>
            <Card.Title color="#3f3e3c" fontSize="xl" lineHeight="1.2">{project.title}</Card.Title>
            <Card.Description color="#66635f" mt={2} lineHeight="1.7">{project.description}</Card.Description>
          </Box>
        </Card.Body>
        <Card.Footer justifyContent="space-between" alignItems="center" px={{ base: 5, md: 6 }} pb={{ base: 5, md: 6 }} pt={0}>
          {isDubyProject ? (
            <HStack gap={3} color="#84807b">
              <TechTooltip label="AWS">
                <Box display="inline-flex"><Icon as={SiAmazonwebservices} boxSize={4} title="AWS" /></Box>
              </TechTooltip>
              <TechTooltip label="Figma">
                <Box display="inline-flex"><Icon as={SiFigma} boxSize={4} title="Figma" /></Box>
              </TechTooltip>
              <TechTooltip label="Python">
                <Box display="inline-flex"><Icon as={SiPython} boxSize={4} title="Python" /></Box>
              </TechTooltip>
              <TechTooltip label="React">
                <Box display="inline-flex"><Icon as={SiReact} boxSize={4} title="React" /></Box>
              </TechTooltip>
              <TechTooltip label="TypeScript">
                <Box display="inline-flex"><Icon as={SiTypescript} boxSize={4} title="TypeScript" /></Box>
              </TechTooltip>
              <TechTooltip label="Docker">
                <Box display="inline-flex"><Icon as={SiDocker} boxSize={4} title="Docker" /></Box>
              </TechTooltip>
              <Text fontSize="sm" fontWeight="600">Playwright</Text>
            </HStack>
          ) : isCodeSwitchProject ? (
            <HStack gap={3} color="#84807b">
              <TechTooltip label="Python">
                <Box display="inline-flex"><Icon as={SiPython} boxSize={4} title="Python" /></Box>
              </TechTooltip>
              <Text fontSize="sm" fontWeight="600">LangGraph</Text>
              <Text fontSize="sm" fontWeight="600">LangChain</Text>
            </HStack>
          ) : isTrainingProject ? (
            <HStack gap={3} color="#84807b">
              <TechTooltip label="MongoDB">
                <Box display="inline-flex"><Icon as={SiMongodb} boxSize={4} title="MongoDB" /></Box>
              </TechTooltip>
              <TechTooltip label="Cypress">
                <Box display="inline-flex"><Icon as={SiCypress} boxSize={4} title="Cypress" /></Box>
              </TechTooltip>
              <TechTooltip label="TypeScript">
                <Box display="inline-flex"><Icon as={SiTypescript} boxSize={4} title="TypeScript" /></Box>
              </TechTooltip>
              <TechTooltip label="Express.js">
                <Box display="inline-flex"><Icon as={SiExpress} boxSize={4} title="Express.js" /></Box>
              </TechTooltip>
              <TechTooltip label="Node.js">
                <Box display="inline-flex"><Icon as={SiNodedotjs} boxSize={4} title="Node.js" /></Box>
              </TechTooltip>
              <TechTooltip label="React">
                <Box display="inline-flex"><Icon as={SiReact} boxSize={4} title="React" /></Box>
              </TechTooltip>
            </HStack>
          ) : isPulseProject ? (
            <HStack gap={3} color="#84807b">
              <TechTooltip label="Next.js">
                <Box display="inline-flex"><Icon as={SiNextdotjs} boxSize={4} title="Next.js" /></Box>
              </TechTooltip>
              <TechTooltip label="React">
                <Box display="inline-flex"><Icon as={SiReact} boxSize={4} title="React" /></Box>
              </TechTooltip>
              <TechTooltip label="Tailwind CSS">
                <Box display="inline-flex"><Icon as={SiTailwindcss} boxSize={4} title="Tailwind CSS" /></Box>
              </TechTooltip>
            </HStack>
          ) : isOpenVoyageProject ? (
            <HStack gap={3} color="#84807b">
              <TechTooltip label="Next.js 14">
                <Box display="inline-flex"><Icon as={SiNextdotjs} boxSize={4} title="Next.js" /></Box>
              </TechTooltip>
              <TechTooltip label="Tailwind CSS">
                <Box display="inline-flex"><Icon as={SiTailwindcss} boxSize={4} title="Tailwind CSS" /></Box>
              </TechTooltip>
              <TechTooltip label="Framer Motion">
                <Box display="inline-flex"><Icon as={SiFramer} boxSize={4} title="Framer Motion" /></Box>
              </TechTooltip>
              <TechTooltip label="OpenAI">
                <Box display="inline-flex"><Icon as={SiOpenai} boxSize={4} title="OpenAI" /></Box>
              </TechTooltip>
              <TechTooltip label="TinyFish">
                <Box display="inline-flex"><img src={tinyfishLogo} alt="TinyFish" style={{ height: "16px", width: "16px", borderRadius: "999px", objectFit: "cover" }} /></Box>
              </TechTooltip>
              <TechTooltip label="Supabase">
                <Box display="inline-flex"><Icon as={SiSupabase} boxSize={4} title="Supabase" /></Box>
              </TechTooltip>
            </HStack>
          ) : techStackLabels ? (
            <Text color="#84807b" fontSize="sm" fontWeight="600">
              {techStackLabels.join(" \u00b7 ")}
            </Text>
          ) : (
            <Text color="#84807b" fontSize="sm" textTransform="uppercase" letterSpacing="0.12em" fontWeight="700">Project Snapshot</Text>
          )}
          {project.logo ? (
            <Box display="inline-flex" alignItems="center" justifyContent="center" borderRadius="full" bg={project.logoBg ?? "rgba(255,255,255,0.82)"} border={project.logoBg ? "none" : "1px solid rgba(224, 220, 214, 0.95)"} p={project.logoBg ? "6px" : "8px"} boxShadow="0 10px 22px rgba(119, 119, 119, 0.08)">
              {typeof project.logo === "string" ? <img src={project.logo} alt={project.logoAlt} style={{ height: "32px", width: "auto" }} /> : <project.logo size={28} color="#595858" />}
            </Box>
          ) : null}
        </Card.Footer>
      </MotionCard>

      <AnimatePresence>
        {hovered && isWip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            style={{ position: "fixed", left: pos.x + 14, top: pos.y + 14, pointerEvents: "none", zIndex: 9999, background: "#1a1a1a", color: "#fff", padding: "4px 10px", borderRadius: "8px", fontSize: "13px", whiteSpace: "nowrap" }}
          >
            still a WIP!
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Box h="100%" w="100%" p={{ base: 0, md: 12 }}>
      <Text textAlign="center" color="#595858" letterSpacing="widest" fontSize={{ base: "3xl", sm: "xl", md: "2xl" }} fontWeight="semibold" mb={6}>projects</Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", xl: "repeat(3, minmax(0, 1fr))" }} gap={6}>
        {projects.map((project, i) => (
          <AnimatedCard key={project.title} project={project} index={i} />
        ))}
      </Grid>
    </Box>
  );
}
