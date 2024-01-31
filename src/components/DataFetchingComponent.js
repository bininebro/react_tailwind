import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

      <div className="flex justify-between mt-4 z-2">
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
      <div className="flex justify-center">
        {data2.map((item) => (
          <div className="p-2 m-2 flex-none" key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.imageUrl}
              className=""
              height={40}
              width={100}
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
