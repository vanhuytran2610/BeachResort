import React from 'react'
import DestFilter from './DestFilter';
import DestList from './DestList';
import {withDestConsumer} from "../context";
import Loading from "./Loading";

function DestContainer({context}){
    const {loading, sortedDests, dests} = context;
    if(loading) {
        return <Loading></Loading>;
    }
        
    return(
        <>
            <DestFilter dests={dests}></DestFilter>
            <DestList dests={sortedDests}></DestList>
        </>
    );
}

export default withDestConsumer(DestContainer);











// import React from 'react'
// import DestFilter from './DestFilter';
// import DestList from './DestList';
// import {DestConsumer} from "../context";
// import Loading from "./Loading";

// export default function DestContainer() {
//     return (
//         <DestConsumer>
//         {
//             value => {
//                 const {loading,sortedDests,dests} = value;
//                 if(loading) {
//                     return <Loading></Loading>;
//                 }

//                 return(
//                     <div>
//                         Hello
//                         <DestFilter dests={dests}></DestFilter>
//                         <DestList dests={sortedDests}></DestList>
//                     </div>
//                 )
//             }
//         }
//         </DestConsumer>
//     )
// }
