import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Page1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const objSurvey1 = location.state;

  const nextPage = () => {
    const objSurvey = JSON.parse(localStorage.getItem("selectedOptions"));
    let i = "";
    if (objSurvey.option2A_option2B != "") {
      i = objSurvey.option2A_option2B;
    } else if (objSurvey.option3A_option3B != "") {
      i = objSurvey.option3A_option3B;
    } else if (objSurvey.option4A_option4B != "") {
      i = objSurvey.option4A_option4B;
    } else {
      i = "";
    }
    navigate(`/page${i}`, {
      state: { id: Object.entries(objSurvey).slice(i, objSurvey.length) },
    });
  };
  return (
    <div>
      Page1
      <p>Hello page1 How are you?</p>
      <button onClick={nextPage}>next page</button>
    </div>
  );
};

export default Page1;
