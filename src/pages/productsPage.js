import React from 'react';

function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: "$100",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: "$75",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: "$120",
    },
  ];

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
