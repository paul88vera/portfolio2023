import { useRouteError } from "react-router";
import Aside from "../component/Aside";

export default function Error({ message, stack }) {
  const error = useRouteError();
  return (
    <div>
      <Aside />
      {import.meta.env.MODE !== "production" && (
        <>
          {error.message}
          {error.stack}
        </>
      )}
    </div>
  );
}
