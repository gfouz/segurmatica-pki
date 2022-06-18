import React from "react";

export const titleProps: React.CSSProperties = {
  color: "#666666",
  margin: "2em 0",
  fontSize: "1.3em",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
};

export const serviceAbout: () => string = () => {
  return `
  La empresa Segurmática brinda servicios 
  de emisión de certificados digitales para 
  firma digital de mensajería y ficheros 
  electrónicos y para la protección de 
  canales y servicios de comunicaciones. 
  A través de sus servicios, le crea a sus 
  clientes un método seguro de intercambio 
  de información basado en la criptografía 
  de llave pública (PKI). Esta tecnología 
  proporciona una verificación de la identidad 
  segura y precisa, además, protege la integridad 
  y la confidencialidad de la información. 

	`;
};
