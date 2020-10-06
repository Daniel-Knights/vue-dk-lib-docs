<template>
    <div id="hoverbox-container">
        <DKHoverbox>Hover Me!</DKHoverbox>
        <DKHoverbox
            fill="rgba(0,0,0,0.5)"
            :height="100"
            :width="100"
            :styles="{ borderRadius: '50%', boxShadow: '0 0 5px #fff' }"
            >With Styles!</DKHoverbox
        >
        <DKHoverbox :width="200">Set Width!</DKHoverbox>
        <DKHoverbox :height="50">Set Height!</DKHoverbox>
    </div>
</template>

<script>
export default {
    name: 'Hoverbox',
};
</script>

<style lang="scss">
#hoverbox-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
    color: var(--white);
    background-color: var(--primary);
    border-radius: 10px;
}
</style>
