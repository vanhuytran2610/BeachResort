import React, { Component } from 'react'
import Title from './Title';
import {FaBell} from "react-icons/fa"
import {BsCheckCircle} from "react-icons/bs"
import {MdRecommend} from "react-icons/md"
import {GrFirefox} from "react-icons/gr"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <MdRecommend/>,
                title: "Recommender System for Members"
            },
            {
                icon: <BsCheckCircle/>,
                title: "Detailed and Exact Review"
            },
            {
                icon: <GrFirefox/>,
                title: "Interacting through multiple media"
            },
            {
                icon: <FaBell/>,
                title: "Notifying members when a new location is available"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return(
                            <article key={index} className="service">
                                <span>
                                    {item.icon}
                                    
                                </span>
                                <h6>{item.title}</h6>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
