import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.image.medium} alt={details.name} />
      <p>{details.summary}</p>
      {/* Additional details here */}
    </div>
  );
};

export default MovieDetailPage;
