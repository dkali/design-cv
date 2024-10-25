import "./ServiceTile.css"

interface ServiceTileProps {
  icon: string,
  title: string,
  message: string
}

export default function ServiceTile(props: ServiceTileProps) {
  return (
    <div class="flex flex-row mb-8">
      <div class="icon-container">
        <img src={props.icon} class="max-h-14"/>
      </div>
      <div class="ml-4">
        <div class="text-xl font-bold">{props.title}</div>
        <div class="text-lg text-zinc-400">{props.message}</div>
      </div>

    </div>
  );
}