import styled, { keyframes } from "styled-components";
import { Typography, FormControl } from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";

const showAnimation = keyframes`
    from{
        opacity:0;
    }
    to{

        opacity:1;
    }
`;

const showContainer = keyframes`
    from{
        transform:scaleY(0);
        opacity:0;
    }
    to{
        transform:scaleY(1);
        opacity:1;
    }
`;

export const Cloud = styled.img`
  display: block;
  margin: 20px auto 0px auto;
`;

export const CancelIcon = styled(Cancel)`
  width: 14px;
  height: 14px;
`;

export const ButtonDescription = styled(Typography)`
  margin: 0px auto 0px auto;
  font-size: 10px;
  height: 15px;
  width: fit-content;
  font-weight: bold;
`;

export const Description = styled(Typography)`
  display: block;
  margin: 0px auto 0px auto;
  width: fit-content;
  height: 16px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #9c9c9cde;
  opacity: 1;
`;

export const DropArea = styled.div`
  animation: ${showContainer} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  height: 124px;
  width: ${props => props.width};
  background: white;
  border-radius: 4px;
  border: 1px dashed #00000058;
  position: relative;
  & > * {
    opacity: 0;
    animation: ${showAnimation} 0.4s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
`;

export const Item = styled.div`
  animation: ${showAnimation} 0.2s;
  width: auto;
  font-size: 11px;
  margin: 4px 5px 0px 5px;
  padding: 5px;
  border: 1px solid #00000058;
  border-radius: 10px;
`;

export const UploadButton = styled.div`
  width: 230px;
  height: 15px;
  background: black;
  padding: 3px 5px 3px 5px;
  color: white;
  margin: auto;
  left: 0px;
  right: 0px;
  bottom: 10px;
  position: absolute;
  border-radius: 50px;
  transition: 0.1s;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const CancelIconContainer = styled.div`
  float: right;
  &:hover {
    color: red;
  }
`;
