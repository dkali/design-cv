import RedStripe from "./RedStripe";
import ServiceTile from "./ServiceTile"
import { createSignal, onMount, onCleanup } from "solid-js";

export default function Services() {
  const [isHalfScreen, setIsHalfScreen] = createSignal(false);

  const checkWindowSize = () => {
    setIsHalfScreen(window.innerWidth <= window.screen.width / 3 * 2);
  };

  // Используем onMount, чтобы убедиться, что код выполняется на клиенте
  onMount(() => {
    checkWindowSize(); // Проверяем размер окна при загрузке

    // Добавляем обработчик события resize
    window.addEventListener("resize", checkWindowSize);

    // Удаляем обработчик при размонтировании компонента
    onCleanup(() => window.removeEventListener("resize", checkWindowSize));
  });
  
  return (
    <div class={isHalfScreen() ? "flex flex-row gap-8 ml-20 mr-20 flex-wrap pt-10" : "grid grid-cols-3 gap-8 ml-20 mr-20 mb-20 pt-10"} id="services">
      {/* column 1 */}
      <div class="flex flex-col gap-y-3">
        <div class="text-red-500 font-bold text-lg">01/</div>
        <div class="text-3xl font-mono">Services</div>
        <div class="text-lg">My main goal is to make every square foot in your home beautiful and functional.</div>
        <RedStripe />
      </div>

      {/* column 2 */}
      <div class="flex flex-col gap-y-3">
        <ServiceTile icon="/icons/bedroom.svg" title="Bedroom" message="A comfortable space for your relaxation"/>
        <ServiceTile icon="/icons/kitchen.svg" title="Kitchen" message="Ergonomics and convenience"/>
      </div>
      
      {/* column 3 */}
      <div class="flex flex-col gap-y-3">
        <ServiceTile icon="/icons/living_room.svg" title="Living Room" message="Enjoy cozy evenings with friends and family"/>
        <ServiceTile icon="/icons/bathroom.svg" title="Bathroom" message="Everything you need for your home retreat"/>
      </div>
    </div>
  );
}