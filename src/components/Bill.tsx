import DollarIcon from "../assets/DollarIcon.svg";

interface billProps {
  bill: number | null;
  setBill: (e: number) => void;
}

const Bill = ({ bill, setBill }: billProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-[#5E7A7D] font-bold">Bill</h2>
      <div className="flex relative">
        <img
          src={DollarIcon}
          alt="DollarIcon"
          className="absolute top-[15px] left-[19px]"
        />
        <input
          type="number"
          value={bill || ""}
          placeholder="0"
          onChange={(e) => setBill(e.target.valueAsNumber)}
          className="bg-[#F3F9FA] flex w-full text-right px-5 py-[6px] text-[#00474B] text-2xl font-bold rounded-[5px] focus:outline-[#26c2ae]"
        />
      </div>
    </div>
  );
};

export default Bill;
