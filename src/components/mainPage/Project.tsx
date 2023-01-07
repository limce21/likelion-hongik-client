import { Fade } from "react-awesome-reveal";
import project1 from "../images/main_project1.png";
import styled from "styled-components";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Iarrow } from "../../interfaces";
import projects from "../../data/projects.json";
import { Iprojects } from "../../interfaces/index";

const Project = () => {
  function NextArrow({ onClick }: Iarrow) {
    return (
      <Next onClick={onClick}>
        <IoIosArrowForward />
      </Next>
    );
  }
  function PrevArrow({ onClick }: Iarrow) {
    return (
      <Prev onClick={onClick}>
        <IoIosArrowBack />
      </Prev>
    );
  }
  const [isHovering, setIsHovering] = useState(0);
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    speed: 1000,
    dots: true,
    slidesToScroll: 1,
    autoplay: true, //어지러워서 고민 ...
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Fade>
      <ProjectContainer>
        <StyledSlider {...settings}>
          {projects.map(({ title, desc, pid }: Iprojects) => (
            <div key={pid}>
              <ProjectBox img={title} onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
                {isHovering ? (
                  <Hover>
                    <HoverText>
                      <Title>{title}</Title>
                      <Desc>{desc}</Desc>
                    </HoverText>
                  </Hover>
                ) : (
                  ""
                )}
              </ProjectBox>
            </div>
          ))}
        </StyledSlider>
      </ProjectContainer>
    </Fade>
  );
};

const ProjectContainer = styled.div`
  margin-top: 50px;
  width: 100vw;
  height: 400px;
  position: relative;
`;

const ProjectBox = styled.div<{ img: string }>`
  background-image: url(${project1});
  /* 이런식으로 title 이름을 props로 받아서 그 이름의 파일을 이미지로 등록하고 싶은데 모르겠... */
  /* background-image: url(${(props) => props.img && "title"}); */

  background-size: cover;
  width: 315px;
  height: 201px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -160px;

  transition: all 0.2s linear;
  &:hover {
    /* width: 430px;
    height: 300px; */
    transform: scale(1.2);
  }
`;

const Hover = styled.div`
  width: 490px;
  height: 314px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
`;

const HoverText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`;

const Desc = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  width: 232px;
  height: 60px;
  margin-top: 24px;
`;

const StyledSlider = styled(Slider)`
  height: 400px;
`;

const Next = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  left: 780px;
`;

const Prev = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  right: 780px;
`;

export default Project;
