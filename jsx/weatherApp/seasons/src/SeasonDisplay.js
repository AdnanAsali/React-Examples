import React from 'react';


const getSeason = (lat, month) =>
{
    if(month > 2 && month < 9)
    {
        return lat > 0 ? 'summer' : 'winter'; // Ternery expression
    }
    else
    {
        return lat > 0 ? 'winter' : 'summer'; // Ternery expression
    }
}

const SeasonDisplay = (props) =>
{
    const season = getSeason(props.lat, new Date().getMonth);
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    console.log(season);
    return (
            <div> 
                Hello from {props.lat} in SeasonDisplay <br />
                <i className={`${icon} icon`} />
                The season is <h1>{season === 'winter' ? 'Very Chilly' : 'HOT, Lets go to the beach'}</h1>
            </div>
    );
}

export default SeasonDisplay;