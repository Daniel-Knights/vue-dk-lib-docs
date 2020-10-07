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
                <div class="option column">
                    <VTTooltip
                        text="DKHoverbox sets its own width but you can set it manually too."
                        position="right"
                        :styles="{ minWidth: '350px' }"
                    >
                        <code
                            ><span class="code-blue">width</span>="<span class="code-lightgreen">{{
                                propObject.width
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <form @submit.prevent="forceRender()">
                        <input type="number" v-model.number="propObject.width" maxlength="25" />
                        <VTButton
                            :styles="{
                                minWidth: '50px',
                                height: '25px',
                                fontSize: '14px',
                                borderRadius: '0 5px 5px 0',
                            }"
                            >APPLY</VTButton
                        >
                    </form>
                </div>
                <div class="option column">
                    <VTTooltip
                        text="DKHoverbox also sets its own height but you can set it manually too."
                        position="right"
                        :styles="{ minWidth: '350px' }"
                    >
                        <code
                            ><span class="code-blue">height</span>="<span class="code-lightgreen">{{
                                propObject.height
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <form @submit.prevent="forceRender()">
                        <input type="number" v-model.number="propObject.height" maxlength="25" />
                        <VTButton
                            :styles="{
                                minWidth: '50px',
                                height: '25px',
                                fontSize: '14px',
                                borderRadius: '0 5px 5px 0',
                            }"
                            >APPLY</VTButton
                        >
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">fill</span>=<span class="code-orange"
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
                        <span class="code-grey">&lt;</span
                        ><span class="code-green">DKHoverbox</span>
                    </div>
                    <div><span class="code-blue">styles</span>="{}"</div>
                    <div><span class="code-blue">containerStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">width</span>="<span class="code-lightgreen">{{
                            propObject.width
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">height</span>="<span class="code-lightgreen">{{
                            propObject.height
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">fill</span>=<span class="code-orange"
                            >"{{ propObject.fill }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-grey">&gt;</span></div>
                    <div>CLICK ME!</div>
                    <div class="tag">
                        <span class="code-grey">&lt;/</span
                        ><span class="code-green">DKHoverbox</span
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
    name: 'Hoverbox',

    setup() {
        const key = ref(0);
        const propObject = ref({
            width: 110,
            height: 40,
            fill: 'rgba(255, 255, 255, 0.5)',
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTHoverbox
    :width="${propObject.value.width}"
    :height="${propObject.value.height}"
    :fill="${propObject.value.fill}"
>
    CLICK ME!
</VTHoverbox>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, forceRender, copyCode };
    },
};
</script>
