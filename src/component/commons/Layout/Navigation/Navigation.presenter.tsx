import * as S from "./Navigation.style"
import facepaint from 'facepaint'
import { Fragment } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';





const NavMenus = [
  { name: "맛보기", page: "" },
  { name: "정책 및 서비스", page: "" },
  { name: "공지사항", page: "" },
  { name: "고객센터", page: "" },
];
export default function NavgationPresenter ({items}) {
 


  return(
    <S.Wrapper>
        {NavMenus.map((el)=>(
          <Row>
          <S.Navitems key={el.page} className="test">{el.name}</S.Navitems>
          </Row>
        ))}

    
    </S.Wrapper>
  )
}