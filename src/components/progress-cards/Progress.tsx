"use client";
import { Flex, Card } from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag";
import { useColorModeValue } from "../ui/color-mode";
import { Geist_Mono } from "next/font/google";

const geist_mono_700 = Geist_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const geist_mono_300 = Geist_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const ProgressCards = () => {
  return (
    <Flex flexDir={"row"} gap={10} className="mx-[4rem] pt-[2rem]">
      <Card.Root
        animation={"ease-in"}
        variant={"elevated"}
        bg={useColorModeValue("grey.200", "grey.700")}
        className={`drop-shadow-2xl`}
        h={"30rem"}
        maxW={"30rem"}
      >
        <Flex
          justify={"center"}
          className={`${geist_mono_700.className} text-2xl place-self-center pt-[2rem]`}
        >
          Alpha/Train
        </Flex>
        <Flex
          justify={"center"}
          className={`mx-[4rem] ${geist_mono_300.className} place-self-center pt-[3.5rem]`}
        >
          The training stage of the AI. Here, the AI is the least refined, and
          the most bug-ridden. Not fit for sending into the Beta stage, and not
          at all fit for Release Candidate.
        </Flex>
        <Flex
          justify={"center"}
          className={`mx-[4rem] place-self-center pt-[3.5rem] h-full pb-[2rem]`}
        >
          <Tag size={"xl"} alignSelf={"end"}>
            <Flex
              justify={"center"}
              className={`${geist_mono_300.className} place-self-center`}
            >
              Current Phase
            </Flex>
          </Tag>
        </Flex>
        <Flex justify={"center"}></Flex>
      </Card.Root>
      <Card.Root
        variant={"elevated"}
        bg={useColorModeValue("grey.200", "grey.700")}
        className="drop-shadow-2xl"
        h={"30rem"}
        maxW={"30rem"}
      >
        <Flex
          justify={"center"}
          className={`${geist_mono_700.className} text-2xl place-self-center pt-[2rem]`}
        >
          Beta
        </Flex>

        <Flex
          justify={"center"}
          className={`mx-[4rem] ${geist_mono_300.className} place-self-center pt-[3.5rem]`}
        >
          The beta stage of the AI. Here, the AI is refined, but still has some
          bugs. Not yet ready for release, but ready for extensive testing.
        </Flex>
      </Card.Root>
      <Card.Root
        variant={"elevated"}
        bg={useColorModeValue("grey.200", "grey.700")}
        className="drop-shadow-2xl"
        h={"30rem"}
        maxW={"30rem"}
      >
        <Flex
          justify={"center"}
          className={`${geist_mono_700.className} text-2xl place-self-center pt-[2rem]`}
        >
          Release Candidate
        </Flex>

        <Flex
          justify={"center"}
          className={`mx-[4rem] ${geist_mono_300.className} place-self-center pt-[3.5rem]`}
        >
          Fine-tunes and minor changes. AI is the most refined, matches all
          criterias most of the time, or at least matches most of the criterias.
        </Flex>
      </Card.Root>
    </Flex>
  );
};

export default ProgressCards;
