import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

const TenantDashBoard = () => {
  const { userId } = useParams();

  const { auth } = useAuth();


  if(!auth){
   return <Navigate to={"/"}></Navigate>
  }

  return (
    <div>
      TenantDashBoard
      <p>Tenant ID: {userId}</p>
    </div>
  );
 

 
};

export default TenantDashBoard;
