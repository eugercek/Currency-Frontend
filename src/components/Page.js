import Title from "./Title";
import PropTypes from "prop-types";

const Page = (props) => {
  console.log(props.title);
  const title = props.title;
  const children = props.children;
  return (
    <div>
      <Title title={title} />
      {children}
    </div>
  );
};

export default Page;

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
