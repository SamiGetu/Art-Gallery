/* eslint-disable react/prop-types */

const Button = ({ text, onClick, style, icons, txtstyle, iconsStyle }) => {
  return (
    <div className="relative text-black underline">
      <button onClick={onClick} className={style}>
        <span className={iconsStyle}>{icons}</span>
        <span className={txtstyle}>{text}</span>
      </button>
    </div>
  );
};

export default Button;
