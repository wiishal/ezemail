export default function GenerateInputs() {
  return (
    <div className="w-2/6 h-full p-3">
      <div className="flex flex-col gap-1 m-3">
        <label htmlFor="">From</label>
        <input
          type="text"
          className="bg-transparent border border-blue-700 rounded w-4/6 h-10 p-3 focus:ring focus:outline-none focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col gap-1 m-3">
        <label htmlFor="">To</label>
        <input
          type="text"
          className="bg-transparent border border-blue-700 rounded w-4/6 h-10 p-3 focus:ring focus:outline-none focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col gap-1 m-3">
        <label htmlFor="">Context</label>
        <textarea
          name="context"
          id=""
          style={{
            resize: "none", // Disables the resize grabber
          }}
          className="bg-transparent border border-blue-700 rounded h-5/6 p-3 focus:ring focus:outline-none focus:ring-blue-400"
        ></textarea>
      </div>
    </div>
  );
}
