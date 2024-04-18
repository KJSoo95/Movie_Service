import PropTypes from "prop-types";

const Button = ({ text }) => {
  Button.propTypes = {
    text: PropTypes.string,
  };

  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default Button;
