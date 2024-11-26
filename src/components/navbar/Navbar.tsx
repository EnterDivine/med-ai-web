"use client";

import React from "react";
import {
  // Button,
  Text,
  Flex,
  Separator,
  // Card,
  ClientOnly,
  Skeleton,
} from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <Flex
        bgGradient="to-r"
        flexDirection={"row"}
        gradientFrom={useColorModeValue("gray.100", "gray.950")}
        gradientTo={useColorModeValue("blue.200", "cyan.950")}
        color={useColorModeValue("gray.600", "gray.200")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        alignContent={"center"}
        gap={5}
        position={"fixed"}
        zIndex={200}
        w={"100%"}
        className=""
      >
        <Text
          className={`${ubuntu.className} text-4xl font-bold`}
          color={useColorModeValue("gray.950", "gray.50")}
        >
          MedAI
        </Text>
        <Separator
          orientation={"vertical"}
          height={"4"}
          size={"lg"}
          variant={"solid"}
          alignSelf={"center"}
        />
        {/*Keep Commented until Deployment*/}
        {/* <Card.Root
          variant={"outline"}
          bg={"transparent"}
          size="sm"
          flexDirection="row"
          overflow="hidden"
          maxW="xl"
          gap={5}
        >
          <Button variant="outline" borderColor={"gray.50"} minW={"100px"}>
            <Text
              className={`${ubuntu.className} font-bold`}
              color={useColorModeValue("gray.950", "gray.50")}
            >
              Home
            </Text>
          </Button>
          <Button variant="outline" borderColor={"gray.50"} minW={"100px"}>
            <Text
              className={`${ubuntu.className} font-bold`}
              color={useColorModeValue("gray.950", "gray.50")}
            >
              Timeline
            </Text>
          </Button>
          <Button variant="outline" borderColor={"gray.50"} minW={"100px"}>
            <Text
              className={`${ubuntu.className} font-bold`}
              color={useColorModeValue("gray.950", "gray.50")}
            >
              About Us
            </Text>
          </Button>
        </Card.Root> */}
        <ColorModeButton className="absolute right-0 mr-[4rem]" />
      </Flex>
    </ClientOnly>
  );
};

export default Navbar;
