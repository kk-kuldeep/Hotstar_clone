import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import {useSelector} from "react-redux"
function Movies() {

  const movies = useSelector(selectMovies);
  return (
    


    <Container>
   
      <h4 id="rex">Recommended for You</h4>
      <Content>
      {/* {
        movies && 
        movies.map((movie)=>{
          <Wrap>
          
            <img src={movie.cardImg} />
        </Wrap>
        })
      } */}
        <Wrap>
          <a href="/detail">
            <img src="/images/shang-chi.png" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1636/1161636-v-1334423c2043" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v" alt="img"/>
          </a>
        </Wrap>
      </Content>
      <h4 id='ana'>Action and Adventure</h4>
      <Content>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1691/1011691-v-657881703c09" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2949/1052949-v-f2364f3b06ab" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9289/1039289-v-d29d30949241" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1744/1041744-v-f84d36239d74" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/7809/877809-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2442/862442-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/8806/798806-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9562/799562-v" alt="img"/>
          </a>
        </Wrap>
      </Content>
      <h4 id='maf'>Mickey and Friends</h4>
      <Content>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/9389/1119389-v-8d06625813a0" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1645/831645-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9222/689222-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/260/650260-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6365/656365-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3698/673698-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/3761/673761-v" alt="img"/>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3702/673702-v" alt="img"/>
          </a>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(8, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.15);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
