interface SelectTipProps {
  tip: number | null;
  setTip: (e: number) => void;
}

const SelectTip = ({ tip, setTip }: SelectTipProps) => {
  const tipValues = [
    { percentage: 5, label: "5%", divide: 0.05 },
    { percentage: 10, label: "10%", divide: 0.1 },
    { percentage: 15, label: "15%", divide: 0.15 },
    { percentage: 25, label: "25%", divide: 0.25 },
    { percentage: 50, label: "50%", divide: 0.5 },
  ];
  return (
    <div className="mt-8">
      <h2 className="text-[#5E7A7D] font-bold mb-4">Select Tip %</h2>
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-3">
        {tipValues.map((tipData) => (
          <button
            key={tipData.percentage}
            onClick={() => setTip(tipData.divide)}
            className="w-[146px] bg-[#00474B] px-[17px] py-[6px] md:px-[14px] md:w-[117px]
            text-white font-bold text-2xl rounded-[5px] duration-300 hover:bg-[#9FE8DF] hover:text-[#00474B]"
          >
            {tipData.label}
          </button>
        ))}
        <input
          type="number"
          placeholder="Costum"
          className="bg-[#F3F9FA] text-right px-5 py-[6px] md:px-[14px] md:w-[117px]
          text-[#547878] text-2xl font-bold w-[147px] rounded-[5px] focus:outline-[#26c2ae]"
          value={(tip && tip * 100) || ""}
          onChange={(e) => setTip(e.target.valueAsNumber / 100)}
        />
      </div>
    </div>
  );
};

export default SelectTip;
