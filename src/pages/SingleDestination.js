import React, {Component} from "react";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {DestContext} from "../context";
import defaultLbh1 from "../images/langbacho1.jpg"
import StyledHero from "../components/StyledHero";
import Contact from "../components/Contact";

class SingleDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultLbh1
        };
    }    

    static contextType = DestContext;

    render(){
        const { getDestination } = this.context;
        const destNorth = getDestination(this.state.slug);
        if (!destNorth){
            return(
                <div className="error">
                    <h3>Không tìm thấy địa điểm nào</h3>
                    <Link to="/destinations" className="btn-primary">Quay về</Link>
                </div>
            )
        }

        const {name, description, category, price, address, time, extras, images} = destNorth
        
        const [mainImg, ...defaultImg] = images;
        return(
            <>
            <StyledHero img={mainImg || this.state.defaultLbh1}>
                <Banner title={`${name}`}>
                    <Link to="/destinations" className="btn-primary">
                        Quay về
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-destination">
                <div className="single-destination-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>;
                    })}
                </div>
                <div className="single-destination-info">
                    <article className="desc">
                        <h3>Chi tiết</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Thông tin</h3>
                        <h6><b>Thể loại:</b> {category}</h6>
                        <h6><b>Price:</b> {price}</h6>
                        <h6><b>Địa chỉ:</b> {address}</h6>
                        <h6><b>Thời gian:</b> {time}</h6>
                    </article>
                </div>
            </section>
            <section className="destination-extras">
                <h6>Đặc biệt</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>;
                    })}
                </ul>
            </section>
            <Contact></Contact>
            </>
        )
    }
}

export default SingleDestination;