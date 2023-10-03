const Textarea = ({ placeholder, onchange }) => {
  return (
    <textarea
      
      onChange={onchange}
      placeholder={placeholder}
      rows="4"
      className="block w-full p-4 bg-white/70 border-2 focus:border-primary appearance-none rounded-lg"
    ></textarea>
  );
};

export default Textarea;
