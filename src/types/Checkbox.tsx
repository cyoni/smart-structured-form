function Checkbox({ question, keyPrefix, name, register }) {
  return (
    <div className="flex gap-4">
      {question.options.map((value, i) => {
        const id = `${keyPrefix}.${name}.${value}`;
        return (
          <span key={i} className="flex gap-1">
            <input id={id} type="checkbox" {...register(id)} />
            <label htmlFor={id}>{value}</label>
          </span>
        );
      })}
    </div>
  );
}

export default Checkbox;
