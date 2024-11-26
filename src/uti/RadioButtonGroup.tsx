import { useState } from 'react';
import { UseFormRegister, type FieldValues } from 'react-hook-form';
import { MachineItem } from '@/lib/typeMachine';

interface Choice {
  value: string;
  text: string;
  colorClass: string;
}

interface AdditionalFields {
  [key: string]: string | null;
}

interface FormData extends FieldValues {
  items: MachineItem[];
  additionalFields?: AdditionalFields;
}

interface RadioButtonGroupProps {
  register: UseFormRegister<FormData>;
  questionName: string;
  handleRadioChange: (questionName: string, value: string) => void;
  choices: Choice[]; // Add this prop to pass choices from parent
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  register,
  questionName,
  handleRadioChange,
  choices, // Receiving choices as a prop
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    handleRadioChange(questionName, value);
  };

  return (
    <div className="flex space-x-1">
      {choices.map((choice, index) => (
        <label key={index} className="flex-1 cursor-pointer">
          <input
            type="radio"
            value={choice.value}
            {...register(questionName, {
              required: 'Vui lòng trả lời câu hỏi này',
            })}
            onChange={() => handleChange(choice.value)}
            className="sr-only"
          />
          <span
            className={`flex items-center justify-center px-4 py-2 text-white font-semibold transition-all duration-300 min-h-full ${
              choice.colorClass
            } ${index === 0 ? 'rounded-l-full' : ''} ${
              index === choices.length - 1 ? 'rounded-r-full' : ''
            } ${
              selectedValue === choice.value
                ? 'ring-4 ring-blue-500 ring-offset-2'
                : selectedValue
                ? 'opacity-25 transform translate-y-1 shadow-inner'
                : ''
            }`}
          >
            {choice.text}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
