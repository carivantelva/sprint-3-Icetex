
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 19.99,
    image: '../logo.svg',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: 29.99,
    image: '/ruta-de-la-imagen/producto2.jpg',
  },
  // Agrega más productos aquí
];

export const ProductsApp = () => {
  return (
    <Fragment>
      <div className="container">
        <h1>Este es ProductsApp</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
