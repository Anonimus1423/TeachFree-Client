import Bread from "../../../components/bread/Bread.jsx";
import Header from "../../../components/header/Header.jsx";
import PageTitle from "../../../components/titles/PageTitle";
import ".././style/index.scss";
import { useEffect, useState } from "react";
import Video from ".././Lesson Components/Video.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import axios from "axios";

function Lesson() {
  let courseId = "644239a5591008b1b2eff237",
    lessonId = "644239a5591008b1b2eff239";

  const [lesson, setLesson] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `/api/user/course${
          token ? "" : "/dont-reg"
        }/${courseId}/lesson/${lessonId}`
      )
      .then((data) => setLesson(data.data));
  }, []);

  return (
    <div className="lesson right-main-container">
      <Header
        buttons={{
          firstText: "Անգլերենի մակարդակի ստուգում",
          secondText: "Գրանցվել անվճար",
          firstLink: "/test",
          secondLink: "/registration",
        }}
      />
      <div className="right-container lesson about-us">
        <PageTitle
          title={lesson?.lesson?.title}
          time={lesson?.lesson?.time}
          proggress={100}
        />
        <div
          dangerouslySetInnerHTML={{ __html: lesson?.lesson?.videoUrl }}
        ></div>
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: lesson?.lesson?.description }}
        ></div>
      </div>
      <Footer fixed={false} />
    </div>
  );
}

export default Lesson;
