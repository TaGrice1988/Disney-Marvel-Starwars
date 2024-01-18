import { useState } from "react";
import { useNavigate } from "react-router";
import "../Starwars.css";
import Navbar from "./Navbar";
function Questionnaire() {
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
  });
  const history = useNavigate();
  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };
  const determineAlignment = () => {
    const lightSideScore = calculateLightSideScore();
    const darkSideScore = calculateDarkSideScore();
    if (lightSideScore > darkSideScore) {
      history("../pages/LightSidePage");
    } else if (darkSideScore > lightSideScore) {
      history("../pages/DarkSidePage");
    } else {
      history("/");
    }
  };
  const calculateLightSideScore = () => {
    let lightSideScore = 0;
    // Question 1
    if (
      answers.answer1.toLowerCase() === "light" ||
      answers.answer1.toLowerCase() === "the light side"
    ) {
      lightSideScore++;
    }
    // Question 2
    if (answers.answer2.toLowerCase() === "peace") {
      lightSideScore++;
    }
    // Question 3
    if (answers.answer3.toLowerCase() === "harmony") {
      lightSideScore++;
    }
    // Question 4
    if (answers.answer4.toLowerCase() === "guide them to the light") {
      lightSideScore++;
    }
    // Question 5
    if (answers.answer5.toLowerCase() === "knock on the door") {
      lightSideScore++;
    }
    // Question 6
    if (
      answers.answer6.toLowerCase() === "a" ||
      answers.answer6.toLowerCase() === "b"
    ) {
      lightSideScore++;
    }
    // Question 7
    if (
      answers.answer7.toLowerCase() === "a" ||
      answers.answer7.toLowerCase() === "d"
    ) {
      lightSideScore++;
    }
    return lightSideScore;
  };
  const calculateDarkSideScore = () => {
    let darkSideScore = 0;
    // Question 1
    if (
      answers.answer1.toLowerCase() === "dark" ||
      answers.answer1.toLowerCase() === "the dark side"
    ) {
      darkSideScore++;
    }
    // Question 2
    if (answers.answer2.toLowerCase() === "power") {
      darkSideScore++;
    }
    // Question 3
    if (answers.answer3.toLowerCase() === "control") {
      darkSideScore++;
    }
    // Question 4
    if (answers.answer4.toLowerCase() === "eliminate them") {
      darkSideScore++;
    }
    // Question 5
    if (answers.answer5.toLowerCase() === "smash down the door") {
      darkSideScore++;
    }
    // Question 6
    if (
      answers.answer6.toLowerCase() === "c" ||
      answers.answer6.toLowerCase() === "d"
    ) {
      darkSideScore++;
    }
    // Question 7
    if (
      answers.answer7.toLowerCase() === "b" ||
      answers.answer7.toLowerCase() === "c"
    ) {
      darkSideScore++;
    }
    return darkSideScore;
  };
  return (
    <body className="body">
      <Navbar></Navbar>
      <div style={{ padding: "2%" }}>
        <h1>
          <span style={{ color: "#0088D8", textShadow: "2px 2px 50px blue" }}>
            Light Side
          </span>
          <span style={{ color: "#FFE81F" }}> vs. </span>
          <span style={{ color: "#9D1C0A", textShadow: "2px 2px 50px red" }}>
            Dark Side
          </span>
        </h1>
        <h2 style={{ color: "#ddd" }}>
          Answer The Questions The Same Way As They Are Highlighted To Determine
          Alignment!
        </h2>
        <div className="question">
          <label>
            Question 1: As a force wielder, do you find yourself drawn more
            toward the{" "}
            <span
              style={{
                backgroundColor: "#0088D8",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              light
            </span>{" "}
            or the{" "}
            <span
              style={{
                backgroundColor: "#9D1C0A",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              dark
            </span>{" "}
            side?
          </label>
          <input
            type="text"
            name="answer1"
            value={answers.answer1}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="question">
          <label>
            Question 2: What do you seek,
            <span
              style={{
                backgroundColor: "#0088D8",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              peace
            </span>{" "}
            or{" "}
            <span
              style={{
                backgroundColor: "#9D1C0A",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              power
            </span>{" "}
            ?
          </label>
          <input
            type="text"
            name="answer2"
            value={answers.answer2}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="question">
          <label>
            Question 3: Is your motivation to find{" "}
            <span
              style={{
                backgroundColor: "#0088D8",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              harmony
            </span>
            with the force and all living things or do you seek the means to{" "}
            <span
              style={{
                backgroundColor: "#9D1C0A",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              control
            </span>{" "}
            all that surrounds?
          </label>
          <input
            type="text"
            name="answer3"
            value={answers.answer3}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="question">
          <label>
            Question 4: You are in combat with a dark jedi who has allied
            themselves with the sith, when suddenly there is a pause in the
            combat. Would you take that moment to try and understand them and
            attempt to {""}
            <span
              style={{
                backgroundColor: "#0088D8",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              guide them to the light
            </span>{" "}
            or would you use this moment of pause to your advantage, find the
            weakness in his technique and {""}
            <span
              style={{
                backgroundColor: "#9D1C0A",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              eliminate them
            </span>
            ?
          </label>
          <input
            type="text"
            name="answer4"
            value={answers.answer4}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="question">
          <label>
            Question 5: There is a locked door and you goal lies on the other
            side, Do you attempt to{" "}
            <span
              style={{
                backgroundColor: "#9D1C0A",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              smash down the door
            </span>{" "}
            thus removing the obstacle or do you {""}
            <span
              style={{
                backgroundColor: "#0088D8",
                fontSize: 19,
                color: "#FFC125",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              knock on the door
            </span>{" "}
            and gain admittance?
          </label>
          <input
            type="text"
            name="answer5"
            value={answers.answer5}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="question">
          <label>
            Question 6: A woman and her small child are beset by a desperate
            looking group of thugs. They are menacing her with weapons and she
            screams to you for help. Do you{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              A
            </span>{" "}
            attempt to help her and attack the thugs,{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              B
            </span>{" "}
            stop the thugs and find out why they are attacking her,{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              C
            </span>{" "}
            let the thugs finish their work and then slaughter them for the
            riches they have just forcefully acquired, or{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              D
            </span>{" "}
            help the mother and small child out but at a price?
          </label>
          <input
            type="text"
            name="answer6"
            value={answers.answer6}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="question">
          <label>
            Question 7: What is your primary emotional state of being{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              A
            </span>{" "}
            Calm,{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              B
            </span>{" "}
            {""}
            Angry,{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              C
            </span>{" "}
            Fearful, or{" "}
            <span
              style={{
                backgroundColor: "#FFE81F",
                fontSize: 19,
                color: "#000",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              D
            </span>{" "}
            optimistic?
          </label>
          <input
            type="text"
            name="answer7"
            value={answers.answer7}
            onChange={handleAnswerChange}
          />
        </div>
        <button onClick={determineAlignment}>Determine Alignment</button>
      </div>
    </body>
  );
}
export default Questionnaire;
