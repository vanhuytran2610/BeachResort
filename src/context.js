import React, { Component } from "react";
import items from "./data";


const DestContext = React.createContext();

class DestProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dests: [],
            sortedDests: [],
            featuredDests: [],
            loading: true,
            category: 'all',
            region: 'all',
            name: 'all'
        }
    }


    //getData
    componentDidMount() {
        let dests = this.formatData(items);
        let featuredDests = dests.filter(dest => dest.featured === true);
        //
        
        this.setState({
            dests,
            featuredDests,
            sortedDests: dests,
            loading: false,
            //
            
        });

    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let dest = { ...item.fields, images, id }
            return dest;
        });
        return tempItems;
    }

    getDestination = async (slug) => {
        let tempDests = [...this.state.dests];
        const dest = tempDests.find(dest => dest.slug === slug);
        return dest;
    }

    handleChange = event => {
        const target = event.target;
        const value = event.category === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState(
            {
                [name]: value
            },
            this.filterDestination
        );

    };

    filterDestination = () => {
        let { dests, category, region } = this.state;
        //category filter
        let tempDests = [...dests];

        if (category !== "all") {
            tempDests = tempDests.filter(dest => dest.category === category);
        }

        if (region !== "all") {
            tempDests = tempDests.filter(dest => dest.region === region);
        }

        this.setState({
            sortedDests: tempDests
        })
    }


    render() {

        return (
            <DestContext.Provider value={{ ...this.state, getDestination: this.getDestination, handleChange: this.handleChange }}>
                {this.props.children}
            </DestContext.Provider>
        );
    }
}

const DestConsumer = DestContext.Consumer;

export function withDestConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <DestConsumer>
                {value => <Component {...props} context={value} />}
            </DestConsumer>
        )
    }
}

export { DestProvider, DestContext, DestConsumer };