import styled from "styled-components";

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;
export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* -ms-flex-wrap: wrap; */
  /* flex-wrap: wrap; */
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const EasyBackground = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background: rgba(0, 0, 0, 0.85);
align-items: center;
justify-content: center;`