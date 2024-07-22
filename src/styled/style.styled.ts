import styled from "styled-components";

export const BorderLeft = styled.div`
border-left:5px solid ${(props) => props.color};
color:white;
`;
export const Logo = styled.img`
width:150px;
height:74px;
`;
export const Height100 = styled.div`
height:100%;
`;

export const PositionSticky = styled.div`
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
background-color: yellow;
`;