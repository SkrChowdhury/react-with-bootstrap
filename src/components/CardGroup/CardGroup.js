import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
  const products = [
    { id: 1, name: 'Mac Book Pro', price: 140000 },
    { id: 2, name: 'Mac Book Crow', price: 270000 },
    { id: 3, name: 'Mac Book Bro', price: 560000 },
    { id: 4, name: 'Mac Book Grow', price: 364000 },
  ];
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
