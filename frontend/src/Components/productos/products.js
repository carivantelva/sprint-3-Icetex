
 function ProductElement(props) { 
    
  return (
    <div className="card col-3 m-4">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <div className="d-flex justify-content-around col-12">
          <button class="btn btn-primary">{props.price}</button>
         
        </div>
      </div>
    </div>
  );
}

export default function ProductList() {
  return(
    <div className="col-8 d-flex flex-wrap justify-content-around">
        <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>

        <ProductElement name="blusa" description="prenda mujer" price={2000}></ProductElement>
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
    </div>
  );
  
}
