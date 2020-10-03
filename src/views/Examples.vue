<template>
    <div id="examples">
        <h1>EXAMPLES</h1>
        <section>
            <DKButton>DEFAULT</DKButton>
        </section>
        <section>
            <DKVideo />
        </section>
        <section>
            <DKPagination />
        </section>
        <section>
            <DKTooltip />
        </section>
        <section>
            <DKHoverbox />
        </section>
        <section>
            <DKPopup>DKPopup</DKPopup>
        </section>
        <section>
            <DKNavbar>
                <h1>DKNavbar</h1>
                <DKButton>Flex</DKButton>
                <DKButton>Spread</DKButton>
            </DKNavbar>
        </section>
        <section>
            <DKSearchbar />
        </section>
        <section>
            <DKTooltip />
        </section>
    </div>
</template>

<script>
import * as DKLib from 'vue-dk-lib';

export default {
    name: 'Home',

    components: {
        DKButton: DKLib.DKButton,
        DKVideo: DKLib.DKVideo,
        DKPagination: DKLib.DKPagination,
        DKTooltip: DKLib.DKTooltip,
        DKHoverbox: DKLib.DKHoverbox,
        DKPopup: DKLib.DKPopup,
        DKNavbar: DKLib.DKNavbar,
        DKSearchbar: DKLib.DKSearchbar,
        DKTooltip: DKLib.DKTooltip,
    },

    setup() {
        document.body.style.background = '#fff';
    },
};
</script>

<style lang="scss">
section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100vh;
}
</style>
