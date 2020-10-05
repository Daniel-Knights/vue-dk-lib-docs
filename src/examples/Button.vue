<template>
    <div id="btn-container">
        <DKButton>DEFAULT</DKButton>
        <DKButton :rainbow="true">RAINBOW</DKButton>
        <DKButton :fill="true" :onlyBorder="true">FILL</DKButton>
        <DKButton :shine="true">SHINE</DKButton>
    </div>
</template>

<script>
import { DKButton } from 'vue-dk-lib';

export default {
    name: 'Button',

    components: { DKButton },
};
</script>

<style lang="scss">
#btn-container {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10px;
}
</style>
