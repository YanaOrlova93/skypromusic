import styled from "styled-components";

export const WrapperPopUp = styled.div`
  margin-top: 10px;
  border-radius: 12px;
  width: 248px;
  height: 305px;
  position: absolute;
  padding: 34px;
  background-color: #313131;
`;

export const FilterPopUp = styled.div`
  position: absolute;
  width: 180px;
  height: 237px;
  font-size: 20px;
  line-height: 24px;
  overflow-y: auto;
  background-color: #313131;
  font-variant-numeric: lining-nums proportional-nums;
  font-style: normal;
  font-family: StratosSkyeng;
  font-family: "StratosSkyeng", sans-serif;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 2px;
    background: #4b4949;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 2px;
  }
`;

export const SmallPopUp = styled(FilterPopUp)`
  margin-top: 10px;
  border-radius: 12px;
  width: 221px;
  height: 196px;
  padding: 34px;
`;

export const FilterPopUpList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const FilterPopUpItem = styled.li`
  color: white;
  &:hover {
    color: #b672ff;
    cursor: pointer;
  }
`;

export const FilterPopUpItemActive = styled.li`
  color: #B672FF;
  text-decoration: underline;
  ;
  &:hover {
    color: #b672ff;
    cursor: pointer;
  }
`;
