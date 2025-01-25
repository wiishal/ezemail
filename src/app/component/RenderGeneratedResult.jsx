
import Typewriter from "typewriter-effect";

export default function RenderGeneratedResult({ str }) {
  return (
    <div
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      className="border border-b-lime-600 border-transparent "
    >
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .start()
                .changeDelay(25)
                .typeString(str)
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .typeString("<br/>")
                .pauseFor(2500);
            }}
          />
        </div>
    
    </div>
  );
}
