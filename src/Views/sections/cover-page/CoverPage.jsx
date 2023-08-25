import MainButton from "../../components/buttons/MainButton";
import VideoButton from "./components/VideoButton";
import man from "../../images/Cover Page Man.svg";
import "./style/index.scss";
import "./style/start-animation.scss";
import { ReactComponent as CoverPageBackground } from "../../images/Cover Page Background.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function CoverPage() {
  return (
    <section className="cover-page right-container">
      <div className="left">
        <h1>Լավագույն առցանց դասերը Հայաստանում</h1>
        <p>
          Բացի անգլերենի դասընթացներից, մենք իրականացնում ենք նաև ամառային
          ճամբարներ՝ երեխաների համար, կրթական մարաթոններ և մշակութային
          միջոցառումներ՝ մեծահասակների համար, որոնք կրթում և զարգացնում են մեր
          ուսանողներին, նաև ապահովում են հետաքրքիր ժամանց նրանց համար:
        </p>
        <Link to={"/courses/noreg/644239a5591008b1b2eff237/64d72a3c1731de3469ffc947"}>
          <MainButton color="yellow">
            Փաստեր Go languages school-ի մասին
          </MainButton>
        </Link>
      </div>
      <div className={"right-img"}>
        <img src={man} alt="English Learning Man" />
      </div>
      <VideoButton />
      <CoverPageBackground className={"cover-page-background"} />
    </section>
  );
}

export default CoverPage;
