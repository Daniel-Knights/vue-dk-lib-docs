<template>
    <DKNavbar :styles="navbarStyles">
        <router-link to="/"
            ><h1>Vue DK Lib | {{ $route.name }}</h1></router-link
        >
        <nav id="nav-links">
            <DKHoverbox :height="50"><router-link to="/">Home</router-link></DKHoverbox>
            |
            <DKHoverbox :height="50"
                ><router-link to="/docs/dk-button">Docs</router-link></DKHoverbox
            >
            |
            <DKHoverbox :height="50"
                ><a
                    href="https://github.com/Daniel-Knights/vue-dk-lib"
                    rel="noopener"
                    target="_blank"
                    >Github <i class="fa fa-github"></i></a
            ></DKHoverbox>
        </nav>
    </DKNavbar>
    <router-view />
</template>

<script>
export default {
    name: 'App',

    setup() {
        const navbarStyles = {
            justifyContent: 'space-between',
            position: 'absolute',
            padding: '0 20px',
        };

        return { navbarStyles };
    },
};
</script>

<style lang="scss">
#nav-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 33%;
    min-width: 300px;
}
a {
    padding: 10px;
    text-decoration: none;
    color: var(--white);
}
</style>
