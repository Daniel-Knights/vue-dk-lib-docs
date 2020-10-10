<template>
    <VTNavbar
        position="left"
        :slider="true"
        :containerStyles="{ zIndex: 9 }"
        :styles="{
            background: black,
            width: '250px',
            paddingTop: '100px',
            justifyContent: 'center',
        }"
        :burgerStyles="{ top: '120px' }"
    >
        <nav id="components-nav">
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-button"
                    ><code>&lt;<span>VTButton</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-burger"
                    ><code>&lt;<span>VTBurger</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-hoverbox"
                    ><code>&lt;<span>VTHoverbox</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-navbar"
                    ><code>&lt;<span>VTNavbar</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-pagination"
                    ><code>&lt;<span>VTPagination</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-popup"
                    ><code>&lt;<span>VTPopup</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-searchbar"
                    ><code>&lt;<span>VTSearchbar</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-toggle"
                    ><code>&lt;<span>VTToggle</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-tooltip"
                    ><code>&lt;<span>VTTooltip</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-video"
                    ><code>&lt;<span>VTVideo</span>&gt;</code></router-link
                >
            </VTHoverbox>
        </nav>
    </VTNavbar>
    <div id="component-container">
        <main id="component-view">
            <router-view />
        </main>
    </div>
</template>

<script>
import app from '@/main';

export default {
    name: 'Docs',

    setup() {
        const black = app.$black;
        const hoverboxStyles = { margin: '10px 0', padding: '5px 0' };

        document.body.style.background = app.$white;

        return { black, hoverboxStyles };
    },
};
</script>

<style lang="scss">
#components-nav {
    @include flex-y(center, center);

    a {
        letter-spacing: 1px;
        font-size: clamp(0.9rem, 1.5vw, 1.3rem);
        transition: color 0.1s;

        &:hover {
            color: var(--black);
        }
    }

    .router-link-active {
        color: var(--code-grey);

        span {
            color: var(--code-green);
        }
    }
}

#component-container {
    @include flex-x(center, center);
    position: relative;
    padding: 110px 0 10px;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;
    z-index: 0;

    #component-view {
        @include flex-y(center, center);
        position: relative;
        width: 100%;
        min-height: 70vh;
        border: 2px solid var(--lightgrey);
        border-radius: 5px;
        box-shadow: 0 0 10px -5px var(--black);
    }
}
</style>
