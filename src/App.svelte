<script>
  import Navbar from "./lib/navbar.svelte";
  import Cases from "./lib/cases.svelte";
  import Kwaliteiten from "./lib/kwaliteiten.svelte";
  import Footer from "./lib/footer.svelte";
</script>

<main>
    <Navbar />
    <div class="mx-auto max-w-7xl">
      <Cases />
      <Kwaliteiten />

    </div>
    <Footer />

</main>
