import React, { useState, useEffect } from "react";

interface IOptions {
  header: string;
  value: string;
}

interface IQuestionOptions {
  inputOptions: IOptions[];
  currentQuestion: string;
  currentPrices: number[];
  updateState: (key: string, value: string) => void
}

function QuestionOptions({ inputOptions, updateState, currentQuestion, currentPrices }: IQuestionOptions) {
  const defaultBackground = ['single__option', 'single__option', 'single__option'];
  const [backgroundShade, setBackgroundShade] = useState<string[]>(defaultBackground);
  const [baseIndex, setBaseIndex] = useState<number | null>(null);
  const [realOptions, setRealOptions] = useState(inputOptions);

  // Function that handles change of option from the form
  const handleSelectOption = (index: number, currentQuestion: string, answer: string) => {
    setBaseIndex(index);
    updateState(currentQuestion, answer)
  }
  // Change the class of the selected option
  useEffect(() => {
    if (baseIndex !== null) {
      const newBackground = ['single__option', 'single__option', 'single__option'];
      newBackground[baseIndex] = 'selected__option';
      setBackgroundShade(newBackground);
    }
  }, [baseIndex]);

  // Check the current is on quantity and set the real option menu
  useEffect(() => {
    if (currentQuestion === 'How often should we deliver?') {
      const newOptions = [
        {
          "header": "Every week", 
          "value": `$${currentPrices[0].toFixed(2)} per shipment. Includes free first-class shipping.`,
        },
        {
          "header": "Every 2 weeks", 
          "value": `$${currentPrices[1].toFixed(2)} per shipment. Includes free priority shipping.`,
        },
        {
          "header": "Every month", 
          "value": `$${currentPrices[2].toFixed(2)} per shipment. Includes free priority shipping.`,
        },
      ];
      setRealOptions(newOptions);
    }
  }, [currentPrices, currentQuestion])
  
  return (
    <div className="question__options">
      {realOptions.map((option, index) => (
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