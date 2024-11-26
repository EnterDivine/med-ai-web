"use client";
import React from "react";
import { Flex, ClientOnly, Skeleton } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { Geist_Mono } from "next/font/google";

const geist_mono_700 = Geist_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const geist_mono_200 = Geist_Mono({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <ClientOnly fallback={<Skeleton boxSize="12" />}>
      <div className="pt-[5rem]">
        <Flex
          flexDir={"row"}
          w={"100%"}
          bg={useColorModeValue("gray.100", "gray.800")}
          h={"7.5rem"}
          align={"center"}
          alignContent={"center"}
        >
          <div className={`${geist_mono_700.className} pl-[2rem] text-xl`}>
            MedAI
          </div>
          <div className={`${geist_mono_700.className} px-[1rem]`}>|</div>
          <Flex flexDir={"column"}>
            <a
              href="https://www.youtube.com/watch?v=ZNGqBDRJgvo"
              className={`${geist_mono_200.className} hover:text-sky-400 hover:after:content-['_↗'] w-fit`}
            >
              Github
            </a>
            <div className={`${geist_mono_200.className} text-xs`}>
              Protected under AGPL v3.0
            </div>
          </Flex>
        </Flex>
      </div>
    </ClientOnly>
  );
};

export default Footer;
