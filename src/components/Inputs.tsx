import { useEffect, useState } from "react";
import Calculate from "./Calculate";
import Bill from "./Bill";
import SelectTip from "./SelectTip";
import NumberOfPeople from "./NumberOfPeople";

const Inputs = () => {
  const [bill, setBill] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);
  const [tip, setTip] = useState<number | null>(null);
  const [peopleError, setPeopleError] = useState<boolean>(false);

  const everythingReset = () => {
    setBill(null);
    setPeople(null);
    setTip(null);
  };

  useEffect(() => {
    if (people === 0) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [people]);

  return (
    <div className="container bg-white w-full p-8 rounded-t-3xl md:rounded-[25px] flex flex-col md:flex-row md:justify-between max-w-[920px]">
      <div className="md:w-[379px] gap-x-12">
        <Bill bill={bill} setBill={setBill} />
        <SelectTip tip={tip} setTip={setTip} />
        <NumberOfPeople
          people={people}
          setPeople={setPeople}
          peopleError={peopleError}
        />
      </div>
      <Calculate
        tip={tip}
        bill={bill}
        people={people}
        everythingReset={everythingReset}
      />
    </div>
  );
};

export default Inputs;
