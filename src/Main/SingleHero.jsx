import { useState } from "react"

import "./SingleHero.css"

const SingleHero = props => {

    const onClick = () => {
        props.setTeam(props.team.concat({
            name: props.hero.name,
            img: `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`
        }))
    }
    

    return (
        <div className="card col s8 m6 l4">
            <div className="card-content" id="card-pd">
                <span className="card-title activator grey-text text-darken-4">{props.hero.name}</span>
            </div>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator responsive-img" id="hero-img" src={`${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`} />
            </div>
            <div className="buttons center">
                <button className="waves-effect waves-light btn">Info</button>
                <button className="waves-effect waves-light btn" onClick={onClick}>Add</button>
            </div>
        </div>

    )
}

export default SingleHero;