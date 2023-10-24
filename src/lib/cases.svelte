<script>
    import Case from "./components/case.svelte";
    import fiar_case_img from '../assets/FiAR_Case.png';
    import smartfix_case_img from '../assets/SmartFix_Case.png';
    import das_delft_case_img from '../assets/DAS_Delft_case.png';
    import tinteltuin_case_img from '../assets/Tinteltuin_case.png';
</script>

<div class="flex flex-col items-center mt-20 gap-y-20 mx-20">
    <div class="flex flex-col items-center gap-y-4">
        <p class="text-base/[100%] text-licht-grijs-tekst">Hi, ik ben Wouter</p>
        <h1 class="text-6xl/[100%] font-bold text-center text-donker-blauw">Ik onderzoek & bouw <br> <span class="text-groen">user</span> interfaces<span class="text-groen">.</span></h1>
    </div>
    <div class="flex flex-col w-full gap-y-8">
        <div class="flex gap-8 w-full">
            <Case title="FiAR app" subtitle="AR informatieplatform" image={fiar_case_img} />
            <Case title="SmartFix app" subtitle="Platform voor de maakindustrie" image={smartfix_case_img} />
        </div>
        <div class="flex gap-8 w-full">
            <Case title="Website basketbalvereniging DAS Delft" subtitle="Website voor sportclub" image={das_delft_case_img} />
            <Case title="Website Tinteltuin" subtitle="Informatieve website voor Amsterdamse kinderopvang" image={tinteltuin_case_img} />    
        </div>
    </div>
</div>
