import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";


export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))";
    if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
  }};
`;


export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`;
