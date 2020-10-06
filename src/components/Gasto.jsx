import React from "react";
import PropTypes from 'prop-types';


const Gasto = ({ gasto }) => {
  return (
    <li>
      <div className="one-half column">
        <p>{gasto.nombre}</p>
      </div>
      <div className="one-half column">
        <span className="gasto">$ {gasto.cantidad}</span>
      </div>
    </li>
  );
};

Gasto.prototypes = {
    gasto: PropTypes.object.isRequired  
}
export default Gasto;
