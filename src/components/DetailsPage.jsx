import React, { useState, useEffect } from "react";

const DetailsPage = (props) => {
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${props.match.params.id}`
    );
    let details = await res.json();
    console.log(details);
    setDetails(details);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <ul>
        <li>Name: {details.name}</li>
        <li>Username: {details.username}</li>
        <li>Email:{details.email}</li>
        <li>Phone: {details.phone}</li>
        <li>Website: {details.website}</li>
      </ul>
    </div>
  );
};

export default DetailsPage;
