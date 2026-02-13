const devMotivations = [
  "Ship. Break. Fix. Repeat.",
  "Code. Crash. Learn. Win.",
  "Debugging Builds Masters",
  "Commit Early. Commit Often.",
  "Push. Fail. Refactor. Succeed.",
  "Errors Are Features in Disguise",
  "Hack. Break. Repeat.",
  "Think. Code. Test. Repeat.",
  "Build Fast. Learn Faster.",
  "Code Hard. Ship Faster.",
];

import { useMemo } from "react";

export default function DevMotivation() {
  const randomMotivation = useMemo(
    () => devMotivations[Math.floor(Math.random() * devMotivations.length)],
    [],
  );
  return (
    <p className="text-primary mt-2 animate-pulse-text font-bold font-mono">
      {randomMotivation}
    </p>
  );
}
