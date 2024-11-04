import { A } from "@solidjs/router";
import Welcome from "~/components/Welcome";
import Services from "~/components/Services";
import AboutMe from "~/components/AboutMe";
import RecentProjects from "~/components/RecentProjects";
import Qoute from "~/components/Quote";
import Contacts from "~/components/Contacts";

export default function Home() {
  return (
    <main class="flex flex-col items-center bg-white text-black">
      <Welcome />
      <Services />
      <AboutMe />
      <RecentProjects />
      <div>Pricing</div>
      <Qoute />
      <Contacts />
    </main>
  );
}
