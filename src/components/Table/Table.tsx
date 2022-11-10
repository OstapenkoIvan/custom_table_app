import React from "react";
import TableRow from "./TableRow/TableRow";

interface Icontact {
  id: number;
  first_name: string;
  last_name: string;
  number: number;
  city: string;
  email: string;
}

interface Idata {
  first_name: string;
  last_name: string;
  number: number;
  city: string;
  email: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    TableRow: { key: number; data: Icontact };
  }
}

const Table: React.FC<Icontact> = () => {
  let contactsArr: Icontact[] = [];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number</th>
            <th>City</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact: Icontact) => (
            <TableRow key={contact.id} data={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
