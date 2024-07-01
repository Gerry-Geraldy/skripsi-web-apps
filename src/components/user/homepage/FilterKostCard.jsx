import NewKostCard from "./KostCard";
import { kosts } from "../../../constant/infoKostContent";

const KostByRegion = () => {
  const denpasarKosts = kosts
    .filter((kost) => kost.region === "Denpasar Selatan")
    .slice(0, 4);

  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto mb-10 ml-0 p-3 lg:ml-[140px] flex flex-col justify-center gap-5">
        <h2 className="text-3xl lg:text-4xl font-volkhovBold dark:text-white">
          Kost Murah di wilayah Denpasar Selatan
        </h2>
        <p className="text-gray-600 max-w-xl text-[12px] font-mulishSemiBold dark:text-gray-300">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
      </div>
      <NewKostCard kosts={denpasarKosts} />
    </section>
  );
};

const NewKost = () => {
  const newKosts = [...kosts]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4);

  return (
    <section>
      <NewKostCard kosts={newKosts} />
    </section>
  );
};

export { KostByRegion, NewKost };
