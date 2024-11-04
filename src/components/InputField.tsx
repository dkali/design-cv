import { Show, createSignal } from "solid-js"


interface InputFieldProps {
  label: string
}

export default function InputField(props: InputFieldProps) {
  const [inputValue, setInputValue] = createSignal("");

  const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <div class="relative">
      <input class="w-full bg-transparent py-3 px-10 text-white"
        type="text"
        value={inputValue()}
        onInput={handleInputChange} placeholder={props.label}></input>
      <div class="h-0.5 w-full bg-gray-500" />
    </div>
  );
}