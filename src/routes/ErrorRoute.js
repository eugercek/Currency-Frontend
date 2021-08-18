import { Alert } from "@material-ui/lab";

const ErrorRoute = () => {
  return (
    <div className="ErrorRotue">
      <Alert severity="error">Could not fetch data</Alert>
    </div>
  );
};

export default ErrorRoute;
