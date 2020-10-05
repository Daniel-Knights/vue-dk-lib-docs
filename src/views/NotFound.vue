<template>
    <div id="not-found">
        <h1>PAGE NOT FOUND</h1>
    </div>
</template>

<script>
export default {
    name: 'NotFound',

    setup() {
        document.title = 'Page Not Found | Vue DK Lib';
    },
};
</script>

<style lang="scss">
#not-found {
    @include flex-x(center, center);
    height: 100vh;
}
</style>
