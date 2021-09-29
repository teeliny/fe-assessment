import React, { useState, useEffect } from "react";

interface IOptions {
  header: string;
  value: string;
}

function QuestionOptions({ inputOptions, updateState, currentQuestion }: { inputOptions: IOptions[]; currentQuestion: string; updateState: (key: string, value: string) => void}) {
  const defaultBackground = ['single__option', 'single__option', 'single__option'];
  const [backgroundShade, setBackgroundShade] = useState<string[]>(defaultBackground);
  const [baseIndex, setBaseIndex] = useState<number | null>(null);

  const handleSelectOption = (index: number, currentQuestion: string, answer: string) => {
    setBaseIndex(index);
    updateState(currentQuestion, answer)
  }

  useEffect(() => {
    if (baseIndex !== null) {
      const newBackground = ['single__option', 'single__option', 'single__option'];
      newBackground[baseIndex] = 'selected__option';
      setBackgroundShade(newBackground);
    }
  }, [baseIndex]);
  
  return (
    <div className="question__options">
      {inputOptions.map((option, index) => (
        <div key={index} className={`${backgroundShade[index]}`} onClick={() => handleSelectOption(index, currentQuestion, option.header)}>
          <h4 className="option__header">
            {option.header}
          </h4>
          <p className="option__value">
            {option.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default QuestionOptions;