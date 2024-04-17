import { useParams } from "react-router-dom";

const TenantDashBoard = () => {
  const { userId } = useParams();
  console.log(userId);

  return (
    <div>
      TenantDashBoard
      <p>Tenant ID: {userId}</p>
    </div>
  );
};

export default TenantDashBoard;
