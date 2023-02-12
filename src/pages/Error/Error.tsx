import { Link } from "react-router-dom";

export interface ErrorInterface {}

const Error : React.FC<ErrorInterface> = () => {
	return (
		<section className='section'>
		  <h2>404</h2>
		  <p>page not found</p>
		  <Link to='/'>back home</Link>
		</section>
	  );
	};

export default Error;
	