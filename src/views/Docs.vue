<template>
    <VTNavbar
        position="left"
        :slider="true"
        :containerStyles="{
            zIndex: 5,
        }"
        :styles="{
            justifyContent: 'unset',
            padding: '0',
            width: '250px',
            height: '200vh',
            background: black,
        }"
        :burgerStyles="{ top: '120px' }"
    >
        <div id="side-nav-heading">
            <h1>Vuelity</h1>
        </div>
        <nav id="components-nav">
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-burger"
                    ><code>&lt;<span>VTBurger</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-button"
                    ><code>&lt;<span>VTButton</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-hoverbox"
                    ><code>&lt;<span>VTHoverbox</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-loading"
                    ><code>&lt;<span>VTLoading</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-modal"
                    ><code>&lt;<span>VTModal</span>&gt;</code></router-link
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
                <router-link to="/docs/vt-scrolltop"
                    ><code>&lt;<span>VTScrolltop</span>&gt;</code></router-link
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
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-toast"
                    ><code><span>VTToast</span></code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/vt-tabber"
                    ><code><span>vtTabber()</span></code></router-link
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
        const black = app.$global.$black;
        const hoverboxStyles = { display: 'flex', margin: '10px auto', padding: '5px 0' };

        document.body.style.background = app.$global.$white;

        return { black, hoverboxStyles };
    },
};
</script>

<style lang="scss">
// Side nav
#side-nav-heading {
    @include flex-x(center, center);
    height: 100px;

    h1 {
        border-bottom: 3px solid var(--primary);
    }
}
#components-nav {
    display: grid;
    position: relative;
    padding: 20px 0;
    max-height: calc(100vh - 100px);
    width: 100%;
    overflow: scroll;

    a {
        letter-spacing: 1px;
        font-size: clamp(1.1rem, 1.5vw, 1.3rem);
        transition: color 0.1s;

        &:hover {
            color: var(--black);
        }
    }

    .router-link-active {
        color: var(--code-tag);

        span {
            color: var(--code-green);
        }
    }
}

// Component playground container
#component-container {
    @include flex-x(center, center);
    position: relative;
    padding: 130px 0 30px;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;
    z-index: 0;

    #component-view {
        @include flex-y(center, center);
        position: relative;
        margin: 5px;
        width: calc(100% - 10px);
        min-height: 70vh;
        border: 2px solid var(--light-grey);
        border-radius: 10px;
        box-shadow: 0 0 6px -2px var(--black);

        .vt__navbar-inner {
            padding: 10px !important;
        }
        &.nav-xs {
            border: 2px solid var(--light-grey) !important;
            padding: 5px;
        }
    }
}
</style>
