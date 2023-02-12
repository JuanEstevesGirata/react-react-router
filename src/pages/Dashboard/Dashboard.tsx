export interface DashboardInterface {
	user: any;
}

const Dashboard : React.FC<DashboardInterface> = ({ user }) => {
	return (
		<section className='section'>
		  <h4>Hello, {user?.name}</h4>
		</section>
	  );
	};

export default Dashboard;
	