<script>
  import { Router, Route } from "svelte-routing";

  import Navbar from "./lib/navbar.svelte";
  import Footer from "./lib/footer.svelte";

  import Home from "./pages/home.svelte";
  import About from "./pages/about.svelte";
  import Contact from "./pages/contact.svelte";

  let url = "";
</script>

<main class="selection:bg-groen selection:text-white">
    <Router url="{url}">
      <Navbar />
      <div class="mx-auto max-w-7xl">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>

</main>
