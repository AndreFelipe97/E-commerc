import { LabelFloatLabel, LableFloat, LableFloatInput } from "./styles";

type InputProps = {
  label: string;
  type: "text" | "email";
};

export function Input({ type, label }: InputProps) {
  return (
    <LableFloat>
      <LableFloatInput type={type} placeholder=" " />
      <LabelFloatLabel>{label}</LabelFloatLabel>
    </LableFloat>
  );
}
