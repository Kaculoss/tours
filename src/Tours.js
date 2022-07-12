import React, { useState } from "react";

const Tours = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <div className="item">
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
      <p className="text">
        {readMore ? info.slice(0, 200) : info}
        <span onClick={() => setReadMore(!readMore)} className="read-or-hide">
          {readMore ? "...read more" : " show less"}
        </span>
      </p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
};

export default Tours;
