import React from 'react';
import Card from './Card';

const CardTurista = ({data}) => {
    return (
        <div>
            <div class="text-bg-primary p-3"><h3>LISTA DE TURISTAS</h3></div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.length > 0 ? (
                        data.map((tie) => (
                            <Card
                            key ={tie.id}
                            tie = {tie}             
                                                     />


                        ))

                    ) : (
                        <center><img alt="img" src="https://iepilosophia.co/sipiloso/assets/img/app/cargando.gif"/></center>
                    )
                }   
             
          </div>  
        </div>
    );
};

export default CardTurista;