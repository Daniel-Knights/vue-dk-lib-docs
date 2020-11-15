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
                    <VTTooltip
                        text="Toggles between the default Vuelity animation and a normal spinner animation."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            >:<span class="code-blue">default</span>="<span class="code-navy">{{
                                propObject.default
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle @toggle="toggleProp('default')" :initialState="true" />
                </div>
                <div class="option">
                    <VTTooltip
                        text="Sets the overflow property on the body tag to hidden and a fixed position to the loading container."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code class="prop-overflow"
                            >:<span class="code-blue">fullscreen</span>="<span class="code-navy">{{
                                propObject.fullscreen
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle
                        @toggle="
                            toggleProp('fullscreen');
                            toggleDisplay();
                        "
                    />
                </div>
                <div class="option button-center">
                    <VTButton :styles="{ marginBottom: '10px' }" @click="fullscreenDisplay = true"
                        >FULLSCREEN</VTButton
                    >
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example overflow-hidden">
                <VTLoading
                    :default="propObject.default"
                    :key="key"
                    :containerStyles="{ borderRadius: '10px', zIndex: '0' }"
                />
                <teleport v-if="fullscreenDisplay" to="body">
                    <div id="exit-fullscreen">
                        <span>Click or press esc to exit fullscreen</span>
                    </div>
                    <VTLoading
                        @click="fullscreenDisplay = false"
                        :default="propObject.default"
                        :fullscreen="true"
                        :key="key"
                    />
                </teleport>
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTLoading</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">default</span>="<span class="code-navy">{{
                            propObject.default
                        }}</span
                        >"
                    </div>
                    <div class="tag"><span class="code-tag">&gt;</span></div>
                    <div>&lt;!-- Optional Slot --></div>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span><span class="code-green">VTLoading</span
                        ><span class="code-tag">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, reactive, ref } from 'vue';
import app from '@/main';

export default {
    name: 'Loading',

    setup() {
        const key = ref(0);
        const propObject = reactive({
            default: true,
            fullscreen: false,
        });
        const fullscreenDisplay = ref(false);

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTLoading
    :styles="{}"
    :containerStyles="{}"
    :default="${propObject.default}"
    :fullscreen="${propObject.fullscreen}"
>
    <!-- Optional Slot -->
</VTLoading>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const toggleProp = property => {
            propObject[property] = !propObject[property];
            forceRender();
        };
        const toggleDisplay = () => {
            if (propObject.fullscreen === true) {
                fullscreenDisplay.value = true;
            }
        };
        const fullscreenListener = e => {
            if (e.key !== 'Escape') return;
            fullscreenDisplay.value = false;
        };

        document.addEventListener('keydown', fullscreenListener);
        onBeforeUnmount(() => document.removeEventListener('keydown', fullscreenListener));

        return {
            key,
            propObject,
            fullscreenDisplay,
            forceRender,
            copyCode,
            toggleProp,
            toggleDisplay,
            fullscreenListener,
        };
    },
};
</script>
