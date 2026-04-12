import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import CardSlide from "./CardSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Griddy Icons",
    description: "Premium icon library, generously open-sourced by Filip Gres.",
    image:
      "https://images.unsplash.com/photo-1726186029199-218e58c9fb41?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Untitled UI Icons",
    description:
      "Clean and modern open-source icon set designed for beautiful interfaces.",
    image:
      "https://images.unsplash.com/photo-1660806982611-0a41c0527966?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Heroicons",
    description: "Hand-crafted SVG icons by the makers of Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1643513208375-df314b16347a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Lucide Icons",
    description:
      "A beautiful and consistent open-source icon toolkit for modern apps.",
    image:
      "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Tabler Icons",
    description:
      "Free and open-source SVG icons designed with a consistent stroke style.",
    image:
      "https://images.unsplash.com/photo-1633355444143-bc2fffac972d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeatureSection = () => {
  const totalSlides = data.length;
  const [index, setindex] = useState(0);

  const visibleItems = 3;

  return (
    <div className="font-poppins mt-32 mx-4 ">
      <div className="px-4 flex justify-between items-center mr-16  mb-6">
        <div className="flex gap-2 items-center">
          <Crown className="text-[#ffeb12] inline" />
          <h1 className="text-2xl text-white">Featured Goodness</h1>
        </div>
        <div className="text-white bg-black p-1 rounded-full flex gap-8 text-center mt-2">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        className="w-full"
        style={{ width: "100%" }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="!w-auto">
            <CardSlide
              description={item.description}
              title={item.title}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSection;
