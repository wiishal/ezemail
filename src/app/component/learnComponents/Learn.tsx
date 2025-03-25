import { JSX, useEffect, useState } from "react";
import { leaningStage } from "../../types/type.email";
import AskLeaningStage from "./AskLeaningStage";
import PracticeEmail from "./PracticeEmail";

function Learn(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [leaningStage, setLearningStage] = useState<leaningStage | null>(null);

  useEffect(() => {
    const stage = localStorage.getItem("userStage");
    if (stage) {
      setLearningStage(Number(stage) as leaningStage);
    } else {
      setLearningStage(null);
    }
    setIsLoading(false);
  }, [leaningStage]);


  if (isLoading) return <div>Loading...</div>;

  if (leaningStage === null) return <AskLeaningStage setLearningStage={setLearningStage} />;
  
     return (
      <PracticeEmail/>
  );
}

export default Learn;
