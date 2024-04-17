import {  useNavigate } from "react-router-dom";

const Auth = () => {
    const nav = useNavigate();
  return (
    <div>
        <h1>Auth</h1>
        <button className="btn" onClick={()=>nav("/owner/1")}>Owner</button>
        <button className="btn" onClick={()=>nav("/tenant/1")}>Teanant</button>
    </div>
  )
}

export default Auth