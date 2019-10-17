import React from 'react';
import DuckList from '../components/DuckList'

const DuckContainer = ({ ducks, currentDuck}) => {

    return (
        <div>
            {currentDuck ? "current duck found!" : <DuckList {...{ducks}}/>}
            
        </div>
    );
}

export default DuckContainer;
