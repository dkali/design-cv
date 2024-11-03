interface RecentTileProps {
  image: string,
  title: string,
  description: string
}

export default function RecentTile(props: RecentTileProps) {
  return(
    <div class="snap-start scroll-mx-6 shrink-0 flex flex-col gap-5 max-w-lg">
      <img class="shrink-0 rounded-lg shadow-xl bg-white" src={props.image} />
      <p class="text-lg text-white font-mono">{props.title}</p>
      <p class="text-gray-400 font-mono">{props.description}</p>
      <a class="text-white flex flex-row items-center">
        LEARN MORE
        <img class="max-h-8" src="/red_arrow.svg" />
      </a>
    </div>
  );
}