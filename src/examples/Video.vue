<template>
    <div class="component-playground">
        <div class="options-container">
            <div class="options">
                <div class="option">
                    <VTTooltip
                        text="This is eqiuvalent to ordinary Vue :style bindings but targets specific elements within the component."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code>:<span class="code-blue">styles</span>="{}"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">containerStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">buttonStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Styles for the time-track thumb."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code>:<span class="code-blue">thumbStyles</span>="{}"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Async src loading is supported."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code>
                            <span class="code-blue">videoSrc</span>=<span class="code-string"
                                >"./your/videoSrc.mp4"</span
                            >
                        </code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <VTTooltip
                        text="This is for the aria-label attribute."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code>
                            <span class="code-blue">videoTitle</span>=<span class="code-string"
                                >"Your Video Title"</span
                            >
                        </code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <code>
                        <span class="code-blue">videoPoster</span>=<span class="code-string"
                            >"./your/videoPoster.jpg"</span
                        >
                    </code>
                </div>
                <div class="option">
                    <VTTooltip
                        text="An array of timestamps with an associated title."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code>:<span class="code-blue">timeTags</span>="[{}]"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Enable/disable contextmenu on right click."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code class="prop-overflow"
                            >:<span class="code-blue">contextmenu</span>="<span class="code-navy">{{
                                propObject.contextmenu
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle
                        @toggle="propObject.contextmenu = !propObject.contextmenu"
                        :initialState="true"
                    />
                </div>
                <div class="option">
                    <code
                        ><span class="code-blue">width</span>=<span class="code-string"
                            >"100%"</span
                        ></code
                    >
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">trackColor</span>=<span class="code-string"
                            >"{{ propObject.trackColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.trackColor" maxlength="25" />
                        <input type="color" v-model="propObject.trackColor" />
                    </form>
                </div>
            </div>
        </div>
        <div class="example-container single-panel">
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTVideo</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>:<span class="code-blue">buttonStyles</span>="{}"</div>
                    <div>:<span class="code-blue">thumbStyles</span>="{}"</div>
                    <div>
                        <span class="code-blue">videoSrc</span>=<span class="code-string"
                            >"./your/videoSrc.mp4"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">videoTitle</span>=<span class="code-string"
                            >"Your Video Title"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">videoPoster</span>=<span class="code-string"
                            >"./your/videoPoster.jpg"</span
                        >
                    </div>
                    <div>:<span class="code-blue">timeTags</span>="[{}]"</div>
                    <div>
                        :<span class="code-blue">contextmenu</span>="<span class="code-navy">{{
                            propObject.contextmenu
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">width</span>=<span class="code-string">"100%"</span>
                    </div>
                    <div>
                        <span class="code-blue">trackColor</span>=<span class="code-string"
                            >"{{ propObject.trackColor }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-tag">/></span></div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
    <div>
        <div class="section-sub-title">
            <h3>Default</h3>
        </div>
        <VTVideo
            width="95%"
            :containerStyles="{ margin: '30px 0' }"
            :videoPoster="require('../assets/video-bg.jpg')"
            videoSrc="https://node-images-test.s3.eu-west-2.amazonaws.com/video.mp4"
            videoTitle="Your Video Title"
            :contextmenu="propObject.contextmenu"
            :trackColor="propObject.trackColor"
        />
        <div class="section-sub-title">
            <h3>With Styles/Time-tags</h3>
        </div>
        <VTVideo
            width="95%"
            :buttonStyles="{ backgroundColor: 'red', border: 'none', borderRadius: '1px' }"
            trackColor="red"
            :thumbStyles="{ borderRadius: '5px' }"
            :containerStyles="{ margin: '30px 0', borderRadius: '20px', overflow: 'hidden' }"
            :videoPoster="require('../assets/video-bg.jpg')"
            videoSrc="https://node-images-test.s3.eu-west-2.amazonaws.com/video.mp4"
            :timeTags="tags"
        />
        <div class="section-sub-title">
            <h3>Add time-tags</h3>
        </div>
        <VTVideo
            width="95%"
            :containerStyles="{ margin: '30px 0' }"
            :videoPoster="require('../assets/video-bg.jpg')"
            videoSrc="https://node-images-test.s3.eu-west-2.amazonaws.com/video.mp4"
            :timeTags="dynamicTags"
            :key="key"
        />
        <form @submit.prevent="addTag()" class="add-tags">
            <code>
                timeTags: [{ title: "<input type="text" v-model="tag.title" />" timestamp: "<input
                    style="width: 25px"
                    type="text"
                    v-model="tag.timestamp"
                />" }]
            </code>
            <VTButton
                :styles="{
                    display: 'inline-block',
                    marginLeft: '10px',
                    height: '30px',
                    minWidth: '50px',
                    fontSize: '15px',
                }"
                >ADD TAG</VTButton
            >
        </form>
        <div class="section-sub-title">
            <h3>Async Source Loading</h3>
        </div>
        <VTVideo
            width="95%"
            :containerStyles="{ margin: '30px 0' }"
            :videoPoster="require('../assets/video-bg.jpg')"
            :videoSrc="asyncSrc"
        />
        <div class="async-src">
            <VTButton
                :styles="{ margin: '0 auto' }"
                @click="asyncSrc = src"
                :disabled="asyncSrc === src"
                >LOAD SOURCE</VTButton
            >
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import app from '@/main';

export default {
    name: 'Video',

    setup() {
        const key = ref(0);
        const propObject = ref({ contextmenu: true, trackColor: '#5bd0b9' });
        const tags = [
            { title: 'A time tag!', timestamp: '10' },
            { title: 'A time tag!', timestamp: '20' },
            { title: 'A time tag!', timestamp: '30' },
            { title: 'A time tag!', timestamp: '40' },
            { title: 'A time tag!', timestamp: '45' },
        ];
        const dynamicTags = ref([]);
        const tag = ref({
            title: 'A time tag!',
            timestamp: '10',
        });
        const code = computed(() => {
            return `<VTVideo
    :styles="{}"
    :containerStyles="{}"
    :buttonStyles="{}"
    :thumbStyles="{}"
    videoSrc="./your/videoSrc.mp4"
    videoTitle="Your Video Title"
    videoPoster="./your/videoPoster.jpg"
    :timeTags="[]"
    :contextmenu="${propObject.value.contextmenu}"
    width="100%"
    trackColor="${propObject.value.trackColor}"
/>`;
        });
        const asyncSrc = ref('');
        const src = 'https://node-images-test.s3.eu-west-2.amazonaws.com/video.mp4';

        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const addTag = () => {
            dynamicTags.value.push({ ...tag.value });
            key.value++;
        };

        return { key, propObject, tags, dynamicTags, tag, asyncSrc, src, copyCode, addTag };
    },
};
</script>

<style lang="scss">
@import '@/sass/_variables.scss';

.add-tags {
    margin-bottom: 40px;
    font-size: 15px;
    color: var(--black);
}
.async-src {
    margin-bottom: 40px;

    button[disabled],
    button[disabled]:hover {
        cursor: default;
        color: darken($white, 20%);
        background-color: darken($primary, 20%);
        box-shadow: 0 0 5px -3px var(--black);
    }
}
</style>
