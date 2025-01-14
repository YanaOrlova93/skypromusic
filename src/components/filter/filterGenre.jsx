import * as S from "./styles.js";
import GenrePopUp from "../filterPopUps/genrePopUp.jsx";
import { useState } from "react";

export default function FilterGenre({
  isActive,
  onShow,
  onHide,
  arr,
  conditionGenre,
  setConditionGenre,
}) {

  // Локальное состояние с собственным счетчиком выбранных пунктов
  const [counter, setCounter] = useState(0);

  return (
    <S.FilterButtonContainer>
      {counter > 0 ? <S.Counter>{counter}</S.Counter> : ""}
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          жанру
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          жанру
        </S.FilterButton>
      )}
      {isActive ? (
        <GenrePopUp
          arr={arr}
          conditionGenre={conditionGenre}
          setConditionGenre={setConditionGenre}
          counter={counter}
          setCounter={setCounter}
        />
      ) : (
        ""
      )}
    </S.FilterButtonContainer>
  );
}
