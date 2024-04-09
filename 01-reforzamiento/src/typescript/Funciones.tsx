export const Funciones = () => {
  const sumar = (a: number, b: number, c: number): number => {
    return a + b + c;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(5, 3, 3)}</span>
    </>
  );
};
