import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-scroll";
import Contact from "../components/Contact";
import DestContainer from "../components/DestContainer";

const Destination = () => {
    return(
        <>
        <Hero hero="destinationHero">
            <Banner title="Destinations">
                <Link to='destinations' className="btn-primary" smooth={true} duration={800}>
                    Search Destinations
                </Link>
            </Banner>
        </Hero>
        <DestContainer></DestContainer>
        <Contact></Contact>
        </>
    )
};

export default Destination;