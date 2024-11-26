"use client";

import {
  Flex,
  Card,
  ClientOnly,
  Skeleton,
  StatRoot,
  StatLabel,
  StatValueText,
  StatValueUnit,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useColorModeValue } from "../ui/color-mode";
import { Ubuntu, Montserrat, Geist_Mono } from "next/font/google";
import ProgressCards from "../progress-cards/Progress";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const geist_mono_100 = Geist_Mono({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

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

const LandingPage = () => {
  const targetDate = new Date("2025-02-26"); // Replace with the desired target date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <ClientOnly fallback={<Skeleton boxSize="12" />}>
      <div className="flex-col min-h-full min-w-full pt-[4.5rem]">
        <Flex
          alignSelf={"center"}
          className="w-full h-full place-content-center pt-[25px]"
        >
          <Card.Root
            variant={"elevated"}
            bg={useColorModeValue("grey.200", "grey.700")}
          >
            <div
              className={`place-content-center min-w-[96rem] min-h-[24rem] max-w-[96rem] max-h-[24rem]`}
            >
              <StatRoot className="w-full text-center">
                <StatLabel className={`${geist_mono_700.className} text-xl`}>
                  Time Till Fair
                </StatLabel>
                <div className="justify-center pt-[2rem]">
                  <StatValueText
                    alignItems={"baseline"}
                    className={`${geist_mono_200.className} text-7xl`}
                  >
                    {timeLeft.days}{" "}
                    <StatValueUnit
                      className={`${geist_mono_100.className} text-2xl`}
                    >
                      days
                    </StatValueUnit>
                    {timeLeft.hours}{" "}
                    <StatValueUnit
                      className={`${geist_mono_100.className} text-2xl`}
                    >
                      hr
                    </StatValueUnit>
                    {timeLeft.minutes}{" "}
                    <StatValueUnit
                      className={`${geist_mono_100.className} text-2xl`}
                    >
                      min
                    </StatValueUnit>
                    {timeLeft.seconds}{" "}
                    <StatValueUnit
                      className={`${geist_mono_100.className} text-2xl`}
                    >
                      sec
                    </StatValueUnit>
                  </StatValueText>
                </div>
              </StatRoot>
            </div>
          </Card.Root>
        </Flex>
        <Flex
          alignSelf={"center"}
          className="flex-col w-full h-full place-content-center pt-[25px]"
        >
          <div
            className={`${geist_mono_100.className} text-2xl place-self-center`}
          >
            MedAI
          </div>
          <div className={`${montserrat.className} text-7xl place-self-center`}>
            Welcome to MedAI
          </div>
          <div
            className={`${geist_mono_700.className} text-2xl place-self-center pt-[4rem]`}
          >
            What is MedAI?
          </div>
          <div
            className={`${geist_mono_200.className} text-center mx-[4rem] text-wrap`}
          >
            Built from Llama3.2b, MedAI is an AI algorithm trained from hundreds
            of thousands of hospital records for more than 300,000 diseases and
            conditions. MedAI was started as a Science Fair project. When the
            user enters a list of symptoms, MedAI will return a list of
            conditions.
          </div>
          <div
            className={`${geist_mono_700.className} text-2xl place-self-center pt-[4rem]`}
          >
            Our Mission?
          </div>
          <div
            className={`${geist_mono_200.className} place-self-center mx-[4rem]`}
          >
            In healthcare, one of the leading causes of incorrect prescriptions
            and injuries is the diagnosis stage, which sometimes takes too long
            or is rushed.
          </div>
          <div
            className={`${geist_mono_200.className} place-self-center mx-[4rem]`}
          >
            We aim to reduce the rate of misdiagnosis and improve the time it
            takes to provide a reliable diagnosis.
          </div>
          <div
            className={`${geist_mono_700.className} text-2xl place-self-center pt-[4rem]`}
          >
            Progress
          </div>
          <div>
            <ProgressCards />
          </div>
        </Flex>
      </div>
    </ClientOnly>
  );
};

export default LandingPage;
