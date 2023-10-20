const Textarea = ({ name, placeholder, value, setValue }) => {
  return (
    <textarea
      name={name}
      id={name}
      onChange={(e)=>setValue(e)}
      placeholder={placeholder}
      value={value}
      rows="4"
      className="block w-full p-4 bg-white/70 border-2 focus:border-primary appearance-none rounded-lg"
    ></textarea>
  );
};

export default Textarea;
