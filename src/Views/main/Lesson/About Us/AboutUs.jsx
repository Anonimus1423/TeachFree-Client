import Bread from "../../../components/bread/Bread.jsx";
import Header from "../../../components/header/Header.jsx";
import PageTitle from "../../../components/titles/PageTitle";
import ".././style/index.scss";
import { useEffect, useState } from "react";
import Video from ".././Lesson Components/Video.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import axios from "axios";

function Lesson() {
  let courseId = "6419340ba14d67ffaa455692", 
  lessonId = "6419340ba14d67ffaa455694";

  const [lesson, setLesson] = useState({});
  useEffect(() => {
    axios.get(`/api/user/course/${courseId}/lesson/${lessonId}`).then(data => setLesson(data.data))
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
            <Video src={lesson?.lesson?.videoUrl?.toString()} />
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
