import Anti from "../Anti/Anti";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export default function GrandPa() {
  return (
    <div className="border-2 border-red-800 py-3 m-3 rounded-lg w-11/12 px-5 mx-auto">
      <h1 className="text-2xl text-center">GrandPa</h1>
      <div className=" flex justify-center">
        <Dad />
        <Uncle />
        <Anti />
      </div>
    </div>
  );
}
