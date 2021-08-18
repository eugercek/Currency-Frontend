import { Alert } from "@material-ui/lab";
import Title from "../components/Title";

const ErrorRoute = () => {
  return (
    <div className="ErrorRotue">
      <Alert severity="error">Could not fetch data</Alert>
      <Title title="Error !" />
    </div>
  );
};

export default ErrorRoute;
