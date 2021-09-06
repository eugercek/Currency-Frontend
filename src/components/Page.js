import Title from "./Title";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const Page = (props) => {
  const title = props.title;
  const children = props.children;
  return (
    <>
      <Grid container direction="column" style={{ minHeight: "30vh" }}>
        <Title title={title} />
      </Grid>
      {children}
    </>
  );
};

export default Page;

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
