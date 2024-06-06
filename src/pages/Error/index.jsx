import { useRouteError } from "react-router-dom";
import styles from "./styles.module.css";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Eita, foi mal. Algo de errado não está certo.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}