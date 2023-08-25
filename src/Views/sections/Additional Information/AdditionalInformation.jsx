import "./style/index.scss"
import InfoBlock from "./components/InfoBlock";
import {ReactComponent as StudyIcon} from "../../images/icons/Study.svg";
import {ReactComponent as VideoIcon} from "../../images/icons/Video.svg";
import {ReactComponent as PenIcon} from "../../images/icons/Pen.svg";
import { getAddintionalInformation } from "../../../Api/queries";
import useSumbitForm from "../../../utils/submitForm";
import { useState, useEffect } from "react";

function AdditionalInformation() {
    const [additionalInformationFunction, loading] = useSumbitForm(getAddintionalInformation, true);
    const [additionalInformation, setAdditionalInformation] = useState([])
    useEffect(() => {
        additionalInformationFunction({}, (data) => {
        setAdditionalInformation(data);
      });
    }, []);
    return ( 
        <section className="additionalInformation right-container">
            <InfoBlock text="Աշակերտ" number={additionalInformation[0]?.pupil} Icon={StudyIcon} />
            <InfoBlock text="Վիդեոդասեր" number={additionalInformation[0]?.videoLessons} Icon={VideoIcon} />
            <InfoBlock text="Դրական Կարծիք" number={additionalInformation[0]?.positiveFeedback} Icon={PenIcon} />
        </section>    
    );
}

export default AdditionalInformation;