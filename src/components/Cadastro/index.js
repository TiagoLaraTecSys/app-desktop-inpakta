import React from 'react';

function Cadastro() {
  return (
    <div className="inp-cadastro">
      <form className="inp-cadastro__form">
        <input type="text" name="nome" className="inp-cadastro__iput"></input>
        <input type="email" name="e-mail" className="inp-cadastro__iput"></input>
        <button type="submit" className="inp-cadastro__btn"></button>
     </form>
    </div>
  );
}

export default Cadastro;
