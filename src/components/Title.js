import Typography from "@material-ui/core/Typography";

const Title = ({ name }) => {
  return (
    <Typography variant="h2" align="center" gutterBottom>
      {name}
    </Typography>
  );
};

export default Title;
