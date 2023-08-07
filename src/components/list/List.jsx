import "./list.scss";
import ListItem from "components/listItem/ListItem";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRef, useState } from "react";
import { fallbackSeriesBanner, image500 } from "api/Api";

export default function List({ title, data, type }) {
  const [isLeftMoved, setIsLeftMoved] = useState(false);
  const [isRightMoved, setIsRightMoved] = useState(true);
  const [sliderNumber, setSliderNumber] = useState(0);
  const listRef = useRef();
  const handleSlider = (direction) => {
    if (sliderNumber === 1) {
      setIsLeftMoved(false);
    }
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translate(${312 + distance}px)`;
    } else if (direction === "right" && sliderNumber < 15) {
      setIsLeftMoved(true);
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translate(${-312 + distance}px)`;
    }
    if (sliderNumber === 14) {
      setIsRightMoved(false);
    }
  };
  return (
    <div className="list">
      <div className="listTitle">{title}</div>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          style={{ display: `${isLeftMoved ? "" : "none"}` }}
          onClick={() => handleSlider("left")}
        />
        <div className="container" ref={listRef}>
          {data?.map((item) => (
            <ListItem
              thumb={image500(item.backdrop_path) || fallbackSeriesBanner}
              name={type === "movie" ? item.title : item.name}
              key={item.id}
              type={type}
              id={item.id}
            />
          ))}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          style={{ display: `${isRightMoved ? "" : "none"}` }}
          onClick={() => handleSlider("right")}
        />
      </div>
    </div>
  );
}
