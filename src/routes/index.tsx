import { A } from "@solidjs/router";
import Welcome from "~/components/Welcome";
import Services from "~/components/Services";
import AboutMe from "~/components/AboutMe";
import RecentProjects from "~/components/RecentProjects";

export default function Home() {
  return (
    <main class="flex flex-col items-center bg-white text-black">
      <Welcome />
      <Services />
      <AboutMe />
      <RecentProjects />
      <div>Modernity</div>
      <div>Why choose me</div>
      <div>Gallery</div>
      <div>Pricing</div>
      <div>Promo video</div>
      <div>Cooperation options</div>
      <div>Testimonials</div>
      <div>Partners</div>
      <div>FAQ</div>
      <div>Contact me</div>
      <div>Contact details</div>
      <div>Footer</div>
    </main>
  );
}
