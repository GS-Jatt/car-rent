import styled from "styled-components";
import { StyledBar } from "./Topbar";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const StyledBottombar = styled(StyledBar)`
  justify-content: right;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 7px ${(props) => (props.$CSize >= 10 ? "7px" : "12px")};
  font-weight: bold;
  font-size: 17px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.3);
  margin-bottom: ${props=>props.$isActive?'30px':'0px'};

  border: none;
  cursor: pointer;
  background-color: ${(props) => props.color || "#ffffffa3"};
`;

export default function Bottombar() {
    const navigate = useNavigate();
  const { page } = useParams();
  const i = new Array(10).fill(1);
  
  return (
    <StyledBottombar>
      <Button onClick={() => navigate(`page/${page - 1 || 1}`)}>
        <AiOutlineArrowLeft size={12} />
      </Button>
      {i.map((a, index) => (
        <Button
          $CSize={index + 1}
          $isActive={page == index + 1}
          key={index}
          onClick={() => navigate(`page/${index + 1}`)}
        >
          {index + 1}
        </Button>
      ))}
      <Button onClick={() => navigate(`page/${page ==10? 10: +page+1}`)}>
        <AiOutlineArrowRight size={12} />
      </Button>
    </StyledBottombar>
  );
}
