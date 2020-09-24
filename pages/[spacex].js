import React from "react";
import SpaceXComponent from "../Components/organisms/Spacex";

function SpaceX(props) {
  return <SpaceXComponent {...props} />;
}


// This function gets called at run time on server-side.
// It won't be called on client-side, so one can even do
// direct database queries.
export async function getServerSideProps(context) {
  // Call an external API endpoint to get responseData.
  const { SPACEX_URL = 'https://api.spacexdata.com/v3/launches' } = process.env || {};
  // You can use any data fetching library
  const res = await fetch(`${SPACEX_URL}?limit=100`);
  const responseData = await res.json();
  // By returning { props: responseData }, the component
  // will receive `responseData` as a prop at run time
  const { query = {}, req: { url = '/' } } = context || {};
  const { launch_year = '', launch_success = '', land_success = '' } = query;
  const chipData = { year: launch_year, launch: launch_success, landing: land_success };
  const isQueryAvailable = launch_success || launch_year || land_success;
  let requestData = null;
  if (isQueryAvailable) {
    const userParams = url.split('?') || [];
    const queryParams = (userParams.length > 1) ? `${SPACEX_URL}/?${userParams[1]}` : null;
    if (queryParams) {
      const customResponse = await fetch(queryParams);
      requestData = await customResponse.json();
    }
  }

  return {
    props: {
      chipData,
      requestData,
      responseData,
      URL: SPACEX_URL
    }
  };
}

export default SpaceX;
