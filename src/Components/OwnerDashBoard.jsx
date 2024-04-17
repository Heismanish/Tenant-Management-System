import { useParams } from "react-router-dom";


const DashBoard = () => {
  const {userId} = useParams();
  console.log(userId)
  return (
    <div>DashBoard
              <p>Tenant ID: {userId}</p>

    </div>
  )
}

export default DashBoard