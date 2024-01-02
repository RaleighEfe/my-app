const Buttons = ({ children, onClick, disabled }) => {
  return (
    <div>
      <button
        className="bg-primary px-3 py-2 rounded-lg text-white text-base hover:bg-orange-600"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
