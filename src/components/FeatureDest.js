import React, {Component} from "react";
import {DestContext} from "../context";
import Loading from "./Loading";
import Dest from "./Dest";
import Title from "./Title";

export default class FeatureDest extends Component {
    static contextType = DestContext

    render() {
        let {loading, featuredDests: dests} = this.context
        dests = dests.map(dest => {
            return( 
                <Dest key={dest.id} dest={dest}></Dest>
            )
        })
        return(
            <section id="featured" className="featured-destinations">
                <Title title="Recommended Destinations" />
                <div className="featured-destinations-center">
                    {loading ? <Loading />: dests}
                </div>
            </section>
        );
    }
}