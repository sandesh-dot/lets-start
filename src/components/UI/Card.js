import React from "react";
import './Card'

function Card(props){
    const classes='card ' + props.className;
    return <div className={classes}>{props.children}</div>
    
    //return <div className="card">{props.children}</div>
    //Previously we used createElement to create a div element and then we added a class to it and then we added the children to it.
    //Now we are using JSX to create a div element and then we are adding a class to it and then we are adding the children to it.
    //The difference is that in the first case we are using createElement and in the second case we are using JSX.
    //The second case is more readable and easy to understand.
    //retun React.createElement('div',{className:'classes'},props.children);
}
export default Card;