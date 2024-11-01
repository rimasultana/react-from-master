import Cousin from "../Myself/Cousin/Cousin";


export default function Uncle() {
  return (
    <div className="border-2 border-red-800 w-96 mx-3 rounded-lg">
        <h1>Uncle</h1>
        <section className="flex gap-2">
        <Cousin name={"Rafsan"}></Cousin>
        <Cousin name={"Shohana"}></Cousin>
        </section>
    </div>
  )
}
