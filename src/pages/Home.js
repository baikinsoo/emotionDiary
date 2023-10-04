import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);

  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 상단 title 바꾸기
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - Home`;
  }, []);

  // 날짜 범위 지정하기
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
        // getMonth() 다음의 1은 첫번째 날을 의미한다.
      ).getTime();
      console.log(new Date(firstDay));

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();
      // getMonth() 다음의 0은 달력은 1일부터 시작하기 때문에 이전달 마지막 날을 의미한다.
      console.log(new Date(lastDay));

      // 날짜 필터로 범위 지정
      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);
  // diaryList도 넣어줘야 한다.

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
