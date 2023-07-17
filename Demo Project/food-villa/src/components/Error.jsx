import { useRouteError } from "react-router-dom";

const Error = () => {
  const routeError = useRouteError();
  return (
    <>
      <h2>Opps!</h2>
      <div>
        {routeError?.status} - {routeError?.statusText}
      </div>
    </>
  );
};

export default Error;
