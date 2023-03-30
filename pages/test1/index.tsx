import { useState } from "react"

export default function Loveyou () {
  const [sit,setsit] = useState("윤정아 사랑해")

  const onclick = () =>{
    setsit("윤정아 사랑해")
  }
  return (
    <>
    <div>{sit}</div>
    <button onClick={onclick}>클릭해주세요 </button>
    </>
  )
}