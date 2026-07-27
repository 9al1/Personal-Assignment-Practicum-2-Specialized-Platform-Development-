import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

import "../css/ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        API
            .get(`/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!product) {
        return <h2>Loading product...</h2>;
    }

    return (
        <main className="product-details">
            <div className="details-card">
                <h1>
                    {product.name}
                </h1>
                <p>
                    Category: {product.category}
                </p>
                <p>
                    {product.description}
                </p>
                <h2>
                    ${product.price}
                </h2>
                <p>
                    Stock Available: {product.stock}
                </p>
            </div>
        </main>
    );
}

export default ProductDetails;