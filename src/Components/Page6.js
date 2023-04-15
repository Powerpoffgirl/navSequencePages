import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Page6 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const objSurvey1 = location.state;

  const nextPage = () => {
    const objSurvey = JSON.parse(localStorage.getItem("selectedOptions"));
    let i = "";
    if (objSurvey.option4A_option4B != "") {
      i = objSurvey.option4A_option4B;
    } else {
      i = "";
    }
    navigate(`/page${i}`, {
      state: { id: Object.entries(objSurvey).slice(i, objSurvey.length) },
    });
  };

  const prevPage = () => {
    const objSurvey = JSON.parse(localStorage.getItem("selectedOptions"));
    let i = "";
    if (objSurvey.option2A_option2B != "") {
      i = objSurvey.option2A_option2B;
    } else if (objSurvey.option1A_option1B != "") {
      i = objSurvey.option1A_option1B;
    } else {
      i = "";
    }
    navigate(`/page${i}`, {
      state: { id: Object.entries(objSurvey).slice(i, objSurvey.length) },
    });
  };

  return (
    <div>
      Page6
      <button onClick={prevPage}>prev page</button>
      <button onClick={nextPage}>next page</button>
    </div>
  );
};

export default Page6;
