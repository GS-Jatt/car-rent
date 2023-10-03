import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import {
  useNavigate,
  useNavigation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Input = styled.input`
  width: 400px;
  height: 44px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.3);

  /* margin: 20px 0px; */
  padding: 0px 20px;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 6%;
    top: 9px;
  }
`;

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set('search', search);
    setSearchParams(searchParams);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <AiOutlineSearch size={23} />
      </button>
    </Form>
  );
}
