<template>
    <DKNavbar
        :position="position"
        :slider="slider"
        :containerStyles="{ position: 'absolute', maxHeight: '70vh' }"
        :key="key"
    >
        <h1>DKNavbar</h1>
        <div class="nav-buttons">
            <DKButton>Nav</DKButton>
            <DKButton>Ception</DKButton>
        </div>
    </DKNavbar>
    <select v-model="position" @change="forceRender()">
        <option value="top">top</option>
        <option value="right">right</option>
        <option value="bottom">bottom</option>
        <option value="left">left</option>
    </select>
    <DKToggle
        @toggle="
            slider = !slider;
            forceRender();
        "
    />
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Navbar',

    setup() {
        const position = ref('top');
        const key = ref(0);
        const slider = ref(false);

        const forceRender = () => key.value++;

        return { position, key, slider, forceRender };
    },
};
</script>

<style lang="scss">
.nav-buttons {
    flex: 1;
}
</style>
