import "./CommonStyles.css";

export default function Welcome() {

  return (
    <div class="bg-cover bg-center w-full h-screen text-white mb-14 relative" style="background-image: url(welcome_2.jpg)">
      <div class="flex flex-row justify-end gap-4 pt-24 pr-48 items-center">
      {[
        ['About me', '/#about'],
        ['Services', '/#services'],
        ['Pricing', '/#pricing'],
        ['Testimonials', '/#testimonails'],
        ['Contact us', '/#contacts'],
      ].map(([title, href_link]) => (
        <a href={href_link} class="hover:text-red-500">{title}</a>
      ))}
        <a class="button_tr" href="/#portfolio">Portfolio</a>
      </div>

      <div class="flex flex-col items-center space-y-6 mt-36">
        <div class="text-7xl">Elena Kalinnikova</div>
        <div class="text-xl">Professional interior designer in Dublin</div>
        <a class="button_red shadow-lg shadow-red-500/60" href="/#quote">Request a quote</a>
      </div>

      <div class="bg-cover bg-center w-full h-1/4 absolute bottom-0 left-0" style="background-image: url(footer_welcome.png)"></div>
    </div>
  );
}