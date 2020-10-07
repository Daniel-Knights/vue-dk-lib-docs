<template>
    <div id="tooltip-container">
        <VTTooltip text="Hello there!" :style="tooltipStyles"
            ><code>position="top"</code></VTTooltip
        >
        <VTTooltip text="Hello there!" position="right" :style="tooltipStyles"
            ><code>position="right"</code></VTTooltip
        >
        <VTTooltip text="Hello there!" position="left" :style="tooltipStyles"
            ><code>position="left"</code></VTTooltip
        >
        <VTTooltip text="Hello there!" position="bottom" :style="tooltipStyles"
            ><code>position="bottom"</code></VTTooltip
        >
        <VTTooltip text="Hello there!" position="bottom" :style="tooltipStyles" :arrow="false"
            ><code>:arrow="false"</code></VTTooltip
        >
        <VTTooltip
            text="Hello there!"
            position="bottom"
            :style="tooltipStyles"
            :arrow="false"
            :styles="{ backgroundColor: '#5aafff' }"
            ><code>:styles="{ backgroundColor: '#5aafff' }"</code></VTTooltip
        >
    </div>
</template>

<script>
export default {
    name: 'Tooltip',

    setup() {
        const tooltipStyles = { margin: '10px' };

        return { tooltipStyles };
    },
};
</script>

<style lang="scss">
#tooltip-container {
    display: grid;
    grid-template-columns: 50% 50%;

    code {
        white-space: pre;
    }
}
</style>
