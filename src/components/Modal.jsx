import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSave, pokemon }) => {
  if (!isOpen) return null;

  const [editedPokemon, setEditedPokemon] = useState(pokemon);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPokemon({ ...editedPokemon, [name]: value });
  };

  const handleSave = () => {
    onSave(editedPokemon);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e)=>e.stopPropagation()}
        style={{
          background: "white",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        <div className="modalIMG">
          <img className="pokemonIMG" src={editedPokemon.image} alt={editedPokemon.name} />
        </div>
        <div className="modalDetails">
          <p>{editedPokemon.number}</p>
          <input
            type="text"
            name="name"
            value={editedPokemon.name}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input
            type="text"
            name="types"
            value={editedPokemon.types.join(', ')}
            onChange={(e) => handleChange({ target: { name: 'types', value: e.target.value.split(', ') } })}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
