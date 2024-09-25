import { db } from "@/lib/firebase/app";
import { collection, Firestore, getDocs } from "firebase/firestore/lite";

export default async function Home() {
  async function getFood(db: Firestore) {
    const citiesCol = collection(db, "food");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }

  const food = await getFood(db);

  return <div className="w-full"></div>;
}
