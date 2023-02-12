import { Outlet } from "react-router-dom";

export interface SharedProductLayoutInterface {}

const SharedProductLayout : React.FC<SharedProductLayoutInterface> = () => {
	return (
		<>
		  <h2>products</h2>
		  <Outlet />
		</>
	  );
	};	

export default SharedProductLayout;
