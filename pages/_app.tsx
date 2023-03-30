import LayOutt from "../src/component/commons/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App({ Component, pageProps }) {

  return (
    <LayOutt>
    <Component {...pageProps} />
    </LayOutt>)
}
