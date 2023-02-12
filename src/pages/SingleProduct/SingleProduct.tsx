import { Link, useParams } from "react-router-dom";
import products from "../../data";
import { Product } from "../../models/product";

export interface SingleProductInterface {}

const SingleProduct : React.FC<SingleProductInterface> = () => {
	const { productId } = useParams();
	const product: Product | undefined = products.find((product) => product.id === productId);
	
	return (
	  <section className='section product'>
		{
			(product !== undefined 
				? 
				<>
					<img src={product.image} alt={product.name} />
					<h5>{product.name}</h5>
				</>				
				:'')
		}		
		<Link to='/products'>back to products</Link>
	  </section>
	);
  };
  
  export default SingleProduct;
