import styled from "styled-components";
import bgdesktop from "../../assets/bg-desktop.svg";
import bgmobile from "../../assets/bg-mobile.svg";
import breakpoints from "../../styles/BreakPoints";

export const Body = styled.div`
  background: url(${bgdesktop}) no-repeat;
  background-color: hsl(257, 40%, 49%);
  height: 100vh;
  color: #fff;

  @media ${breakpoints.bg} {
    background-color: hsl(257, 40%, 49%);
    background-size: contain;
  }

  @media ${breakpoints.md} {
    background: url(${bgmobile}) no-repeat;
    background-color: hsl(257, 40%, 49%);
    background-size: contain;
  }
`;

export const Header = styled.div`
  padding: 53px 69px 0;

  img {
    max-width: 216px;
  }

  @media ${breakpoints.bg} {
    display: flex;
    justify-content: flex-start;
    padding: 32px;
  }

  @media ${breakpoints.md} {
    justify-content: center;
    align-items: center;
    img {
      max-width: 186px;
      display: flex;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 112px;
  padding-top: 64px;

  @media ${breakpoints.bg} {
    padding-top: 32px;
    padding-left: 32px;

    img {
      max-width: 64vw;
    }
  }

  @media ${breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${breakpoints.sm}{
    padding-left: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 45px;
  margin: 20px;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 41px;
    font-weight: 600;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding-top: 9px;
  }

  button {
    border-radius: 30px;
    margin-top: 50px;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px #3d2b6d;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 55px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease;
    &:hover {
      background-color: hsl(300, 69%, 71%);
      color: #fff;
      transform: scale(1.01);
    }
  }

  @media ${breakpoints.bg} {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    padding: 32px;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      margin-bottom: 16px;
    }

    p {
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.5;
      text-align: center;
      color: #fff;
      padding-top: 0;
    }

    button {
      border-radius: 30px;
      letter-spacing: 0.5px;
      box-shadow: 0 2px 5px #3d2b6d;
      margin-top: 16px;
    }

    a {
      width: 180px;
      height: 36px;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
    }

    @media ${breakpoints.sm}{
    button{
      margin-top: 48px;
    }
  }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  ul {
    display: flex;
  }

  li {
    padding: 8px;
    margin: 12px;
    border: solid 1px #fff;
    border-radius: 100%;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: hsl(300, 69%, 71%);
      border-color: hsl(300, 69%, 71%);
    }
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 20px;
    color: #fff;
    &:hover {
      color: hsl(300, 69%, 71%);
      border-color: hsl(300, 69%, 71%);
    }
  }

  @media ${breakpoints.bg} {
    padding-left: 32px;
    justify-content: center;
  }

  li {
    padding: 8px;
    margin: 8px;
    border: solid 1px #fff;
    border-radius: 100%;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 14px;
    color: #fff;
  }

  @media ${breakpoints.sm}{
    margin-top: 0;
    padding-left: 0;
  }
`;
