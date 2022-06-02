import React from "react";
import cardimage from "./images/Katie.png"
import str from "./images/Star.png"


class Card extends React.Component{


render(){


    return(

<div className ="card">
    < img src = {cardimage} alt="" className="card--image" />

<div
className="card-stats">
<img src = {str} alt="" className="card--star"  />
<span>5.0</span>
<span className="gray">(6)</span>
<span className="gray">USA</span>
<p>Life lessons with Katie Zaferes</p>
<p><span className="bold">  From $136 </span> / person </p>

</div>



     </div>


    )
}

}
export default Card;
