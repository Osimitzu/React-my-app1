import React from 'react';

const Card = ({Title, Item1, Item2, Item3, Background}) => {
    return (
        <div className={Background}>
            <h2>{Title}</h2>
            <li>{Item1}</li>
            <li>{Item2}</li>
            <li>{Item3}</li>
        </div>
    );
};

export default Card;