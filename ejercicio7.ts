// Detectar sin una palabra se escribe igual al derecho y al revés: ejem: acurruca, ana, rayar, etc

const ejercicio7 = (palabra: string) => {
  let nuevaPalabra: string = "";

  for (let i = palabra.length; i > 0; i--)
    nuevaPalabra += palabra.charAt(i - 1);

  if (nuevaPalabra === palabra) console.log("La palabra si es un palindromo!");
  else console.log("La palabra no es un palindromo!");
};

ejercicio7("acurruca");
