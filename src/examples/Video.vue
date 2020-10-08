<template>
    <h1 class="coming-soon">COMING SOON</h1>
    <!-- <VTVideo
        videoId="1"
        :videoFocused="videoFocused"
        @video-focused="focusHandler('1')"
        @click="focusHandler('1')"
        :videoPoster="require('../assets/video-bg.jpg')"
        :videoSrc="require('../assets/video.mp4')"
    /> -->
    <!-- <div class="section-sub-title">
        <h3>With styles/time-tags</h3>
    </div>
    <VTVideo
        videoId="2"
        :videoFocused="videoFocused"
        @video-focused="focusHandler('2')"
        @click="focusHandler('2')"
        :buttonStyles="{ backgroundColor: 'red', border: 'none', borderRadius: '1px' }"
        trackColor="red"
        :thumbStyles="{ borderRadius: '5px' }"
        :containerStyles="extraStyles"
        :videoPoster="require('../assets/video-bg.jpg')"
        :videoSrc="require('../assets/video.mp4')"
        :timeTags="tags"
    /> -->
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Video',

    setup() {
        const extraStyles = {
            borderRadius: '20px',
            overflow: 'hidden',
        };
        const buttonStyles = {};
        const thumbStyles = {};
        const trackColor = {};
        const tags = [
            { title: 'A time tag!', timestamp: '10' },
            { title: 'A time tag!', timestamp: '20' },
            { title: 'A time tag!', timestamp: '30' },
            { title: 'A time tag!', timestamp: '40' },
            { title: 'A time tag!', timestamp: '45' },
        ];
        const videoFocused = ref('');

        const focusHandler = id => (videoFocused.value = id);

        return { extraStyles, tags, videoFocused, focusHandler };
    },
};
</script>

<style lang="scss">
.coming-soon {
    color: var(--black);
}
</style>
