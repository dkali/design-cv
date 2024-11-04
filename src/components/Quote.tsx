import InputField from "./InputField";
import RedStripe from "./RedStripe";

export default function Qoute() {
  return (
    <div class="bg-cover bg-center bg-fixed w-full h-screen grid grid-cols-2 gap-32 px-32 content-center" style="background-image: url(contacts-3.jpg)" id="quote">
      <div />

      <div class="flex flex-col gap-10">
        <div class="text-red-500 font-bold text-lg">04/</div>
        <div class="text-3xl font-mono text-white">Looking for a Talented Interior Designer?</div>
        <div class="text-lg font-mono text-red-500">Fill out the form below and I will contact you to discuss the cooperation.</div>
        <InputField label="Name"/>
        <InputField label="Phone number"/>
        <InputField label="Email"/>
        <a class="button_red shadow-lg font-mono shadow-red-500/60" href="#quote">Request a quote</a>
      </div>
    </div>
  );
}