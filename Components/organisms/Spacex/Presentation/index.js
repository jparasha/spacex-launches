import React from 'react';
import LoaderComponent from '../../../molecules/Loader';

export default function SpacePresentation(props) {
    const { getChips, handleChips, chips, chipState, isLoading, responseData, cards } = props || {};

    return (<React.Fragment>
        {!isLoading ? (
            <div className={'main-demo flex-default'}>
                <h1 className='title-small'>SpaceX Launch Programs</h1>
                {responseData && getChips(handleChips, chips, chipState)}
                <div className={'card-root flex-default flex-item-default'}>
                    {cards}
                </div>
            </div>
        ) : (
                <LoaderComponent isLoading={isLoading} />
            )}
    </React.Fragment>);
}
