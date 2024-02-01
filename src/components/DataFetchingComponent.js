import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logonew from "../assets/logo-new.svg";
import vertalbar from "../assets/vertical-bar.svg";
import homeevent from "../assets/home-event.svg";
import Slider from "react-slick";
const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  const sliderRef = React.useRef(null);
  useEffect(() => {
    // Make your API calls here
    // Example: Fetching data from JSONPlaceholder
    fetch("https://api.testvalley.kr/main-banner/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("https://api.testvalley.kr/main-shortcut/all")
      .then((response) => response.json())
      .then((data2) => setData2(data2))
      .catch((error) => console.error("Error fetching data:", error));
    fetch("https://api.testvalley.kr/main-exhibition/all")
      .then((response) => response.json())
      .then((data3) => setData3(data3))
      .catch((error) => console.error("Error fetching data:", error));
    fetch("https://api.testvalley.kr/main-banner/all")
      .then((response) => response.json())
      .then((data4) => setData4(data4))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="headder  w-4/6 mx-auto flex justify-between items-center py-4">
        <div className="flex">
          <img src={logonew} alt="log" />
          <div className="space-y-2">
            <span class="block w-5 h-0.5 bg-[#00D094]"></span>
            <span class="block w-5 h-0.5 bg-[#00D094]"></span>
            <span class="block w-5 h-0.5 bg-[#00D094]"></span>
          </div>
          <div className="text-[#00D094]">카테고리</div>
        </div>
        <div>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3   pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="살까말까 고민된다면 검색해보세요!"
              required
            />
          </div>
        </div>
        <div className="flex">
          <img src={homeevent} alt="homeevent" />
          <img src={vertalbar} alt="vertalbar" />
          <div className="text-[#00D094]">로그인 / 회원가입</div>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {data.map((item) => (
          <div className="p-2 m-10" key={item.id}>
            <img
              src={item.pcImageUrl}
              alt={item.pcImageUrl}
              className="p-2 m-10"
            />
          </div>
        ))}
      </Slider>

      <div className="flex justify-between mt-4 z-2 relative">
        <button
          onClick={goToPrev}
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={goToNext}
          className="bg-blue-500 text-red px-4 py-2 rounded"
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <span class="sr-only">next</span>
          </span>
        </button>
      </div>
      <div className="flex justify-center item-center w-5/6">
        {data2.map((item) => (
          <div className="p-2 m-2 flex-none" key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.imageUrl}
              className=""
              height={40}
              width={600}
            />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      <div>
        <div></div>
        <div className="flex">
          {data3.map((item) => (
            <div className="p-2 m-10 flex-none" key={item.id}>
              <img
                src={item.pcImageUrl}
                alt={item.pcImageUrl}
                className="p-2 m-2"
                height={400}
                width={340}
              />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataFetchingComponent;
