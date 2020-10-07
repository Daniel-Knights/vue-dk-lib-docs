<template>
    <VTNavbar
        :position="propObject.position"
        :slider="propObject.slider"
        :containerStyles="{ position: 'absolute', maxHeight: '70vh' }"
        :key="key"
    >
        <h1>DKNavbar</h1>
    </VTNavbar>
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
                    <code>:<span class="code-blue">burgerStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <code
                        ><span class="code-blue">position</span>=<span class="code-orange"
                            >"{{ propObject.position }}"</span
                        ></code
                    >
                    <select v-model="propObject.position" @change="forceRender()">
                        <option value="top">top</option>
                        <option value="right">right</option>
                        <option value="bottom">bottom</option>
                        <option value="left">left</option>
                    </select>
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">slider</span>="<span class="code-navy"></span
                        >"</code
                    >
                    <VTToggle
                        @toggle="
                            propObject.slider = !propObject.slider;
                            forceRender();
                        "
                    />
                </div>
            </div>
        </div>
        <div class="example-container single-panel">
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">DKNavbar</span>
                    </div>
                    <div><span class="code-blue">styles</span>="{}"</div>
                    <div><span class="code-blue">containerStyles</span>="{}"</div>
                    <div><span class="code-blue">burgerStyles</span>="{}"</div>
                    <div>
                        <span class="code-blue">position</span>=<span class="code-orange"
                            >"{{ propObject.position }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">slider</span>="<span class="code-navy">{{
                            propObject.slider
                        }}</span
                        >"
                    </div>
                    <div class="tag"><span class="code-grey">&gt;</span></div>
                    <VTTooltip text="Vue slot for any valid HTML">
                        &lt;h1>DKNavbar&lt;/h1>
                    </VTTooltip>
                    <div class="tag">
                        <span class="code-grey">&lt;/</span><span class="code-green">DKNavbar</span
                        ><span class="code-grey">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import app from '@/main';

export default {
    name: 'Navbar',

    setup() {
        const key = ref(0);
        const propObject = ref({
            position: 'top',
            slider: false,
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTNavbar
    :styles="{}"
    :containerStyles="{}"
    :burgerStyles="{}"
    :position="${propObject.value.position}"
    :slider="${propObject.value.slider}"
>
    <h1>DKNavbar</h1>
</VTNavbar>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, forceRender, copyCode };
    },
};
</script>

<style lang="scss">
.nav-buttons {
    flex: 1;
}
</style>
