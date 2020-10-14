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
                <div class="option">
                    <VTTooltip
                        text="For programmatically changing the toggles value."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code
                            >:<span class="code-blue">state</span>="<span class="code-navy">{{
                                propObject.state
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle @toggle="propObject.state = !propObject.state" />
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">hoverColor</span>=<span class="code-string"
                            >"{{ propObject.hoverColor }}"</span
                        ></code
                    >
                    <form @submit.prevent="forceRender()">
                        <input type="text" v-model="propObject.hoverColor" maxlength="25" />
                        <input type="color" v-model="propObject.hoverColor" />
                    </form>
                </div>
                <div class="option">
                    <code>
                        @<span class="code-blue">toggle</span>="<span class="code-method"
                            >logValue</span
                        >(<span class="code-blue">$event</span>)"
                    </code>
                    <code>{{ propObject.logState }}</code>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example contrast-black">
                <VTToggle
                    @toggle="propObject.logState = !propObject.logState"
                    :initialState="propObject.initialState"
                    :state="propObject.state"
                    :hoverColor="propObject.hoverColor"
                    :key="key"
                />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTToggle</span>
                    </div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>:<span class="code-blue">toggleStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">initialState</span>="<span class="code-navy">{{
                            propObject.initialState
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">state</span>="<span class="code-navy">{{
                            propObject.state
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">hoverColor</span>=<span class="code-string"
                            >"{{ propObject.hoverColor }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-tag">/&gt;</span></div>
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
            state: false,
            hoverColor: '#ededed',
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTToggle
    :containerStyles="{}"
    :toggleStyles="{}"
    :initialState="${propObject.value.initialState}"
    :state="${propObject.value.state}"
    hoverColor="${propObject.value.hoverColor}"
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
