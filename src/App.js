import React, { useState, useEffect } from "react";
import { useFetch } from "./UseFetchHook";
import Tours from "./Tours";
import "./tourStyle.css";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const { loading, data } = useFetch(url);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    setTours(data);
  }, [data]);

  return (
    <>
      <h1 className="title">{loading ? "Loading..." : "Our Tours"}</h1>
      {!loading &&
        tours.map((tour) => {
          return <Tours key={tour.id} {...tour} removeTour={removeTour} />;
        })}
    </>
  );
};

export default App;
