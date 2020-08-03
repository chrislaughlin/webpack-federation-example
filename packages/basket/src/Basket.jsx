import React from "react";
import styled from "styled-components";

const StyledBasket = styled.div`
  height: 200px;
  width: 200px;
  background: blue;
  color: white;
  font-size: xx-large;
`;

const Basket = () => {
    return (
        <StyledBasket>
            BASKET!
        </StyledBasket>
    )
};

export default Basket;
