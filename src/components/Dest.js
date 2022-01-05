import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/langbacho.jpg";
import PropTypes from "prop-types";

export default function Dest({dest}) {
    const {name, slug, images} = dest;
    return(
        
        <article className="destination">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt=""></img>
                <Link to ={`/destinations/${slug}`} className="btn-primary destination-link">Detail</Link>
            </div>
            <p className="destination-info">{name}</p>
        </article>
        
    );
}

Dest.propTypes = {
    dest: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}