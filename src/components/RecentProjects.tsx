import RecentTile from "./RecentTile"
import RedStripe from "./RedStripe"

export default function RecentProjects() {
  return (
    <div class="flex flex-col bg-dark w-full py-10 items-center gap-4 h-screen" id="portfolio">
      <p class="text-lg text-gray-500 font-bold">03/</p>
      <p class="text-3xl font-mono text-white">Recent projects</p>
      <p class="text-lg text-red-500 w-6/12 text-center">Below are real projects carried out under my coordination. Do you want the same beauty at your place? Get into contact with me.</p>
      <RedStripe />

      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 pl-20 pt-16">
        <div class="snap-start scroll-mx-6 shrink-0">
          <div class="shrink-0 w-0"></div>
        </div>

        <RecentTile
          image = "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          title = "Bali style bedroom"
          description = "Spacious and light bedroom with a king-size bed, a cozy hammock, and green accents."
        />
        <RecentTile
          image = "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          title = "Provence kitchen"
          description = "A simple and functional kitchen in all shades of beige and white for a small family."
        />
        <RecentTile
          image = "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          title = "TBD title"
          description = "TBD description dsfsdf dsvsdv sdvds v ewvrw bre brebe b reb reb erb erbreb"
        />
        <RecentTile
          image = "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          title = "TBD title"
          description = "TBD description dsfsdf dsvsdv sdvds v ewvrw bre brebe b reb reb erb erbreb"
        />
        <RecentTile
          image = "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          title = "TBD title"
          description = "TBD description dsfsdf dsvsdv sdvds v ewvrw bre brebe b reb reb erb erbreb"
        />

        <div class="snap-start scroll-mx-6 shrink-0">
          <div class="shrink-0 w-0"></div>
        </div>
      </div>

    </div>
  );
}