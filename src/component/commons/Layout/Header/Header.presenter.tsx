import * as S from "./Header.styled"

const Top = [
  {
    name:"공지사항 |", page:""
  },
  {
    name:"고객센터 |", page:""
  },
  {
    name:"로그인 |", page:""
  },
  {
    name:"회원가입", page:""
  }
]

export default function HeaderPresenter () {
  return(
  <S.Wrapper>
    <S.MainWrapper>
      <S.LogoBox>
      <S.MainLogo>DiaTory</S.MainLogo>
      <S.LogoContents>Diary&Story</S.LogoContents>
      </S.LogoBox>
      

      <S.ButtonBox>
        {Top.map((el,index)=>(
          <S.Buttonitem key={index}>{el.name}</S.Buttonitem>
        ))}
        {/* <S.Buttonitem>로그인</S.Buttonitem>
        <S.Buttonitem>회원가입</S.Buttonitem> */}
      </S.ButtonBox>
    </S.MainWrapper>
  
  </S.Wrapper>
  )
}