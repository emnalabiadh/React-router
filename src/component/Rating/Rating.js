import React from "react";
import { Rate } from "antd";
import "./Rating.css";

const Rater = ({ filterRate, movieRating, rating, setRating }) => {
  // const [value, setValue] = useState(1);

  const handleChange = (value) => {
    // setValue(value);
    setRating(value);
  };

  return (
    <span className="ratingContent">
      {filterRate ? (
        <Rate onChange={handleChange} value={rating} />
      ) : (
        <Rate value={movieRating} disabled className="movieRating" />
      )}
    </span>
  );
};

export default Rater;
