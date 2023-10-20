const Input = ({ type, name, inputMode, placeholder, value, setValue }) => {
  return (
    <div className="block w-full h-fit p-4 bg-white border-2 focus-within:border-primary rounded-lg">
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e)}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default Input;
