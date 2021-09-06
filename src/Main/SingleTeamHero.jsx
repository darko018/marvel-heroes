const SingleTeamHero = props => {

    return (
        <div className="card single-team-card">
                <img src={props.hero.img} className="responsive-img" />
                <p className="single-hero-name">{props.hero.name}</p>
        </div>
    )
};

export default SingleTeamHero;