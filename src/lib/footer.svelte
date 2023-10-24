<script>
    import { Link } from 'svelte-routing';

    import wh_logo_wit from '../assets/wh_logo_wit.svg';
</script>

<div class="w-full bg-donker-blauw mt-32">
    <div class="mx-auto flex justify-between pt-36 pb-28 px-20 items-center max-w-screen-2xl">
        <div class="flex items-center gap-x-10">
            <img src={wh_logo_wit} alt="WH logo wit" class="w-20 h-20">
            <div class="flex gap-x-8">
                <Link to="/" class="uppercase text-white font-medium hover:text-groen">Home<span class="text-groen text-3xl/[20%]">.</span></Link>
                <Link to="/about" class="uppercase text-white font-medium hover:text-groen">Over mij<span class="text-groen text-3xl/[20%]">.</span></Link>
                <Link to="/contact" class="uppercase text-white font-medium hover:text-groen">Contact<span class="text-groen text-3xl/[20%]">.</span></Link>
            </div>
        </div>
        <div class="flex flex-col gap-y-1 w-1/4">
            <p class="text-base text-white">Net zo enthousiast als ik? Zin om samen iets moois op te bouwen? Stuur me een e-mail.</p>
            <p class="text-base/[100%] text-groen underline"><a href="mailto:haenen.wouter@gmail.com">haenen.wouter@gmail.com</a></p>
        </div>
    </div>
    <div class="pb-4">
        <p class="text-center text-sm text-white/40">© Wouter Haenen 2023. Alle rechten voorbehouden.</p>
    </div>
</div>