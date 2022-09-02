<script>
    import Router from 'svelte-spa-router';
    import routes from '@/routes.js';
    import Navbar from '@/components/Navbar.svelte';
    import MainFooter from '@/components/MainFooter.svelte';
</script>

<!-- BOOTSWATCH MINTY THEME -->
<svelte:head>
    <!-- <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@5/dist/minty/bootstrap.min.css"
    /> -->
</svelte:head>

<Navbar />

<main>
    <Router {routes} />
</main>

<MainFooter />
