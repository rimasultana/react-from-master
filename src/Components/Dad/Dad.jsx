import Bro from "../Bro/Bro";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

export default function Dad() {
  return (
    <div className="border-2 border-red-800 w-96 mx-3 rounded-lg">
      <h1>Dad</h1>
      <section className="flex gap-2">
        <Myself/>
        <Bro/>
        <Sister/>
      </section>
    </div>
  );
}
