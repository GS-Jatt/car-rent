import styled from "styled-components";
import data from "../data/data";
import Card from "../ui/Card";
import { useSearchParams } from "react-router-dom";
const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 29px;
  margin: 29px;
`;

const Empty = styled.h2`
  text-align: center;
  margin-top: 60px;
`;

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const carDetails = searchParams.get("search")
    ? data.filter(
        (car) =>
          (car.make + " " + car.model).toLowerCase() ==
          searchParams.get("search").toLowerCase()
      )
    : data;
  if (!carDetails.length)
    return <Empty>No Car found for {searchParams.get("search")}</Empty>;

  return (
    <StyledPage>
      {carDetails.map((car) => (
        <Card car={car} />
      ))}
    </StyledPage>
  );
}
