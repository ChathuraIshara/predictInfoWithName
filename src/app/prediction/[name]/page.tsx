import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface params {
  params: { name: string };
}

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

export default async function Page({ params }: params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <main className="flex min-h-screen items-start bg-black justify-start pt-5 px-5">
      <div className="bg-slate-50 rounded-md w-1/2 px-6 py-6 text-left">
        <h1 className="text-4xl text-blue-500 font-bold pb-3">Personal Info</h1>
        <p className="font-bold text-lg">Age:{age?.age}</p>
        <p className="font-bold text-lg">Gender:{gender?.gender}</p>
        <p className="font-bold text-lg">Country:{country?.country[0]?.country_id}</p>
      </div>
    </main>
  );
}
