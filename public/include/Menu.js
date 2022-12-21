import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1b2836db;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #effffa;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #02d667;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="#/#" >
        <a href="#/#" title="หน้าแรก">
          <span role="img" aria-label="about us">
            <i className=" fas fa-home" />
          </span>
        </a>
      </Link>
      <Link href="/blog/">
        <a href="/blog/" title="บทความ">
          <span role="img" aria-label="price"></span>
          <font className="menuu">บทความ</font>
        </a>
      </Link>
      <Link href={`/cryptocurrency/`}>
        <a href={`/cryptocurrency/`} title="คริปโท">
          <span role="img" aria-label="contact"></span>
          <font className="menuu">คริปโท</font>
        </a>
      </Link>
      <Link href={`/review/`}>
        <a href={`/review/`} title="รีวิว">
          <span role="img" aria-label="contact"></span>
          <font className="menuu ">รีวิว</font>
        </a>
      </Link>
      <Link href={`/portfolio/`}>
        <a href={`/portfolio/`} title="ผลงาน">
          <span role="img" aria-label="contact"></span>
          <font className="menuu ">ผลงาน</font>
        </a>
      </Link>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#EFFFFA" : "#282c34")};
    border-radius: 50px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default class App_menu extends Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}
