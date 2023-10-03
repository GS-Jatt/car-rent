import styled from "styled-components"
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #eff2f8;
`;

const Div = styled.div`
    overflow: auto;
`


export default function Layout(){
    return(
        <StyledLayout>
            <Topbar/>
            <Div>
                <Outlet/>
            </Div>
            <Bottombar/>
        </StyledLayout>
    )
}