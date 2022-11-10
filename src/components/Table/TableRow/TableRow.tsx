import React from "react";
import { Idata } from "../../../customTypings/defaultTypes";

interface Icontact {
  id: number;
  first_name: string;
  last_name: string;
  number: number;
  city: string;
  email: string;
}

const TableRow: React.FC<Icontact> = ({ data: Icontact }) => {
  return (
    <tr>
      <td>fname</td>
      <td>lname</td>
      <td>number</td>
      <td>city</td>
      <td>email</td>
    </tr>
  );
};

export default TableRow;
