import React, { useState, useEffect } from "react";
import Chip from "../../atoms/chips";
import LoaderComponent from "../../molecules/Loader";

const URL = "https://api.spacexdata.com/v3/launches?limit=100";

const getSpaceXData = async (filters) => {
  const response = await fetch(URL);
  return response.json();
};

const getChips = (chipData = {}) => {
  const { years = [], landings = [], launches = [] } = chipData;
  return (
    <div className={"sidebar flex-default flex-item-default"}>
      <p className={"flex-item-default"}>Launch Year</p>
      {years.map((item, index) => (
        <Chip key={index} title={item} isSelected={false} />
      ))}
      <p className={"flex-item-default"}>Successful Launch</p>
      {launches.map((item, index) => (
        <Chip key={index} title={item} isSelected={false} />
      ))}
      <p className={"flex-item-default"}>Successful Landing</p>
      {landings.map((item, index) => (
        <Chip key={index} title={item} isSelected={false} />
      ))}
    </div>
  );
};

const getCards = (responseData) => {
  const cards = [];
  const chips = {
    years: [],
    landings: ["true", "false"],
    launches: ["true", "false"]
  };
  responseData &&
    responseData.forEach((element, i) => {
      // prepare chips
      !chips.years.includes(element.launch_year) &&
        chips.years.push(element.launch_year);

      // prepare cards
      cards.push(
        <div className="card flex-default" key={i}>
          <img src={element.links.mission_patch_small} alt="logo" />
          <p className="card-title">
            {element.mission_name} #{element.flight_number}
          </p>
          <p>Launch year: {element.launch_year}</p>
          <p>Successful Launch: {element.launch_success ? "Yes" : "No"}</p>
          <p>Successful Landing: {element.launch_success ? "Yes" : "No"}</p>
        </div>
      );
    });

  return { cards, chips };
};

//
export default function SpaceXContainer(props) {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    if (!responseData) {
      getSpaceXData()
        .then((data) => {
          setResponseData(data);
          setLoader(false);
        })
        .catch((err) => setLoader(false));
    }
  }, [responseData, isLoading]);

  const { cards = [], chips } = getCards(responseData);

  return (
    <>
      {!isLoading ? (
        <div className={"main-demo flex-default"}>
          {responseData && getChips(chips)}
          <div className={"card-root flex-default flex-item-default"}>
            {cards}
          </div>
        </div>
      ) : (
        <LoaderComponent isLoading={isLoading} />
      )}
    </>
  );
}
