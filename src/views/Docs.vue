<template>
    <VTNavbar
        position="left"
        :slider="true"
        :containerStyles="{ zIndex: 9 }"
        :styles="{
            background: codeBg,
            width: '250px',
            paddingTop: '100px',
            justifyContent: 'center',
        }"
        :burgerStyles="{ top: '120px', background: '#47cab0' }"
    >
        <nav id="components-nav">
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-button"
                    ><code>&lt;<span>DKButton</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-hoverbox"
                    ><code>&lt;<span>DKHoverbox</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-navbar"
                    ><code>&lt;<span>DKNavbar</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-pagination"
                    ><code>&lt;<span>DKPagination</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-popup"
                    ><code>&lt;<span>DKPopup</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-searchbar"
                    ><code>&lt;<span>DKSearchbar</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-toggle"
                    ><code>&lt;<span>DKToggle</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-tooltip"
                    ><code>&lt;<span>DKTooltip</span>&gt;</code></router-link
                >
            </VTHoverbox>
            <VTHoverbox :containerStyles="hoverboxStyles">
                <router-link to="/docs/dk-video"
                    ><code>&lt;<span>DKVideo</span>&gt;</code></router-link
                >
            </VTHoverbox>
        </nav>
    </VTNavbar>
    <div id="component-container">
        <main id="component-view">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Docs',

    setup() {
        const codeBg = getComputedStyle(document.documentElement).getPropertyValue('--black');
        const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        const hoverboxStyles = { margin: '10px 0', padding: '5px 0' };

        document.body.style.background = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--white');
        document.title = 'Docs | Vuelity';

        return { codeBg, hoverboxStyles };
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
    top: 100px;
    margin: 0 auto;
    max-width: 1200px;
    height: calc(100vh - 100px);
    z-index: 0;

    #component-view {
        @include flex-y(center, center);
        position: relative;
        width: 100%;
        min-height: 70vh;
        border: 2px solid var(--lightgrey);
        border-radius: 5px;
        box-shadow: 0 0 10px -5px var(--black);
        overflow: hidden;
    }
}
</style>
