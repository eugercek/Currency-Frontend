import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Title = ({ name }) => {
  return (
    <Typography variant="h2" align="center" gutterBottom>
      {name}
    </Typography>
  );
};

export default Title;

Title.propTypes = {
  name: PropTypes.string,
};
