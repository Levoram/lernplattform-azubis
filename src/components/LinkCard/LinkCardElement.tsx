import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavCardLink = styled(Link)`
  color: white;
  background: linear-gradient(to top right, #006699, #66ccff);
  font-weight: 600;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-height: 200px;
  min-width: 200px;
  cursor: pointer;
  &.active {
    color: #fff;
  }
`;
