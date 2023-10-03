import styled from "styled-components";
import data from "../data/data";
import Card from "../ui/Card";
import { useSearchParams } from "react-router-dom";
const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 29px;
  margin: 29px ;
`;

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const carDetails = searchParams.get("search")
    ? data.filter(
        (car) =>
          (car.make + ' '+ car.model).toLowerCase() ==
          searchParams.get("search").toLowerCase()
      )
    : data;
  
  return (
    <StyledPage>
      {carDetails.map((car) => (
        <Card car={car} />
      ))}
    </StyledPage>
  );
}
