import {
  Box,
  Card,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Camera,
  Film,
  Gamepad2,
  MonitorSpeaker,
  PenTool,
  Wrench,
} from "lucide-react";

const MotionCard = motion.create(Card.Root as any);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const interests = [
  {
    title: "gaming!",
    body:
      "i love to play games! gaming has been a big part of my life from the start. it's been a comfort, a form of connection and has shaped me as a person.",
    linkLabel: "add me on my steam profile",
    href: "https://steamcommunity.com/profiles/76561198077111489/",
    icon: Gamepad2,
    align: "left" as const,
  },
  {
    title: "building pcs!",
    body:
      "i've built 4 pcs till now, 3 of which i scrapped together using second-hand materials from carousell to save cost and sell. i even carried the pc onto the mrt and bus and transported it myself.",
    icon: MonitorSpeaker,
    align: "right" as const,
  },
  {
    title: "more building and 3d printing!",
    body:
      "we experimented with many things with my passion to build; i built and modded my custom keyboard (also budget friendly), tried soldering in order to repair things and have 3d printed custom solutions and will continue to build more.",
    linkLabel: "here's my bambu labs profile",
    href: "https://makerworld.com/",
    icon: Wrench,
    align: "left" as const,
  },
  {
    title: "graphic design!",
    body:
      "i love exploring media creatively. before i got my first coding internship, i worked freelancing as a graphic designer, making advertisements and social media posts.",
    icon: PenTool,
    align: "right" as const,
  },
  {
    title: "video editing!",
    body:
      "i've dabbled a bit in video editing, whether it be project videos, my own personal videos, work videos and i hope to continue to level up my skills!",
    icon: Film,
    align: "left" as const,
  },
  {
    title: "photography!",
    body:
      "i own a dslr (canon 750d) and love using it to take photos and edit them in lightroom. currently i own a 50mm pancake lens and that's it hahahah.",
    icon: Camera,
    align: "right" as const,
  },
];

export default function MoreAboutSection() {
  return (
    <Card.Root variant="elevatedwhite" h="100%" w="100%" p={{ base: 4, md: 12 }}>
      <Card.Header
        textAlign="center"
        color="#595858"
        letterSpacing="widest"
        fontSize="3xl"
        fontWeight="semibold"
      >
        more about me!
      </Card.Header>

      <Card.Body>
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {interests.map(({ title, body, linkLabel, href, icon, align }) => {
            const IconComponent = icon;
            const isLeft = align === "left";

            return (
              <HStack
                key={title}
                align="stretch"
                justify={isLeft ? "flex-start" : "flex-end"}
                gap={{ base: 3, md: 6 }}
                flexDirection={{
                  base: "column",
                  md: isLeft ? "row" : "row-reverse",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  minW={{ base: "100%", md: "92px" }}
                  pt={{ base: 0, md: 4 }}
                >
                  <Icon as={IconComponent} boxSize={{ base: 10, md: 16 }} color="#111111" />
                </Box>

                <MotionCard
                  variants={cardVariant}
                  variant="elevatedwhite"
                  w="100%"
                  maxW={{ base: "100%", md: "860px" }}
                  px={{ base: 4, md: 8 }}
                  py={{ base: 5, md: 6 }}
                >
                  <Card.Body>
                    <VStack
                      gap={3}
                      align={isLeft ? "start" : { base: "start", md: "end" }}
                      textAlign={isLeft ? "left" : { base: "left", md: "right" }}
                      color="#595858"
                    >
                      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                        {title}
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.9">
                        {body}
                      </Text>
                      {linkLabel ? (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          color="#005E8A"
                          fontSize={{ base: "sm", md: "md" }}
                          fontWeight="medium"
                        >
                          {linkLabel}
                        </Link>
                      ) : null}
                    </VStack>
                  </Card.Body>
                </MotionCard>
              </HStack>
            );
          })}
        </motion.div>
      </Card.Body>
    </Card.Root>
  );
}


