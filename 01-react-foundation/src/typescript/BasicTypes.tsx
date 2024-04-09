export const BasicTypes = () => {
  const name: string = "juan";
  const age: number = 39;
  const isActive: boolean = true;

  const powers: string[] = ["React", "React Native", "Vue"];

  powers.push("123");

  return (
    <>
      <h3>Tipos básico</h3>
      {name} {age} {isActive}
      <br />
      {powers.join(", ")}
    </>
  );
};
