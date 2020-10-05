<template>
    <DKNavbar :styles="navbarStyles">
        <router-link to="/"><h1>Vue DK Lib | Docs</h1></router-link>
        <nav id="nav-links">
            <DKHoverbox :height="50"><router-link to="/">Home</router-link></DKHoverbox>
            |
            <DKHoverbox :height="50"><router-link to="/examples">Examples</router-link></DKHoverbox>
            |
            <DKHoverbox :height="50"><router-link to="/api">API</router-link></DKHoverbox>
        </nav>
    </DKNavbar>
    <router-view />
</template>

<script>
import { DKNavbar, DKHoverbox } from 'vue-dk-lib';

export default {
    name: 'App',

    components: { DKNavbar, DKHoverbox },

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
