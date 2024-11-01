import Cousin from "../Myself/Cousin/Cousin";

export default function Anti() {
  return (
    <div className="border-2 border-red-800 w-96 mx-3 rounded-lg">
      <h1>Anti</h1>
      <section className="flex gap-2">
        <Cousin name={"Rima"}></Cousin>
        <Cousin name={"Sultana"}></Cousin>
      </section>
    </div>
  );
}
