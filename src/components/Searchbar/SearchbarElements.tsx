import styled from "styled-components";

export const SearchInput = styled.input.attrs({ type: "text" })`
  background: linear-gradient(to top right, #006699, #66ccff);
  color: #000;
  border: solid 1px gray;
  border-radius: 25px;
  height: 25px;
  margin-left: 15px;
  padding: 0.2rem calc((100vw - 960px) / 5);
  font-size: 16px;
`;

export const Input = styled.input.attrs({ type: "submit" })`
font-size: 16px;
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin:0 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ccc;
    co
`;

export const SearchForm = styled.form`
  display: inline-flex;
`;
