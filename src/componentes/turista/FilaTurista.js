import React from 'react';

const FilaTurista = ({tie, deleteTurista}) => {
    return (
        <tr>
                        <td>{tie.id}</td>
                        <td>{tie.nombre}</td>
                        <td>{tie.apellido}</td>
                        <td>{tie.telefono}</td>
                        <td>{tie.direccion}</td>
                        <td>{tie.correo}</td>
                        
                        <td>
                        <a href="">
                        <button class="btn btn-secondary" onClick={() => deleteTurista(tie.id)}>Eliminar</button> 
                        <button class="btn btn-primary">Editar</button>
                      
                        </a>
            </td>
                    </tr>
            
        
    );
};
export default FilaTurista;
