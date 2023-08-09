import ManIcon from "../assets/ManIcon.svg";

interface NumberOfPeopleProps {
  people: number | null;
  peopleError: boolean;
  setPeople: (e: number) => void;
}

const NumberOfPeople = ({
  people,
  peopleError,
  setPeople,
}: NumberOfPeopleProps) => {
  return (
    <div className="mt-8">
      <div className="flex flex-row w-full justify-between items-center">
        <h2 className="text-[#5E7A7D] font-bold mb-[6px]">Number of People</h2>
        {peopleError ? (
          <span className="text-[13px] md:text-[16px] text-[#E17457] font-bold mb-[5px]">
            Can't Be Zero
          </span>
        ) : null}
      </div>
      <div className="flex relative">
        <img
          src={ManIcon}
          alt="ManIcon"
          className="absolute top-[15px] left-[19px]"
        />
        <input
          type="number"
          placeholder="0"
          value={people || ""}
          onChange={(e) => setPeople(Math.trunc(e.target.valueAsNumber))}
          onKeyDown={(e) => {
            if (e.key === ".") {
              e.preventDefault();
            }
          }}
          className={`bg-[#F3F9FA] flex w-full text-right px-5 
          py-[6px] text-[#00474B] text-2xl font-bold rounded-[5px]
          ${peopleError ? "outline-[#E17052]" : "outline-[#26c2ae]"} `}
        />
      </div>
    </div>
  );
};

export default NumberOfPeople;
