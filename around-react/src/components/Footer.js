import React from "react";

const Footer = () => {
  // Obtener el año actual
  const year = new Date().getFullYear();

  // Crear un nodo de texto con el símbolo de copyright
  const symbol = String.fromCharCode(169);

  return (
    <footer className="footer">
      <p className="footer__copyright">
        {` ${symbol} ${year} Jordan Esquivel Silva `}
      </p>
    </footer>
  );
};

export default Footer;
