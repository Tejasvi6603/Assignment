import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Card = ({ record }) => {
  return (
    <div className="card">
      <h3>{record.show.name}</h3>
      <img src={record.show.image.medium} alt={record.show.name} />
      <Link to={`/movie/${record.show.id}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="card-container">
        {records.map((record, index) => (
          <Card key={index} record={record} />
        ))}
      </div>
    </div>
  );
};

export default Home;
