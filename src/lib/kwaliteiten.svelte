<script>
    import Kwaliteit from "./components/kwaliteit.svelte";
    import fire_icon from '../assets/Fire.svg';
    import users_icon from '../assets/Users.svg';
    import hands_icon from '../assets/Hands.svg';
</script>

<div class="flex flex-col mt-32 gap-y-10 mx-20">
    <div class="flex flex-col gap-y-2">
        <h2 class="text-4xl/[100%] font-bold text-donker-blauw">Mijn kwaliteiten<span class="text-groen">.</span></h2>
        <p class="text-base text-donker-grijs-tekst w-1/2">Tijdens mijn sportopleiding groeide mijn interesse voor design zo sterk dat ik besloot een vervolgstudie UI/UX design te volgen om zo een goede basis te leggen voor het vak van UI/UX designer. Dit maakt mij tot een veelzijdige allround designer die begrijpt dat design meer is dan de ‘look and feel’.</p>
    </div>
    <div class="flex gap-x-8">
        <Kwaliteit icon={fire_icon} title="UX Design vanuit passie" content="Ik ben is een enthousiaste, jonge UI/UX designer met een passie voor interface design. Deze passie is ontstaan vanuit zijn fascinatie voor grote technologiebedrijven zoals Apple en Google." />
        <Kwaliteit icon={hands_icon} title="Ondernemende teamplayer" content="Ik ben een echte teamplayer die goed kan luisteren en zijn verantwoordelijkheid neemt. Mijn goede communicatieve vaardigheden en creativiteit stellen mij in staat developers, stakeholders en gebruikers aan elkaar te verbinden. Ik ben een doorzetter die graag het initiatief neemt." />
        <Kwaliteit icon={users_icon} title="De gebruiker centraal" content="Ik ben in staat de behoeften van gebruikers en organisaties goed te onderzoeken. Ik heb een sterk empathisch en analytische vermogen en achterhaal de gebruikerswensen door de gebruiker centraal te zetten." />
    </div>
</div>