import Image from "next/image";
import Img from "../public/1.jpg";

export default function Pets() {
  return (
    <div>
      <Image
        src={Img}
        alt="pet"
        width="300"
        height="420"
        placeholder="blur"
      ></Image>

      {["1", "2", "3", "4", "5"].map((path) => (
        <div key={path}>
          <Image
            src={`/${path}.jpg`}
            alt="Shiba Image"
            width="300"
            height="420"
            blurDataURL=""
          ></Image>
        </div>
      ))}
    </div>
  );
}

Pets.getLayout = (page) => {
  return <>{page}</>;
};
