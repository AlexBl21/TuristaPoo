import React from 'react';
import FilaTurista from './FilaTurista';

const TablaTurista = ({data, deleteTurista}) => {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <th>CC</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Dirrecion</th>
                    <th>Correo</th>
                </thead>
                <tbody>
                    {
                        data.length >0?(
                            data.map((tie)=>(
                                <FilaTurista
                                key={tie.id}
                                tie={tie}
                                deleteTurista={deleteTurista}
                                />
                            ))
                        ): (
                            <tr>
                                <td colSpan="6">No hay datos papu</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};


export default TablaTurista;