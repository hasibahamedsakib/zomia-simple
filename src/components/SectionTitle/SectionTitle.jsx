import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <div className="text-[#5f4ff8] bg-[#dcdbe19c] rounded-md px-4 py-2 uppercase inline-block font-bold">
      {text}
    </div>
  );
};

// handle propType validation...
SectionTitle.propTypes = {
  text: PropTypes.node.isRequired,
};
export default SectionTitle;
