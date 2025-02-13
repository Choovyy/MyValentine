import { useState } from 'react';
import './ValentineMessage.css';

export default function ValentineMessage() {
  const [step, setStep] = useState(1);
  const [showError, setShowError] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleFirstYes = () => {
    setStep(2);
    setShowError(false);
  };

  const handleSecondAnswer = (answer) => {
    if (answer === 'yes') {
      setAccepted(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="container">
      {step === 1 && (
        <div className="card">
          <h1>Are you free this Saturday? 🌸</h1>
          <button 
            className="yes-button"
            onClick={handleFirstYes}
          >
            Yes, I am!
          </button>
        </div>
      )}

      {step === 2 && !accepted && (
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
              Oops! You can't press that! 😢
            </p>
          )}
        </div>
      )}

      {accepted && (
        <div className="card celebration">
          <h1>Yay! You've made me the happiest! 💝</h1>
          <div className="hearts">
            💖💖💖
          </div>
        </div>
      )}
    </div>
  );
}