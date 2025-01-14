import styled from "styled-components";
import { Btn } from "../../styles";

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const BarPlayerProgress = styled.input`
  overflow: hidden;
  width: 100%;
  -webkit-appearance: none;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;

  &::-webkit-slider-runnable-track {
    height: 5px;
    -webkit-appearance: none;
    color: #13bba4;
  }

  &::-webkit-slider-thumb {
    width: 0px;
    -webkit-appearance: none;
    height: 5px;
    cursor: pointer;
    background: #2e2e2e;
    box-shadow: -8000px 0 0 8000px #b672ff;
  }

  // -webkit-appearance: none;
  // width: 100%;
  // display: flex;
  // align-items: center;
  // cursor: pointer;

  // &::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  //   border: 2px solid #B672FF;
  //   height: 12px;
  //   width: 12px;
  //   background: #B672FF;
  //   cursor: pointer;
  //   margin-top: -5px;
  // }

  // &::ms-track {
  //   width: 100%;
  //   cursor: pointer;
  //   background: transparent;
  //   border-color: transparent;
  //   color: transparent;
  // }

  // &::-webkit-slider-runnable-track {
  //   height: 5px;
  //   background-color: #2E2E2E;
  // }

  &::-webkit-slider-runnable-track:hover {
    height: 8px;
  }
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  ${Btn}
`;

export const PlayerBtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
  ${Btn}
`;

export const PlayerBtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
  ${Btn}
`;

export const PlayerBtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
  ${Btn}
`;

export const PlayerBtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
  ${Btn}
`;

export const PlayerBtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  ${Btn}
`;

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
  ${Btn}
`;

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: blue;
  // fill: #d9d9d9;
  ${Btn}
`;

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
  ${Btn}
`;

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  ${Btn}
`;

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  ${Btn}
`;

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  ${Btn}
`;

export const TrackPlaycontain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  ${Btn}
`;

export const TrackPlayimage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
  ${Btn}
`;

export const TrackPlaysvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #d9d9d9;
`;

export const TrackPlayName = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayNameLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: max-content;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
  cursor: pointer;
`;

export const TrackPlayDislike = styled.div`
  padding: 5px;
  cursor: pointer;
  margin-left: 28.5px;
`;

export const TrackPlaylikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
  -webkit-appearance: none;
  width: 100%;
  display: flex;
  align-items: center;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid #fff;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: #1a1a1a;
    cursor: pointer;
    margin-top: -5px;
  }

  &::ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-runnable-track {
    height: 2px;
    background-color: #797979;
  }
`;

export const ActualTimer = styled.span`
  color: #696969;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;
