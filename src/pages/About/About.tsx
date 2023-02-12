import { Link } from "react-router-dom";

export interface AboutInterface {}

const About : React.FC<AboutInterface> = () => {
	return (
		<section className='section'>
		  <h2>About</h2>
		  <Link to='/' className='btn'>
			Back Home
		  </Link>
		</section>
	  );
	};
	export default About;
	