import Title from "./Title";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const Page = (props) => {
  console.log(props.title);
  const title = props.title;
  const children = props.children;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      style={{ minHeight: "60vh" }}
    >
      <Title title={title} />
      {children}
    </Grid>
  );
};

export default Page;

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
