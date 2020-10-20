<template>
    <VTNavbar
        :position="propObject.position"
        :slider="propObject.slider"
        :containerStyles="{ position: 'absolute', height }"
        :styles="{ height: '100%' }"
        :key="key"
    >
        <h1>VTNavbar</h1>
    </VTNavbar>
    <div class="component-playground">
        <div class="options-container" :class="responsiveNavClass()">
            <div class="options">
                <div class="option">
                    <VTTooltip
                        text="This is eqiuvalent to ordinary Vue :style bindings but targets specific elements within the component."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                    >
                        <code>:<span class="code-blue">styles</span>="{}"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">containerStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">burgerStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <code
                        ><span class="code-blue">position</span>=<span class="code-string"
                            >"{{ propObject.position }}"</span
                        ></code
                    >
                    <select v-model="propObject.position" @change="navHeight()">
                        <option value="top">top</option>
                        <option value="right" ref="right">right</option>
                        <option value="bottom">bottom</option>
                        <option value="left" ref="left">left</option>
                    </select>
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">slider</span>="<span class="code-navy">{{
                            propObject.slider
                        }}</span
                        >"</code
                    >
                    <VTToggle @toggle="toggleProp('slider')" />
                </div>
            </div>
        </div>
        <div class="example-container single-panel">
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTNavbar</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>:<span class="code-blue">burgerStyles</span>="{}"</div>
                    <div>
                        <span class="code-blue">position</span>=<span class="code-string"
                            >"{{ propObject.position }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">slider</span>="<span class="code-navy">{{
                            propObject.slider
                        }}</span
                        >"
                    </div>
                    <div class="tag"><span class="code-tag">&gt;</span></div>
                    <VTTooltip text="Vue slot for any valid HTML">
                        <span class="code-tag">&lt;</span><span class="code-navy">h1</span
                        ><span class="code-tag">></span>VTNavbar<span class="code-tag">&lt;</span
                        ><span class="code-navy">h1</span><span class="code-tag">></span>
                    </VTTooltip>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span><span class="code-green">VTNavbar</span
                        ><span class="code-tag">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import app from '@/main';

export default {
    name: 'Navbar',

    setup() {
        const right = ref(null);
        const left = ref(null);
        const key = ref(0);
        const propObject = ref({
            position: 'top',
            slider: false,
        });
        const largeMediaQuery = window.matchMedia('(max-width: 992px)');
        const smallMediaQuery = window.matchMedia('(max-width: 576px)');
        const height = ref('100px');

        const forceRender = () => key.value++;
        const toggleProp = prop => {
            propObject.value[prop] = !propObject.value[prop];
            forceRender();
        };
        const code = computed(() => {
            return `<VTNavbar
    :styles="{}"
    :containerStyles="{}"
    :burgerStyles="{}"
    :position="${propObject.value.position}"
    :slider="${propObject.value.slider}"
>
    <h1>VTNavbar</h1>
</VTNavbar>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        // Readjust nav container height
        const navHeight = () => {
            const position = propObject.value.position;

            if (position === 'left' || position === 'right') {
                height.value = '100%';
            } else height.value = '100px';

            forceRender();
        };
        const responsiveNavClass = () => {
            if (!largeMediaQuery.matches) return;

            const position = propObject.value.position;

            if (position === 'left') return 'mobile-nav-left';
            if (position === 'right') return 'mobile-nav-right';
        };
        // Prevent left/right positions if screensize is below 576px
        const disableOptions = () => {
            if (!right.value || !left.value) return;
            if (smallMediaQuery.matches) {
                const position = propObject.value.position;

                right.value.disabled = true;
                left.value.disabled = true;

                if (position === 'top' || position === 'bottom') return;

                propObject.value.position = 'top';
                navHeight();
            } else {
                right.value.disabled = false;
                left.value.disabled = false;
            }
        };

        onMounted(() => {
            document.getElementById('component-view').style.overflow = 'hidden';
            window.addEventListener('resize', disableOptions);
            disableOptions();
        });
        onBeforeUnmount(
            () => (document.getElementById('component-view').style.overflow = 'visible')
        );

        return {
            right,
            left,
            key,
            propObject,
            largeMediaQuery,
            height,
            toggleProp,
            copyCode,
            navHeight,
            responsiveNavClass,
        };
    },
};
</script>

<style lang="scss">
.nav-buttons {
    flex: 1;
}
</style>
