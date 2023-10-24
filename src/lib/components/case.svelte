<script>
    import placeholder_image from '../../assets/FiAR_Case.png';

    export let title = "FiAR app";
    export let subtitle = "AR informatieplatform";
    export let image = placeholder_image;
</script>

<div class="flex flex-col gap-6 w-full">
    <img src={image} alt={title} class="rounded-3xl h-[328px] object-cover" style="object-position: 50% 10%;">
    <div class="flex flex-col gap-1">
        <p class="text-2xl/[100%] font-bold text-donker-blauw">{title}</p>
        <p class="text-base/[100%] text-licht-grijs-tekst">{subtitle}</p>
    </div>
</div>