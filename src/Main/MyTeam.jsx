import { useState } from "react";
import "./MyTeam.css"

import SingleTeamHero from "./SingleTeamHero";

const MyTeam = props => {
    

    
    return (
        <div className="col s5 m5 l4 xl3">
            <div className="container">
                <p>My Team</p>
            </div>
            <div className>
                {props.team.map((el, index) => <SingleTeamHero hero={el} key={index} />)}
            </div>
        </div>
    )
}

export default MyTeam;