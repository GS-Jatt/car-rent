import styled from "styled-components";
import { PiUsersThree } from "react-icons/pi";
import {GiSteeringWheel} from 'react-icons/gi'
import { IoMdSpeedometer } from "react-icons/io";
import { BiGasPump } from "react-icons/bi";
import { Button } from "./Bottombar";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const StyledCard = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 13px;
  height: 580px;
`;
const Img = styled.img`
  width: 100%;
  height: 55%;
  border-radius: 15px;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.3);
`;
const SpacBetween = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  margin: 20px 0;
  & h3 {
    font-size: 28px;
    font-weight: 500;
  }
  & span {
    border: 2px dashed #4899ec;
    border-radius: 30px;
    padding: 4px 15px;
    font-size: 22px;
    font-weight: 400;
  }
  & P{
    padding: 6px;
  }
`;
const Flex =styled.div`
    display: flex;
    padding: 0 15px;
    margin-bottom: 15px;
    & p{
        width: 50%;
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #2e2d2d;
    }
`
const Footer = styled.div`
    border-top: 1px solid rgba(0,0,0,0.5);
    margin: 0 15px;
    margin-top: 20px;

    & strong{
        font-size: 35px;
        font-weight: 500;
    }
    & div{
        display: flex;
        align-items: center;
        gap: 15px;
    }
`

export default function Card({ car }) {
    const [isLiked, setIsLiled] = useState(false);
  return (
    <StyledCard>
      <Img src="/thar.jpg" />
      <SpacBetween>
        <h3>
          {car.make} {car.model}
        </h3>
        <span>{car.year}</span>
      </SpacBetween>
      <div>
        <Flex>
          <p>
            <PiUsersThree size={28} color="#4899ec" /> 4 People
          </p>
          <p>
            <BiGasPump size={28} color="#4899ec" />
            {car.fuelType}
          </p>
        </Flex>
        <Flex>
          <p>
            <IoMdSpeedometer size={28} color="#4899ec" /> {car.mileage / 1000}/
            1-litre
          </p>
          <p>
            <GiSteeringWheel size={28} color="#4899ec" />
            {car.transmission}
          </p>
        </Flex>
      </div>
      <Footer>
        <SpacBetween>
          <p>
            <strong>$440</strong>/month
          </p>
          <div>
            <Button color="#dbeafa" onClick={() => setIsLiled((l) => !l)}>
              {isLiked ? (
                <AiFillHeart size={27} color="#4899ec" />
              ) : (
                <AiOutlineHeart size={27} color="#4899ec" />
              )}
            </Button>
            
            <Button color="#4899ec">
              <p>Rent now</p>
            </Button>
          </div>
        </SpacBetween>
      </Footer>
    </StyledCard>
  );
}
