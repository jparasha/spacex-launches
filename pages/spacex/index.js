import React from "react";
import SpaceXComponent from "../../Components/organisms/Spacex";

function SpaceX(props) {
  return <SpaceXComponent {...props} />;
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so one can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get responseData.
  const { SPACEX_URL = 'https://api.spacexdata.com/v3/launches' } = process.env || {};
  // You can use any data fetching library
  const res = await fetch(`${SPACEX_URL}?limit=100`);
  const responseData = await res.json();
  // By returning { props: responseData }, the Blog component
  // will receive `responseData` as a prop at build time
  return {
    props: {
      responseData,
      URL: SPACEX_URL
    }
  };
}

export default SpaceX;
