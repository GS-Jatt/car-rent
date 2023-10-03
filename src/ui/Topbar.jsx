import styled from "styled-components";
import SearchBar from "./SearchBar";

export const StyledBar = styled.nav`
  width: 100%;
  box-shadow: 0px 0px 7px rgb(0, 0, 0, 0.3);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  height: 80px;
  display: flex;
  padding: 0 28px;
  align-items: center;
`;

export default function Topbar() {
  return (
    <StyledBar>
      <SearchBar />
    </StyledBar>
  );
}
