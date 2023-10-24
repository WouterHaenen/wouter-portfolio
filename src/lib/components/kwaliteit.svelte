<script>
    export let title = "titel van component";
    export let content = "content van component";
    export let icon = placeholder_icon;
    
    import placeholder_icon from '../../assets/Fire.svg';
</script>

<div class="flex flex-col gap-6 w-full">
    <div class="w-20 h-20 bg-donker-blauw rounded-full relative">
        <img src={icon} alt="icon" class="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    </div>
    <div class="flex flex-col gap-1">
        <p class="text-base/[100%] font-bold text-donker-blauw">{title}</p>
        <p class="text-base text-donker-grijs-tekst">{content}</p>
    </div>
</div>