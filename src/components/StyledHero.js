import styled from "styled-components";
import defaultLbh1 from "../images/langbacho1.jpg";


const SimpleHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img? props.img: defaultLbh1}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default SimpleHero;
