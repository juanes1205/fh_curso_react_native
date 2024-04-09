import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Usuarios = () => {
  useEffect(() => {
    // Llamando al API
    reqResApi
      .get("/users")
      .then((resp) => {
        console.log(resp.data.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Email</th>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};
