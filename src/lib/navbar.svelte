<script>
  import { Link, link } from 'svelte-routing';
  
  import wouter_img from '../assets/Wouter.png';
</script>

<div class="w-full shadow-md sticky top-0 bg-white z-10">
  <div class="mx-auto flex justify-between py-3 px-20 items-center max-w-screen-2xl">
    <div class="flex gap-x-2">
      <img src={wouter_img} alt="Wouter Haenen" class="w-12 h-12 rounded-full">
      <div class="flex flex-col justify-center gap-y-[2px]">
        <p class="text-xl/[100%] font-semibold text-donker-grijs-tekst">Wouter Haenen</p>
        <p class="text-sm/[100%] text-donker-grijs-tekst">Digital product designer</p>
      </div>
      
    </div>
    <div class="flex gap-x-8">
      <Link to="/" class="text-base uppercase text-licht-grijs-tekst hover:text-groen active:text-groen">Home</Link>
      <Link to="/about" class="text-base uppercase text-licht-grijs-tekst hover:text-groen active:text-groen">Over mij</Link>
      <Link to="/contact" class="text-base uppercase text-licht-grijs-tekst hover:text-groen active:text-groen">Contact</Link>
    </div>
  </div>
</div>