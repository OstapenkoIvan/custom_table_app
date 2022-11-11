import { useRef } from "react";
import Table from "./Components/Table";
import TableForm from "./Components/TableForm";
import TableFormBtn from "./Components/TableFormBtn";

export default function App() {
  const formRef = useRef();

  return (
    <section className="bg-slate-200 h-screen w-screen relative ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px]">
        <h1 className="text-3xl font-bold mb-2 text-center">Contacts</h1>
        <Table />
        <TableFormBtn formRef={formRef} />
        <TableForm formRef={formRef} />
      </div>
    </section>
  );
}
