// import "./Welcome.css";

export default function Welcome() {

  return (
    <div class="bg-cover bg-center w-full h-screen text-white" style="background-image: url(welcome_2.jpg)">
      <div class="flex flex-row gap-4 justify-end pt-24 pr-48">
        <a class="hover:text-red-500" href="/#about">About me</a>
        <a class="hover:text-red-500" href="/#services">Services</a>
        <a class="hover:text-red-500" href="/#pricing">Pricing</a>
        <a class="hover:text-red-500" href="/#testimonails">Testimonials</a>
        <a class="hover:text-red-500" href="/#contacts">Contact us</a>
        
        Portfolio
      </div>
      Welcome page
    </div>
  );
}