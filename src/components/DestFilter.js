import React from 'react'
import { useContext } from 'react'
import { DestContext } from "../context";
import Title from "../components/Title";


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function DestFilter({dests}) {
    const context = useContext(DestContext)
    const {handleChange, category, region} = context;
    //const [searchTerm, setSearchTerm] = useState("")
    
    let categories = getUnique(dests, 'category');
    categories = ['all', ...categories]
    categories = categories.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let regions = getUnique(dests, 'region');
    regions = ['all', ...regions]
    regions = regions.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section id="destinations" className="filter-container">
            <Title title="Search Destinations" />
            <form className="filter-form">
                {/*select category*/}
                <div classname="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" value={category} 
                            className="form-control" 
                            onChange={handleChange}>
                        
                        {categories}
                        
                    </select>
                </div>
                {/*select region*/}
                <div classname="form-group">
                    <label htmlFor="region">Region</label>
                    <select name="region" id="region" value={region} 
                            className="form-control" 
                            onChange={handleChange}>
                        
                        {regions}
                        
                    </select>
                </div>
            </form>
        </section>
    )
}
