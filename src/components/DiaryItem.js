import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import React from "react";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  // 숫자로 넘어오는 날짜시간을 사람이 보기 편한 방식으로 변환

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
