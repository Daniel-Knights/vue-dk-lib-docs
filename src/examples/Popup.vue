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
                    <VTTooltip
                        text="When set to true, stores a cookie which prevents it from returning."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            >:<span class="code-blue">cookie</span>="<span class="code-navy">{{
                                propObject.cookie
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Delay from page-load to the popup appearing."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            ><span class="code-blue">delay</span>=<span class="code-string"
                                >"{{ propObject.delay }}"</span
                            ></code
                        >
                    </VTTooltip>
                    <input class="small-input" type="text" v-model="propObject.delay" />
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">hoverColor</span>=<span class="code-string"
                            >"{{ propObject.hoverColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.hoverColor" maxlength="25" />
                        <input type="color" v-model="propObject.hoverColor" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">hoverBackground</span>=<span class="code-string"
                            >"{{ propObject.hoverBackground }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.hoverBackground" maxlength="25" />
                        <input type="color" v-model="propObject.hoverBackground" />
                    </form>
                </div>
                <div class="option button-center">
                    <VTButton :styles="{ marginBottom: '10px' }" @click="forceRender()"
                        >RESTORE</VTButton
                    >
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example border overflow-hidden">
                <VTPopup
                    :styles="{
                        position: 'absolute',
                        right: 'unset',
                        zIndex: '0',
                    }"
                    :cookie="false"
                    :delay="propObject.delay"
                    :hoverColor="propObject.hoverColor"
                    :hoverBackground="propObject.hoverBackground"
                    :key="key"
                    >Hello, I am a popup! Click me!</VTPopup
                >
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTPopup</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">cookie</span>="<span class="code-navy">{{
                            propObject.cookie
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">delay</span>=<span class="code-string"
                            >"{{ propObject.delay }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">hoverColor</span>=<span class="code-string"
                            >"{{ propObject.hoverColor }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">hoverBackground</span>=<span class="code-string"
                            >"{{ propObject.hoverBackground }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-tag">&gt;</span></div>
                    <div>Hello, I am a popup! Click me!</div>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span><span class="code-green">VTPopup</span
                        ><span class="code-tag">&gt;</span>
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
    name: 'Popup',

    setup() {
        const key = ref(0);
        const propObject = ref({
            cookie: false,
            delay: '2s',
            hoverColor: '#ffffff',
            hoverBackground: '#83dbca',
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTPopup
    :styles="{}"
    :cookie="${propObject.value.cookie}"
    delay="${propObject.value.delay}"
    hoverColor="${propObject.value.hoverColor}"
    hoverBackground="${propObject.value.hoverBackground}"
>
    Hello, I am a popup! Click me!
</VTPopup>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, forceRender, copyCode };
    },
};
</script>
