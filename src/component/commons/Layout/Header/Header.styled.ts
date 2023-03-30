import styled from "@emotion/styled"

export const Wrapper = styled.div`
height:50px;
display:flex;
background-color: white;
width: 100%;
`

export const MainWrapper = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding:1em;
`
export const LogoBox = styled.div`
display:flex;
flex-direction: column;
font-family:"myfont"

@font-face {
  font-family:"myfont";
  src: "https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap"
}
`
export const MainLogo = styled.span`
font-size:21.4px;
`

export const LogoContents = styled.span`
font-size:12.9px;
`

export const ButtonBox = styled.div`

`
export const Buttonitem = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  font-size:11px;
  padding:8px 3px;

  :hover {
    border-radius:3px;
    background-color:#dddd;}

`