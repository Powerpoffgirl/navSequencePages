import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [pageSeq, setPageSeq] = useState([]);
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();
  const navigate = useNavigate();
  const [objSurvey, setObjSurvey] = useState({
    option1A_option1B: "",
    option2A_option2B: "",
    option3A_option3B: "",
    option4A_option4B: "",
  });

  const handleOption1Change = (event) => {
    setObjSurvey((prevstate) => ({
      ...prevstate,
      option1A_option1B: event.target.value,
    }));
  };

  const handleOption2Change = (event) => {
    setObjSurvey((prevstate) => ({
      ...prevstate,
      option2A_option2B: event.target.value,
    }));
  };

  const handleOption3Change = (event) => {
    setObjSurvey((prevstate) => ({
      ...prevstate,
      option3A_option3B: event.target.value,
    }));
  };

  const handleOption4Change = (event) => {
    setObjSurvey((prevstate) => ({
      ...prevstate,
      option4A_option4B: event.target.value,
    }));
  };

  console.log(option1);
  console.log(option2);
  console.log(option3);
  console.log(option4);

  console.log(objSurvey);

  console.log(objSurvey.option1A_option1B);
  const id = 201;
  const submitOptions = () => {
    const selectedOptionsString = JSON.stringify(objSurvey);
    localStorage.setItem("selectedOptions", selectedOptionsString);

    let i = "";
    if (objSurvey.option1A_option1B != "") {
      i = objSurvey.option1A_option1B;
    } else if (objSurvey.option2A_option2B != "") {
      i = objSurvey.option2A_option2B;
    } else if (objSurvey.option3A_option3B != "") {
      i = objSurvey.option3A_option3B;
    } else if (objSurvey.option4A_option4B != "") {
      i = objSurvey.option4A_option4B;
    } else {
      i = "";
    }
    navigate(`/page${i}`, {
      state: { id: Object.entries(objSurvey).slice(i, objSurvey.length)},
    });
  };

  return (
    <div>
      HomePage
      <div>
        <input
          type="radio"
          name="group1"
          // checked={option1}
          value="1"
          onChange={(e) => setOption1(e.target.value)}
          onClick={handleOption1Change}
        />
        <label>Option 1A</label>
        <input
          type="radio"
          name="group1"
          value="2"
          // checked={option1B}
          onChange={(e) => setOption1(e.target.value)}
          onClick={handleOption1Change}
        />
        <label>Option 1B</label>
      </div>
      <div>
        <input
          type="radio"
          name="group2"
          // checked={option2}
          value="3"
          onChange={(e) => setOption2(e.target.value)}
          onClick={handleOption2Change}
        />
        <label>Option 2A</label>
        <input
          type="radio"
          name="group2"
          value="4"
          // checked={option3}
          onChange={(e) => setOption2(e.target.value)}
          onClick={handleOption2Change}
        />
        <label>Option 2B</label>
      </div>
      <div>
        <input
          type="radio"
          name="group3"
          value="5"
          // checked={option3}
          onChange={(e) => setOption3(e.target.value)}
          onClick={handleOption3Change}
        />
        <label>Option 3A</label>
        <input
          type="radio"
          name="group3"
          value="6"
          // checked={!option3}
          onChange={(e) => setOption3(e.target.value)}
          onClick={handleOption3Change}
        />
        <label>Option 3B</label>
      </div>
      <div>
        <input
          type="radio"
          name="group4"
          value="7"
          // checked={option4}
          onChange={(e) => setOption4(e.target.value)}
          onClick={handleOption4Change}
        />
        <label>Option 4A</label>
        <input
          type="radio"
          name="group4"
          value="8"
          // checked={!option4}
          onChange={(e) => setOption4(e.target.value)}
          onClick={handleOption4Change}
        />
        <label>Option 4B</label>
      </div>
      <button onClick={submitOptions}>Submit</button>
      {/* <button onClick={}>Click</button> */}
    </div>
  );
};

export default HomePage;
