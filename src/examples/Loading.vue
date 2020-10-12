<template>
    <div class="component-playground">
        <div class="options-container">
            <div class="options">
                <div class="option">
                    <VTTooltip
                        text="This is eqiuvalent to ordinary Vue :style bindings but targets specific elements within the component."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code>:<span class="code-blue">styles</span>="{}"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">containerStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <VTTooltip
                        text="When set to true, stores a cookie which prevents it from returning."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code
                            >:<span class="code-blue">default</span>="<span class="code-navy">{{
                                propObject.default
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle @toggle="toggleDefault()" :initialState="true" />
                </div>
                <div class="option button-center">
                    <VTButton @click="enterFullscreen()">FULLSCREEN</VTButton>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example overflow-hidden">
                <VTLoading
                    :styles="{
                        position: 'absolute',
                        right: 'unset',
                    }"
                    :default="propObject.default"
                    :key="key"
                />
                <teleport v-if="fullscreen" to="body">
                    <div id="exit-fullscreen">
                        <span>Click or press esc to exit fullscreen</span>
                    </div>
                    <VTLoading
                        @click="fullscreen = false"
                        @keyup.esc="fullscreen = false"
                        :styles="{
                            position: 'absolute',
                            right: 'unset',
                        }"
                        :default="propObject.default"
                        :key="key"
                    />
                </teleport>
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">VTLoading</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">default</span>="<span class="code-navy">{{
                            propObject.default
                        }}</span
                        >"
                    </div>
                    <div class="tag"><span class="code-grey">&gt;</span></div>
                    <div>&lt;!-- Optional Slot --></div>
                    <div class="tag">
                        <span class="code-grey">&lt;/</span><span class="code-green">VTLoading</span
                        ><span class="code-grey">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import app from '@/main';

export default {
    name: 'Loading',

    setup() {
        const key = ref(0);
        const propObject = ref({
            default: true,
        });
        const fullscreen = ref(false);

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTLoading
    :styles="{}"
    :containerStyles="{}"
    :default="${propObject.value.default}"
>
    <!-- Optional Slot -->
</VTLoading>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const toggleDefault = () => {
            propObject.value.default = !propObject.value.default;
            forceRender();
        };
        const enterFullscreen = () => {
            fullscreen.value = true;
        };

        return {
            key,
            propObject,
            fullscreen,
            forceRender,
            copyCode,
            toggleDefault,
            enterFullscreen,
        };
    },
};
</script>
