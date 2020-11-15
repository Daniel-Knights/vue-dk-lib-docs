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
                <div class="option column">
                    <VTTooltip
                        text="VTHoverbox sets its own width but you can set it manually too."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            ><span class="code-blue">width</span>="<span class="code-num">{{
                                propObject.width
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <form @submit.prevent="forceRender()">
                        <input type="number" v-model.number="propObject.width" maxlength="25" />
                        <VTButton :styles="buttonStyles">APPLY</VTButton>
                    </form>
                </div>
                <div class="option column">
                    <VTTooltip
                        text="VTHoverbox also sets its own height but you can set it manually too."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            ><span class="code-blue">height</span>="<span class="code-num">{{
                                propObject.height
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <form @submit.prevent="forceRender()">
                        <input type="number" v-model.number="propObject.height" maxlength="25" />
                        <VTButton :styles="buttonStyles">APPLY</VTButton>
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">fill</span>=<span class="code-string"
                            >"{{ propObject.fill }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.fill" maxlength="25" />
                        <input type="color" v-model="propObject.fill" />
                    </form>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example contrast">
                <VTHoverbox
                    :width="propObject.width"
                    :height="propObject.height"
                    :fill="propObject.fill"
                    :key="key"
                    >HOVER ME!</VTHoverbox
                >
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTHoverbox</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">width</span>="<span class="code-num">{{
                            propObject.width
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">height</span>="<span class="code-num">{{
                            propObject.height
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">fill</span>=<span class="code-string"
                            >"{{ propObject.fill }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-tag">&gt;</span></div>
                    <div>HOVER ME!</div>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span><span class="code-green">VTHoverbox</span
                        ><span class="code-tag">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import app from '@/main';

export default {
    name: 'Hoverbox',

    setup() {
        const key = ref(0);
        const propObject = reactive({
            width: 110,
            height: 40,
            fill: 'rgba(255, 255, 255, 0.5)',
        });
        const buttonStyles = {
            minWidth: '50px',
            height: '25px',
            fontSize: '14px',
            borderRadius: '0 5px 5px 0',
        };

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTHoverbox
    :styles="{}"
    :containerStyles="{}"
    :width="${propObject.width}"
    :height="${propObject.height}"
    :fill="${propObject.fill}"
>
    HOVER ME!
</VTHoverbox>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, buttonStyles, forceRender, copyCode };
    },
};
</script>
