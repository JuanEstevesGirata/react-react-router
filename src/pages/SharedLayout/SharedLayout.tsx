import { Outlet } from "react-router-dom";
import { StyledNavbar } from "../../components";

export interface SharedLayoutInterface {}

const SharedLayout : React.FC<SharedLayoutInterface> = () => {
	return (
		<>
		  <StyledNavbar />
		  <Outlet />
		</>
	  );
	};

export default SharedLayout;
