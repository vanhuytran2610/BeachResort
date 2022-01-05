import React from 'react'
import Dest from './Dest';

export default function DestList({dests}) {
    if(dests.length===0){
        return (
            <div className="empty-search">
                <h3>Not found destinations</h3>
            </div>
        )
    }
    
    return(
        <section className="destinationslist">
            <div className="destinationslist-center">
                {dests.map((item) => {
                    return <Dest key={item.id} dest={item}></Dest>
                })}
            </div>
        </section>
    )

}
