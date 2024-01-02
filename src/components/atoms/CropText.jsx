import React from "react";
import classNames from "classnames"; // Assuming correct import path

const CropText = ({ text }) => {
  const croppedText = text.length > 130 ? `${text.slice(0, 130)}...` : text;

  return (
    <div
      className={classNames(
        "overflow-hidden",
        "whitespace-pre-wrap",
        "text-overflow: ellipsis;",
        "width: 100%;"
      )}
      title={text} // Provide tooltip for accessibility
    >
      {croppedText}
    </div>
  );
};

export default CropText;
