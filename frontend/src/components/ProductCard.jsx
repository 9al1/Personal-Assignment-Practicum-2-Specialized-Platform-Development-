import "../css/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="product-card">

            <h3>{product.name}</h3>

            <p className="category">
                {product.category}
            </p>

            <p className="price">
                ${product.price}
            </p>

            <Link to={`/products/${product.id}`}>
                <button>
                    View Details
                </button>
            </Link>

        </div>
    );
}

export default ProductCard;