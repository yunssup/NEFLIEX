import React, { useEffect, useState } from "react";
import { Container, LogoImg, UserImg, NavInput } from "./Styled.jsx";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);

  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <Container show={show ? "true" : "false"}>
      <LogoImg
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
      />
      <NavInput
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화제목을 입력해주세요."
      />
      <UserImg
        alt="User logged"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </Container>
  );
}
