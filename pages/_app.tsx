import LayOutt from "../src/component/commons/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/globas";





export default function App({ Component, pageProps }) {

  return (
    <>
    <Global styles={globalStyles
    }/>
<LayOutt>
<Component {...pageProps} />
</LayOutt>
</>
  )
   

}
