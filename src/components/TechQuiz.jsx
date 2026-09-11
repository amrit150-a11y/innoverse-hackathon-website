import { useCallback, useEffect, useRef, useState } from "react";
import quizQuestions from "../data/quizQuestions";

const AUTHORIZED_EMAIL = "amritsingh86036@gmail.com";
const ACCESS_CODE = "INNO2026";
const QUESTION_TIME = 30;
const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL;

function TechQuiz() {
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);

  const [participantName, setParticipantName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [codeError, setCodeError] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [timeTaken, setTimeTaken] = useState("0:00");
  const [isSaving, setIsSaving] = useState(false);

  const quizStartTime = useRef(null);

  // --------------------------------
  // EMAIL VERIFICATION
  // --------------------------------

  const handleEmailVerification = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setCodeError("Please enter your email.");
      return;
    }

    if (
      email.trim().toLowerCase() !==
      AUTHORIZED_EMAIL.toLowerCase()
    ) {
      setCodeError(
        "This email is not authorized to access the Tech Quiz."
      );
      return;
    }

    setCodeError("");
    setEmailVerified(true);
  };

  // --------------------------------
  // ACCESS CODE + PARTICIPANT DETAILS
  // --------------------------------

  const handleAccess = (e) => {
    e.preventDefault();

    if (!participantName.trim()) {
      setCodeError("Please enter your name.");
      return;
    }

    if (!department) {
      setCodeError("Please select your department.");
      return;
    }

    if (!year) {
      setCodeError("Please select your year.");
      return;
    }

    if (accessCode.trim() !== ACCESS_CODE) {
      setCodeError("Invalid access code.");
      return;
    }

    setCodeError("");
    setIsUnlocked(true);
    quizStartTime.current = Date.now();
  };

  // --------------------------------
  // SAVE QUIZ RESULT
  // --------------------------------

  const saveQuizResult = async (
    finalAnswers,
    finalScore,
    finalPercentage,
    finalTime
  ) => {
    setIsSaving(true);

    const answerSummary = quizQuestions
      .map(
        (question, index) =>
          `Q${question.id}: ${
            finalAnswers[index] || "Not Answered"
          }`
      )
      .join(" | ");

    const correctAnswerSummary = quizQuestions
      .map(
        (question) =>
          `Q${question.id}: ${question.answer}`
      )
      .join(" | ");

    const payload = {
      action: "quizResult",
      participantName: participantName,
      department: department,
      year: year,
      answers: answerSummary,
      correctAnswers: correctAnswerSummary,
      score: finalScore,
      totalQuestions: quizQuestions.length,
      percentage: `${finalPercentage}%`,
      timeTaken: finalTime,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error(
        "Quiz result saving error:",
        error
      );
    } finally {
      setIsSaving(false);
    }
  };

  // --------------------------------
  // FINISH QUIZ
  // --------------------------------

  const finishQuiz = useCallback(
    (finalAnswers) => {
      let finalScore = 0;

      quizQuestions.forEach((question, index) => {
        if (
          finalAnswers[index] === question.answer
        ) {
          finalScore++;
        }
      });

      const finalPercentage = Math.round(
        (finalScore / quizQuestions.length) * 100
      );

      const elapsedSeconds = Math.floor(
        (Date.now() - quizStartTime.current) / 1000
      );

      const minutes = Math.floor(
        elapsedSeconds / 60
      );

      const seconds = elapsedSeconds % 60;

      const formattedTime = `${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`;

      setAnswers(finalAnswers);
      setScore(finalScore);
      setPercentage(finalPercentage);
      setTimeTaken(formattedTime);
      setQuizFinished(true);

      saveQuizResult(
        finalAnswers,
        finalScore,
        finalPercentage,
        formattedTime
      );
    },
    [participantName, department, year]
  );

  // --------------------------------
  // NEXT QUESTION
  // --------------------------------

  const moveToNextQuestion = useCallback(() => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] =
      selectedAnswer || "Not Answered";

    if (
      currentQuestion ===
      quizQuestions.length - 1
    ) {
      finishQuiz(updatedAnswers);
      return;
    }

    setAnswers(updatedAnswers);
    setCurrentQuestion(
      (previous) => previous + 1
    );
    setSelectedAnswer("");
    setTimeLeft(QUESTION_TIME);
  }, [
    answers,
    currentQuestion,
    selectedAnswer,
    finishQuiz,
  ]);

  // --------------------------------
  // TIMER
  // --------------------------------

  useEffect(() => {
    if (!isUnlocked || quizFinished) return;

    if (timeLeft === 0) {
      moveToNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(
        (previous) => previous - 1
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    timeLeft,
    isUnlocked,
    quizFinished,
    moveToNextQuestion,
  ]);

  // --------------------------------
  // SELECT ANSWER
  // --------------------------------

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // --------------------------------
  // EMAIL VERIFICATION SCREEN
  // --------------------------------

  if (!emailVerified) {
    return (
      <section
        id="quiz"
        className="section-padding quiz-section"
      >
        <div className="container">
          <div className="section-title">
            <span>TECH QUIZ</span>
            <h2>Test Your Tech Knowledge</h2>
          </div>

          <div className="quiz-access-card">
            <div className="quiz-lock-icon">
              <i className="bi bi-shield-lock-fill"></i>
            </div>

            <h3>Verify Your Email</h3>

            <p>
              Enter the authorized email address
              to continue to the Tech Quiz.
            </p>

            <form
              onSubmit={handleEmailVerification}
            >
              <input
                type="email"
                className="form-control quiz-code-input"
                placeholder="Enter authorized email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setCodeError("");
                }}
                required
              />

              {codeError && (
                <p className="quiz-error">
                  <i className="bi bi-exclamation-circle"></i>{" "}
                  {codeError}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary quiz-btn"
              >
                <i className="bi bi-shield-check"></i>{" "}
                Verify Email
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------
  // PARTICIPANT DETAILS + ACCESS CODE
  // --------------------------------

  if (!isUnlocked) {
    return (
      <section
        id="quiz"
        className="section-padding quiz-section"
      >
        <div className="container">
          <div className="section-title">
            <span>TECH QUIZ</span>
            <h2>Test Your Tech Knowledge</h2>
          </div>

          <div className="quiz-access-card">
            <div className="quiz-lock-icon">
              <i className="bi bi-unlock-fill"></i>
            </div>

            <h3>✅ Email Verified</h3>

            <p>
              Complete your participant details
              and enter the quiz access code.
            </p>

            <form onSubmit={handleAccess}>
              <input
                type="text"
                className="form-control quiz-code-input"
                placeholder="Participant Name"
                value={participantName}
                onChange={(e) => {
                  setParticipantName(
                    e.target.value
                  );
                  setCodeError("");
                }}
                required
              />

              <select
                className="form-control quiz-code-input"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setCodeError("");
                }}
                required
              >
                <option value="">
                  Select Department
                </option>

                <option value="CSE">
                  Computer Science & Engineering
                </option>

                <option value="ECE">
                  Electronics & Communication Engineering
                </option>

                <option value="ME">
                  Mechanical Engineering
                </option>

                <option value="CE">
                  Civil Engineering
                </option>

                <option value="EE">
                  Electrical Engineering
                </option>

                <option value="AI">
                  AI Engineering
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

              <select
                className="form-control quiz-code-input"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setCodeError("");
                }}
                required
              >
                <option value="">
                  Select Year
                </option>

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="4th Year">
                  4th Year
                </option>
              </select>

              <input
                type="password"
                className="form-control quiz-code-input"
                placeholder="Quiz Access Code"
                value={accessCode}
                onChange={(e) => {
                  setAccessCode(
                    e.target.value
                  );
                  setCodeError("");
                }}
                required
              />

              {codeError && (
                <p className="quiz-error">
                  <i className="bi bi-exclamation-circle"></i>{" "}
                  {codeError}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary quiz-btn"
              >
                <i className="bi bi-play-fill"></i>{" "}
                Start Quiz
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------
  // QUIZ RESULT
  // --------------------------------

  if (quizFinished) {
    return (
      <section
        id="quiz"
        className="section-padding quiz-section"
      >
        <div className="container">
          <div className="quiz-result-card">
            <div className="result-icon">
              <i className="bi bi-trophy-fill"></i>
            </div>

            <span>QUIZ COMPLETED</span>

            <h2>{participantName}</h2>

            <p>
              {department} • {year}
            </p>

            <div className="score-number">
              {score}/{quizQuestions.length}
            </div>

            <p className="score-percentage">
              {percentage}%
            </p>

            <p>
              Time Taken:{" "}
              <strong>{timeTaken}</strong>
            </p>

            {isSaving ? (
              <p>
                <i className="bi bi-cloud-arrow-up"></i>{" "}
                Saving result...
              </p>
            ) : (
              <p>
                <i className="bi bi-check-circle"></i>{" "}
                Result submitted successfully.
              </p>
            )}

            <p className="quiz-finished-message">
              Your quiz attempt is complete. You
              cannot attempt the quiz again.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------
  // QUIZ
  // --------------------------------

  const question =
    quizQuestions[currentQuestion];

  return (
    <section
      id="quiz"
      className="section-padding quiz-section"
    >
      <div className="container">
        <div className="section-title">
          <span>TECH QUIZ</span>
          <h2>Challenge Yourself</h2>
        </div>

        <div className="quiz-card">
          <div className="quiz-top">
            <span>
              Question {currentQuestion + 1} /{" "}
              {quizQuestions.length}
            </span>

            <span className="quiz-timer">
              <i className="bi bi-stopwatch"></i>{" "}
              {timeLeft}s
            </span>
          </div>

          <div className="quiz-progress">
            <div
              className="quiz-progress-bar"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    quizQuestions.length) *
                  100
                }%`,
              }}
            ></div>
          </div>

          <h3 className="quiz-question">
            {question.question}
          </h3>

          <div className="quiz-options">
            {question.options.map(
              (option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    handleAnswer(option)
                  }
                  className={`quiz-option ${
                    selectedAnswer === option
                      ? "selected"
                      : ""
                  }`}
                >
                  <span className="option-number">
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  {option}
                </button>
              )
            )}
          </div>

          {currentQuestion ===
          quizQuestions.length - 1 ? (
            <button
              type="button"
              onClick={moveToNextQuestion}
              className="btn btn-primary quiz-next-btn"
            >
              Submit Quiz
              <i className="bi bi-check-lg"></i>
            </button>
          ) : (
            <button
              type="button"
              onClick={moveToNextQuestion}
              className="btn btn-primary quiz-next-btn"
            >
              Next Question
              <i className="bi bi-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechQuiz;