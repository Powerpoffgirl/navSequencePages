import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Page7 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const objSurvey1 = location.state;

  const prevPage = () => {
    const objSurvey = JSON.parse(localStorage.getItem("selectedOptions"));
    let i = "";
    if (objSurvey.option3A_option3B != "") {
      i = objSurvey.option3A_option3B;
    } else if (objSurvey.option2A_option2B != "") {
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
      Page7
      <button onClick={prevPage}>prev page</button>
    </div>
  );
};

export default Page7;
