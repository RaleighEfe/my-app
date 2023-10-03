const Input = ({ type, inputMode, placeholder, onChange }) => {
  return (
    <div className="block w-full h-fit p-4 bg-white border-2 focus-within:border-primary rounded-lg">
      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default Input;
