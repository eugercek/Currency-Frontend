import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <Typography variant="h2" align="center" style={{ margin: 50 }}>
      {title}
    </Typography>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
