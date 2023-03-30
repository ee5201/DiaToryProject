import BannerContainer from "./Banner/Banner.container";
import Banner from "./Banner/Banner.container";
import HeaderContainer from "./Header/Header.container";
import NavgationContainer from "./Navigation/Navigation.container";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from "./Main/Main.container";


interface ILaoutTT {
  children: JSX.Element;
}
export default function LayOutt(props:ILaoutTT) {
  return(
    <>
    <HeaderContainer/>
    <NavgationContainer/>
    <BannerContainer/>
    <MainContainer/>
    <div>{props.children}</div>
    </>
  )
}