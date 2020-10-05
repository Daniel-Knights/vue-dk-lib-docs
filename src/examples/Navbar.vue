<template>
    <DKNavbar>
        <h1>DKNavbar</h1>
        <DKButton>Flex</DKButton>
        <DKButton>Spread</DKButton>
    </DKNavbar>
    <div class="bottom-nav">
        <DKNavbar position="bottom" :style="navbarStyles">
            <h1>DKNavbar</h1>
            <DKButton>Flex</DKButton>
            <DKButton>Spread</DKButton>
        </DKNavbar>
    </div>
</template>

<script>
import { DKNavbar, DKButton } from 'vue-dk-lib';

export default {
    name: 'Navbar',

    components: { DKNavbar, DKButton },

    setup() {
        const navbarStyles = { position: 'sticky' };

        return { navbarStyles };
    },
};
</script>

<style lang="scss">
.bottom-nav {
    display: block;
    width: 100%;
    height: 50vh;
}
</style>
