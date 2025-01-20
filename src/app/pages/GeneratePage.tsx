import GenerateInputs from "../component/GenerateInputs";
import GenerateResult from "../component/GenerateResult";

function GeneratePage() {
  return (
    <div
      className={`flex align-middle bg-neutral-900 justify-center items-top w-full h-screen `}
    >
      <div className="flex flex-row  items-center justify-center bg-neutral-900 w-5/6 text-white ">
            <GenerateInputs />
            <GenerateResult />
          </div>
    </div>
  );
}

export default GeneratePage;
