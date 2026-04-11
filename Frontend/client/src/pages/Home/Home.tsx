import { Avatar, Button, TextInput, Tooltip } from "@mantine/core";
import { RefreshCcw } from "lucide-react";
import React from "react";
import FeatureSection from "./Components/FeatureSection";

const Home = () => {
  return (
    <div>
      <div className="font-poppins flex flex-col gap-4 items-center mt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 text-[#83837f] text-sm">
          <RefreshCcw size={16} />
          <span>
            Last update:{" "}
            <span className="font-medium text-white">Mar 24, 2026</span>
          </span>
        </div>
        <h1 className="text-5xl text-white">
          {" "}
          World’s largest collection of design <br /> resources, curated by
          designers.
        </h1>
        <h4 className="text-[#83837f] mt-2">
          Subscribe for best weekly resources, freebies, and exclusive discounts
          from leading design brands.
        </h4>
        <div className="max-w-md gap-1 bg-black p-1 rounded-xl  w-full mt-2 flex">
          <TextInput
            className="text-white w-full"
            withAsterisk
            placeholder="Enter Your Email"
          />
          <Button
            style={{
              height: "50px",
              borderRadius: "10px",
              padding: "12px 18px",
            }}
            className="px-8 min-w-28  "
            color="#191918"
            c="#ffea00"
          >
            Subscribe
          </Button>
        </div>
        <div className="flex  items-center gap-2">
          <div className="bg-black p-1 rounded-full flex gap-2">
            <Tooltip.Group openDelay={300} closeDelay={100}>
              <Avatar.Group spacing="sm">
                <Tooltip label="Salazar Troop" withArrow>
                  <Avatar
                    size={26}
                    src="https://images.unsplash.com/photo-1772371272167-0117a6573d58?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    radius="xl"
                  />
                </Tooltip>
                <Tooltip label="Bandit Crimes" withArrow>
                  <Avatar
                    size={26}
                    src="https://plus.unsplash.com/premium_photo-1738449260172-9d54781f7225?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    radius="xl"
                  />
                </Tooltip>
                <Tooltip label="Jane Rata" withArrow>
                  <Avatar
                    size={26}
                    src="https://plus.unsplash.com/premium_photo-1738776254709-a8872157f87d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    radius="xl"
                  />
                </Tooltip>
                <Tooltip label="Jane Rata" withArrow>
                  <Avatar
                    size={26}
                    src="https://plus.unsplash.com/premium_photo-1738931679826-2c40b22d054d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    radius="xl"
                  />
                </Tooltip>
                <Tooltip label="Jane Rata" withArrow>
                  <Avatar
                    size={26}
                    src="https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    radius="xl"
                  />
                </Tooltip>
              </Avatar.Group>
            </Tooltip.Group>
          </div>
          <h4 className="text-[#83837f]">Join 4.5k+ creators</h4>
        </div>
      </div>
      <div className="w-full">
        <FeatureSection />
      </div>
    </div>
  );
};

export default Home;
