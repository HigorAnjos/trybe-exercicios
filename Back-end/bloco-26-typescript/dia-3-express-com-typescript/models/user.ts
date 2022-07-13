import connection from "./connection";
import Iuser from "../interfaces/user";

const getUsers = async ():Promise<Iuser[]> => {
  const [rows] = await connection.query('SELECT * FROM Users;');
  console.log(rows);
  return rows as Iuser[];
};

getUsers();

export default getUsers;