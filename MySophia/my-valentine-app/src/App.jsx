import { useState } from 'react';
import './ValentineMessage.css';

export default function ValentineMessage() {
  const [step, setStep] = useState(0); // Start with step 0
  const [showError, setShowError] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0); // Track how many times "No" is pressed

  const handleFirstYes = () => {
    setStep(3); // Move to the "Are you free this Friday?" step
    setShowError(false);
  };

  const handleSecondAnswer = (answer) => {
    if (answer === 'yes') {
      setAccepted(true);
      setShowError(false);
    } else {
      setNoCount((prevCount) => prevCount + 1); // Increment the "No" count
      setShowError(true);
    }
  };

  // Generate random hearts
  const hearts = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className="heart"
      style={{
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 5}s`,
        fontSize: `${Math.random() * 20 + 10}px`, // Random size between 10px and 30px
      }}
    >
      💖
    </div>
  ));

  return (
    <div className="container">
      {/* Falling Hearts */}
      <div className="background">{hearts}</div>

      {/* Step 0: "Open me" button */}
      {step === 0 && (
        <div className="card">
          <button
            className="open-me-button"
            onClick={() => setStep(1)} // Move to the next step
          >
            Open me
          </button>
          <h1>And yes its this is originally made by me Tovi and i made this specially for you💖</h1>
        </div>
      )}

      {/* Step 1: "Can I ask you something?" */}
      {step === 1 && (
        <div className="card">
          <h1>Can I ask you something? 🥺</h1>
          <button
            className="okay-button"
            onClick={() => setStep(2)} // Move to the next step
          >
            Okay?
          </button>
        </div>
      )}

      {/* Step 2: "Are you free this Friday?" */}
      {step === 2 && (
        <div className="card">
          <h1>Are you free this Friday? 🌸</h1>
          <button
            className="yes-button"
            onClick={handleFirstYes}
          >
            Yes, I am!
          </button>
        </div>
      )}

      {/* Step 3: "Will you be my Valentine?" */}
      {step === 3 && !accepted && (
        <div className={`card ${showError ? 'shake' : ''}`}>
          <h1>Will you be my Valentine? 💌</h1>
          <div className="button-group">
            <button
              className="yes-button"
              onClick={() => handleSecondAnswer('yes')}
            >
              Yes! 💖
            </button>
            <button
              className="no-button"
              onClick={() => handleSecondAnswer('no')}
            >
              No
            </button>
          </div>
          {showError && (
            <p className="error-message">
              {noCount === 2
                ? "Really? :< You pressed no 2x? :<"
                : "Oops! You can't press that! 😢"}
            </p>
          )}
        </div>
      )}

      {/* Step 4: Celebration */}
      {accepted && (
        <div className="card celebration">
          <h1>Yayyy really? You've made me the happiest! 🥰</h1>
          <div className="hearts">
            💖💖💖
          </div>
        </div>
      )}
    </div>
  );
}