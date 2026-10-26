import ConditionGrid from "@/components/ui/conditiongrid";
import { TextRewind } from "@/components/ui/text-rewind";

export default function Default() {
  return (
    <div className="w-full">
      <ConditionGrid />
    </div>
  );
}

export function DemoTextRewind() {
  return <TextRewind text="Rewind" />;
}
