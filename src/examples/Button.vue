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
                    <code
                        >:<span class="code-blue">rainbow</span>="<span class="code-navy">{{
                            propObject.rainbow
                        }}</span
                        >"</code
                    >
                    <VTToggle @toggle="toggleProp('rainbow')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">fillBorder</span>="<span class="code-navy"
                            >{{ propObject.fillBorder }}"</span
                        ></code
                    >
                    <VTToggle @toggle="toggleProp('fillBorder')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">onlyBorder</span>="<span class="code-navy"
                            >{{ propObject.onlyBorder }}"</span
                        ></code
                    >
                    <VTToggle @toggle="toggleProp('onlyBorder')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">ripple</span>="<span class="code-navy"
                            >{{ propObject.ripple }}"</span
                        ></code
                    >
                    <VTToggle @toggle="toggleProp('ripple')" :initialState="true" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">shine</span>="<span class="code-navy"
                            >{{ propObject.shine }}"</span
                        ></code
                    >
                    <VTToggle @toggle="toggleProp('shine')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">hoverEnabled</span>="<span class="code-navy"
                            >{{ propObject.hoverEnabled }}"</span
                        ></code
                    >
                    <VTToggle @toggle="toggleProp('hoverEnabled')" :initialState="true" />
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">hoverColor</span>=<span class="code-orange"
                            >"{{ propObject.hoverColor }}"</span
                        ></code
                    >
                    <form @submit.prevent="forceRender()">
                        <input type="text" v-model="propObject.hoverColor" maxlength="25" />
                        <input type="color" v-model="propObject.hoverColor" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">hoverBackground</span>=<span class="code-orange"
                            >"{{ propObject.hoverBackground }}"</span
                        ></code
                    >
                    <form @submit.prevent="forceRender()">
                        <input type="text" v-model="propObject.hoverBackground" maxlength="25" />
                        <input type="color" v-model="propObject.hoverBackground" />
                    </form>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example">
                <VTButton
                    :rainbow="propObject.rainbow"
                    :fillBorder="propObject.fillBorder"
                    :onlyBorder="propObject.onlyBorder"
                    :ripple="propObject.ripple"
                    :shine="propObject.shine"
                    :hoverEnabled="propObject.hoverEnabled"
                    :hoverColor="propObject.hoverColor"
                    :hoverBackground="propObject.hoverBackground"
                    :key="key"
                    >CLICK ME!</VTButton
                >
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">VTButton</span>
                    </div>
                    <div><span class="code-blue">styles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">rainbow</span>="<span class="code-navy">{{
                            propObject.rainbow
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">fillBorder</span>="<span class="code-navy">{{
                            propObject.fillBorder
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">onlyBorder</span>="<span class="code-navy">{{
                            propObject.onlyBorder
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">ripple</span>="<span class="code-navy">{{
                            propObject.ripple
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">shine</span>="<span class="code-navy">{{
                            propObject.shine
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">hoverEnabled</span>="<span class="code-navy">{{
                            propObject.hoverEnabled
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">hoverColor</span>=<span class="code-orange"
                            >"{{ propObject.hoverColor }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">hoverBackground</span>=<span class="code-orange"
                            >"{{ propObject.hoverBackground }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-grey">&gt;</span></div>
                    <div>CLICK ME!</div>
                    <div class="tag">
                        <span class="code-grey">&lt;/</span><span class="code-green">VTButton</span
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
    name: 'Button',

    setup() {
        const key = ref(0);
        const propObject = ref({
            rainbow: false,
            fillBorder: false,
            onlyBorder: false,
            ripple: true,
            shine: false,
            hoverEnabled: true,
            hoverColor: '#ffffff',
            hoverBackground: '#5bd0b9',
        });

        const forceRender = () => key.value++;
        const toggleProp = prop => {
            propObject.value[prop] = !propObject.value[prop];
            forceRender();
        };
        const code = computed(() => {
            return `<VTButton
    :styles="{}"
    :rainbow="${propObject.value.rainbow}"
    :fillBorder="${propObject.value.fillBorder}"
    :onlyBorder="${propObject.value.onlyBorder}"
    :ripple="${propObject.value.ripple}"
    :shine="${propObject.value.shine}"
    :hoverEnabled="${propObject.value.hoverEnabled}"
    :hoverColor="${propObject.value.hoverColor}"
    :hoverBackground="${propObject.value.hoverBackground}"
>
    CLICK ME!
</VTButton>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, toggleProp, forceRender, copyCode };
    },
};
</script>
