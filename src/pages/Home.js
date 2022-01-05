import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-scroll";
import FeatureDest from "../components/FeatureDest";
import Contact from "../components/Contact";
import Services from "../components/Services";

class Home extends Component{
    render() {
        return(
            <>
            <Hero>
                <Banner title="Welcome to Vietnam Travel" subtitle="Enjoy Your Travel With Vietnam Travel">
                <Link to="featured" className="btn-primary" smooth={true} duration={800}>Recommended Destinations</Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeatureDest></FeatureDest>
            <Contact></Contact>
            </>
        )
    }
    
}

export default Home;