import { Alert } from "@material-ui/lab";
import Title from "../components/Title";

const ErrorRoute = () => {
  return (
    <div className="ErrorRotue">
      <Title title="Error!" />
      <Alert severity="error">Could not fetch data</Alert>
    </div>
  );
};

export default ErrorRoute;
