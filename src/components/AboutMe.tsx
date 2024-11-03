import RedStripe from "./RedStripe"

export default function AboutMe() {
  return (
    <div class="relative pt-10" id="about">

      <div class={"grid grid-cols-2 gap-8 mx-20"}>
        {/* column 1 */}
        <div class="flex flex-col gap-y-4">
          <div class="text-red-500 font-bold text-lg">02/</div>
          <div class="text-3xl font-mono">About Me</div>
          <div class="text-lg">Hi, I'm Elena and I'm an interior designer in New York. I carefully create spaces it's a real pleasure to live in.</div>
          <RedStripe />
          <p class="text-lg text-zinc-400">I have been working in this area for 5 years now, and create projects mainly in the minimalism, modern, boho styles. I am always open to interesting proposals and take on both an integral design project of a private house and renovations in one room with the same zeal.</p>
          <div>
            <a class="button_red shadow-lg shadow-red-500/60" href="#pricing">Learn more</a>
          </div>
        </div>

        {/* column 2 */}
        <img src="/Alena-1.png"></img>
      </div>
      
      <div class="bg-cover bg-center w-full h-1/3 absolute bottom-0 left-0" style="background-image: url(footer_about_me.png)"></div>
    </div>
  );
}