import RedStripe from "./RedStripe";

export default function Qoute() {
  return (
    <div class="bg-cover bg-center bg-fixed w-full h-screen grid grid-cols-2 gap-32 px-32 content-center" style="background-image: url(contacts-3.jpg)" id="qoute">
      <div />

      <div class="flex flex-col gap-10">
        <div class="text-red-500 font-bold text-lg">04/</div>
        <div class="text-3xl font-mono text-white">Looking for a Talented Interior Designer?</div>
        <div class="text-lg font-mono text-red-500">Fill out the form below and I will contact you to discuss the cooperation.</div>
        <div>
          <input class="w-full bg-transparent py-5 px-10" value="Name"></input>
          <div class="h-0.5 w-full bg-gray-500" />
        </div>
        <div>
          <input class="w-full bg-transparent p-5 px-10" value="Phone number"></input>
          <div class="h-0.5 w-full bg-gray-500" />
        </div>
        <div>
          <input class="w-full bg-transparent p-5 px-10" value="Email"></input>
          <div class="h-0.5 w-full bg-gray-500" />
        </div>
        <a class="button_red shadow-lg font-mono shadow-red-500/60" href="#quote">Request a quote</a>
      </div>
    </div>
  );
}