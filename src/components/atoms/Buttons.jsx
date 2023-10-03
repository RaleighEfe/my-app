const Buttons = ({ children, onclick, disabled }) => {
  return (
    <div>
      <button
        className="bg-primary px-3 py-2 rounded-lg text-white text-base"
        onclick={onclick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
