import React, { useState } from 'react';


const AgregarTurista = ({ createTurista}) => {
  const [newTurista, setNewTurista] = useState({ id: '', nombre: '', apellido: '', telefono: '', correo: '', direccion: '' });

  const handleInputChange = (e) => {
    setNewTurista({ ...newTurista, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTurista(newTurista);
    setNewTurista({ id: '', nombre: '', apellido: '', telefono: '', correo: '', direccion: ''});/*da la estructura del json*///
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={newTurista.id}
        onChange={handleInputChange}
        placeholder="Id"
      />
      <input
        type="text"
        name="nombre"
        value={newTurista.nombre}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="apellido"
        value={newTurista.apellido}
        onChange={handleInputChange}
        placeholder="Apellido"
      />
      <input
        type="text"
        name="telefono"
        value={newTurista.telefono}
        onChange={handleInputChange}
        placeholder="Telefono"
      />
      <input
        type="text"
        name="correo"
        value={newTurista.correo}
        onChange={handleInputChange}
        placeholder="Correo"
      />
      <input
        type="text"
        name="direccion"
        value={newTurista.direccion}
        onChange={handleInputChange}
        placeholder="Direccion"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AgregarTurista;