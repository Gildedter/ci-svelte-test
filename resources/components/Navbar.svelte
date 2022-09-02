<script>
    import { location } from 'svelte-spa-router';
    import {
        Navbar,
        NavbarToggler,
        Nav,
        NavbarBrand,
        NavLink,
        Offcanvas,
    } from 'sveltestrap';
    import ciSvelte from '@/assets/logos/ci-svelte.webp';

    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<Navbar color="primary" light>
    <NavbarBrand href="#/" class="me-auto">
        <img
            src={ciSvelte}
            class="lg:w-25 w-20"
            alt="Codeigniter vite logo"
        /></NavbarBrand
    >
    <NavbarToggler on:click={toggle} class="me-2" />
    <Offcanvas {isOpen} {toggle} placement="end" style="width: 20em">
        <NavbarBrand href="#/" class="me-auto" slot="header">
            <img
                src={ciSvelte}
                class="lg:w-25 w-20"
                alt="Codeigniter vite logo"
            />
        </NavbarBrand>
        <Nav vertical>
            <NavLink href="#/" active={$location == '/'}>Home</NavLink>
            <NavLink href="#/about" active={$location == '/about'}
                >About</NavLink
            >
        </Nav>
    </Offcanvas>
</Navbar>
