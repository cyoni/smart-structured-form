interface IProps {
  question: Question;
  keyPrefix: any;
  name: string;
  register: any;
  handleRadioClick: any;
}

function Radio({
  question,
  keyPrefix,
  name,
  register,
  handleRadioClick,
}: IProps) {
  return (
    <div className="flex gap-4">
      {question.options.map((value, i) => {
        const key = `${keyPrefix}.${name}`;
        const id = `field-${value}`;
        return (
          <span key={i} className="flex gap-1 items-center">
            <input
              type="radio"
              id={id}
              value={value}
              {...register(key, { required: question.required })}
              onClick={() => handleRadioClick(value, name)}
            />
            <label htmlFor={id}>{value}</label>
          </span>
        );
      })}
    </div>
  );
}

export default Radio;
