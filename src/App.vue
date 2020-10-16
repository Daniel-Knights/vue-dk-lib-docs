<template>
    <VTNavbar :styles="navbarStyles">
        <router-link to="/" id="home-link"
            ><h1>Vuelity | {{ $route.name }}</h1></router-link
        >
        <nav id="nav-links">
            <VTHoverbox :height="50"><router-link to="/">Home</router-link></VTHoverbox>
            |
            <VTHoverbox :height="50"
                ><router-link to="/docs/vt-button">Docs</router-link></VTHoverbox
            >
            |
            <VTHoverbox :height="50"
                ><a href="https://github.com/Daniel-Knights/vuelity" rel="noopener" target="_blank"
                    >Github <i class="fa fa-github"></i></a
            ></VTHoverbox>
        </nav>
    </VTNavbar>
    <router-view />
    <VTTooltip
        text="Try a full demo on Codepen!"
        position="left"
        :containerStyles="{ position: 'fixed', bottom: '30px', right: '40px' }"
    >
        <a
            href="https://codepen.io/daniel-knights/pen/jOrOVXX"
            target="_blank"
            rel="noopener"
            class="codepen"
        >
            <VTButton
                :styles="{
                    position: 'relative',
                    minWidth: '50px',
                    height: '50px',
                    borderRadius: '50%',
                }"
                :ripple="false"
            >
                <i class="fa fa-codepen"></i>
            </VTButton>
        </a>
    </VTTooltip>
</template>

<script>
export default {
    name: 'App',

    setup() {
        const navbarStyles = {
            justifyContent: 'space-between',
            position: 'absolute',
            padding: '0 20px',
            background: '#5bd0b9',
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
    font-size: clamp(15px, 2vw, 18px);
}
a:not(.codepen) {
    padding: 10px;
    text-decoration: none;
    color: var(--white);
}
</style>
