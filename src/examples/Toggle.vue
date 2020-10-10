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
                        <code>:<span class="code-blue">containerStyles</span>="{}"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">toggleStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">initialState</span>="<span class="code-navy">{{
                            propObject.initialState
                        }}</span
                        >"</code
                    >
                    <VTToggle
                        @toggle="
                            propObject.initialState = !propObject.initialState;
                            forceRender();
                        "
                    />
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example contrast-black">
                <VTToggle :initialState="propObject.initialState" :key="key" />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">VTToggle</span>
                    </div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>:<span class="code-blue">toggleStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">initialState</span>="<span class="code-navy">{{
                            propObject.initialState
                        }}</span
                        >"
                    </div>
                    <div class="tag"><span class="code-grey">/&gt;</span></div>
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
    name: 'Hoverbox',

    setup() {
        const key = ref(0);
        const propObject = ref({
            initialState: false,
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTToggle
    :containerStyles="{}"
    :toggleStyles="{}"
    :initialState="${propObject.value.initialState}"
/>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, forceRender, copyCode };
    },
};
</script>
