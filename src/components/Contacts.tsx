import RedStripe from "./RedStripe";

export default function Contacts() {
  return (
    <div class="bg-cover bg-center bg-fixed w-full h-screen grid grid-cols-2 gap-32 px-32 content-center" style="background-image: url(contacts-2.jpg)" id="contacts">      
      <div class="backdrop-blur-sm bg-white/10 h-min">
        <div class="flex flex-col text-white gap-4 py-10 px-5 items-center">
          <div class="text-red-500 font-bold text-lg">05/</div>
          <p class="text-3xl font-mono">Contact</p>
          <RedStripe />
          <p class="text-lg font-mono text-center">172-11 65th Ave, Flushing, NY 11365, USA.</p>
          <p class="text-lg font-mono">+1 (234) 567 89 00</p>
          <p class="text-lg font-mono">alenanov.design@gmail.com</p>
          <div>
            <a class="button_red shadow-lg shadow-red-500/60" href="#qoute">Request a quote</a>
          </div>
        </div>
      </div>


      <div />
    </div>
  );
}