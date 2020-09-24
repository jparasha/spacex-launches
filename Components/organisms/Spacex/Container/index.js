import React, { useState, useEffect } from 'react';
import Chip from '../../../atoms/chips';
import CONSTANTS from '../../../utils/constants';
import SpaceXComponent from '../Presentation';
import { appendQueryParams, getSpaceXData } from '../../../utils';

/**
 * renders chips based on params
 * @param {*} data
 * @param {*} handleChips
 * @param {*} type
 * @param {*} chipState
 * @param {*} label
 */
const prepareChip = (data, handleChips, type, chipState, label) => {
    return (
        <React.Fragment>
            <span className={'flex-default'}><p className={'flex-item-default'}>{label}</p></span>
            {
                data.map((item, index) => (
                    <Chip key={index} title={item.label} handleClick={handleChips} type={type} isSelected={chipState === item.label} />
                ))
            }
        </React.Fragment>
    );
};

const getChips = (handleChips, chipData = {}, chipState = {}) => {
    const { years = [], landings = [], launches = [] } = chipData;
    return (
        <div className={'sidebar flex-default flex-item-default'}>
            <span className={'flex-item-default filters'}>Filters</span>
            {prepareChip(years, handleChips, CONSTANTS.LABEL_YEAR, chipState.year, 'Launch Year')}
            {prepareChip(launches, handleChips, CONSTANTS.LABEL_SUCCESS_LAUNCH, chipState.launch, 'Successful Launch')}
            {prepareChip(landings, handleChips, CONSTANTS.LABEL_SUCCESS_LANDING, chipState.landing, 'Successful Landing')}
        </div>
    );
};

/**
 * calculates cards and chips
 * @param {*} initalData
 * @param {*} responseData
 */
const getCards = (initalData, responseData) => {
    const cards = [];
    const chips = {
        years: [],
        landings: [{ label: 'true', selected: false }, { label: 'false', selected: false }],
        launches: [{ label: 'true', selected: false }, { label: 'false', selected: false }]
    };
    responseData &&
        responseData.forEach(element => {
            // prepare chips
            !chips.years.some(item => item.label === (element.launch_year)) &&
                chips.years.push({ label: element.launch_year, selected: false });
        });

    initalData && initalData.forEach((element, i) => {
        // prepare cards
        cards.push(
            <div className='card flex-default' key={i}>
                <img src={element.links.mission_patch_small} alt={element.mission_name} />
                <p className='card-title'>
                    {element.mission_name} #{element.flight_number}
                </p>
                <p>Launch year: {element.launch_year}</p>
                <p>Successful Launch: {element.launch_success ? 'Yes' : 'No'}</p>
                <p>Successful Landing: {element.rocket.first_stage.cores[0].land_success ? 'Yes' : 'No'}</p>
            </div>
        );
    });

const noMatch = <div className={'flex-default'}><h3 className={'flex-item-default'}>{CONSTANTS.ERROR_NO_FILTER_MATCH}</h3></div>;
    const absoluteCards = cards.length ? cards : noMatch;
    return { absoluteCards, chips };
};

const prepareQueryParams = data => {
    const { year = '', launch = '', landing = '' } = data || {};
    const params = {
        [CONSTANTS.QUERY_LABEL_YEAR]: year,
        [CONSTANTS.QUERY_LABEL_SUCCESS_LANDING]: landing,
        [CONSTANTS.QUERY_LABEL_SUCCESS_LAUNCH]: launch
    };
    return appendQueryParams(params);
};

// SpaceX Container
function SpaceXContainer(props) {

    // state
    const [isLoading, setLoader] = useState(false);
    const [hasComponentLoaded, setComponentLoadState] = useState(false);
    const [responseData, setResponseData] = useState(props.requestData || props.responseData || null);
    const [chipState, setChipState] = useState(props.chipData);


    //effects
    useEffect(() => {
        if (!hasComponentLoaded) {
            setComponentLoadState(true);
        } else {
            setLoader(true);
            const urlParams = prepareQueryParams(chipState);
            getSpaceXData(urlParams, props.URL)
                .then(data => {
                    setResponseData(data);
                    setLoader(false);
                })
                .catch(() => setLoader(false));
        }
    }, [chipState]);

    // chips handler
    const handleChips = (label, type) => {
        switch (type) {
            case CONSTANTS.LABEL_YEAR:
                setChipState({ ...chipState, year: chipState.year !== label ? label : '' });
                break;
            case CONSTANTS.LABEL_SUCCESS_LANDING:
                setChipState({ ...chipState, landing: chipState.landing !== label ? label : '' });
                break;
            case CONSTANTS.LABEL_SUCCESS_LAUNCH:
                setChipState({ ...chipState, launch: chipState.launch !== label ? label : '' });
                break;
            default:
                break;
        }
    };

    // get chips and cards
    const { absoluteCards: cards = [], chips } = getCards(responseData, props.responseData);

    return (
        <SpaceXComponent
            getChips={getChips}
            handleChips={handleChips}
            chips={chips}
            chipState={chipState}
            isLoading={isLoading}
            responseData={responseData}
            cards={cards}
        />
    );
}

export default SpaceXContainer;
