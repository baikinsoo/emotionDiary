import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  // 상단 title 바꾸기
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
