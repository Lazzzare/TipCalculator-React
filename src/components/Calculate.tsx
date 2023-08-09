interface CalculateProps {
  tip: number | null;
  bill: number | null;
  people: number | null;
  everythingReset: () => void;
}

const Calculate = ({ tip, bill, people, everythingReset }: CalculateProps) => {
  const ifValuesDontEqualNull =
    bill !== null && people !== null && tip !== null;

  const tipAmount = ifValuesDontEqualNull && ((bill * tip) / people).toFixed(2);
  const totalAmount =
    ifValuesDontEqualNull && ((bill * (1 + tip)) / people).toFixed(2);
  const showTip =
    tipAmount === "NaN" || tipAmount === "Infinity" ? "$0.00" : tipAmount;

  const showTotal =
    totalAmount === "NaN" || totalAmount === "Infinity" ? "$0.00" : totalAmount;

  return (
    <div className="bg-[#00474B] mt-8 rounded-[15px] pl-6 pb-6 pt-[37px] pr-[22px] md:p-[40px] md:w-[413px] space-y-[22px] md:flex md:flex-col md:justify-between">
      <div>
        <div className="flex flex-row w-full justify-between items-center mb-6 md:mb-[52px]">
          <div>
            <h2 className="text-white font-bold">Tip Amount</h2>
            <span className="text-[#7F9D9F] text-[13px] font-bold">
              / person
            </span>
          </div>
          <h1 className="text-[#26C2AE] text-[32px] font-bold tracing-[0.6px]">
            {showTip ? "$" + showTip : "$0.00"}
          </h1>
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <div>
            <h2 className="text-white font-bold">Total</h2>
            <span className="text-[#7F9D9F] text-[13px] font-bold">
              / person
            </span>
          </div>
          <h1 className="text-[#26C2AE] text-[32px] font-bold tracing-[0.6px]">
            {showTotal ? "$" + showTotal : "$0.00"}
          </h1>
        </div>
      </div>
      <button
        onClick={everythingReset}
        className={`uppercase bg-[#0D686D] text-[#00474B] py-[9px] px-8 text-[20px] font-bold w-full
        rounded-[5px] md:items-end duration-300 ${
          bill === null && tip === null && people === null
            ? "bg-[#0D686D]"
            : "bg-[#9FE8DF]"
        }`}
      >
        Reset
      </button>
    </div>
  );
};

export default Calculate;
