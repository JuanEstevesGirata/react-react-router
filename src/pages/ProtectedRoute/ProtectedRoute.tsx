import { Navigate } from "react-router-dom";

export interface ProtectedRouteInterface {
	children: any,
	user: any
}

const ProtectedRoute : React.FC<ProtectedRouteInterface> = ({ children, user }) => {
	if (!user) {
		return <Navigate to='/' />;
	  }
	  return children;
	};

	
export default ProtectedRoute;
