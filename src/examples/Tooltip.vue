<template>
    <DKTooltip text="I'm a tooltip!" :style="tooltipStyles">Hover Me!</DKTooltip>
    <DKTooltip text="I'm a tooltip!" position="right" :style="tooltipStyles">Hover Me!</DKTooltip>
    <DKTooltip text="I'm a tooltip!" position="left" :style="tooltipStyles">Hover Me!</DKTooltip>
    <DKTooltip text="I'm a tooltip!" position="bottom" :style="tooltipStyles">Hover Me!</DKTooltip>
</template>

<script>
import { DKTooltip } from 'vue-dk-lib';

export default {
    name: 'Tooltip',

    components: { DKTooltip },

    setup() {
        const tooltipStyles = { margin: '10px' };

        return { tooltipStyles };
    },
};
</script>

<style lang="scss"></style>
