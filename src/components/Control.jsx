import React,  {Fragment} from 'react';
import {revisarPresupuesto} from  '../helper';
import PropTypes from 'prop-types';



const Control = ({presupuesto, restante}) => {


    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}

            </div>
            
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
     );
}
 
Control.prototypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default Control;