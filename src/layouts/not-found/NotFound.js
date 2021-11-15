import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <h1><span class="display-1 d-block">404</span>¡Oh cielos! ¡Tienes un error! </h1>
      <p>
        ¡Ah ocurrido un error inesperado. Por favor vuelva a intentar en unos
        minutos!
      </p>
      
      <div className="d-flex justify-content-center">
        <Link to="/Home">
          <Button variant="secondary">Volver al Catalogo</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
