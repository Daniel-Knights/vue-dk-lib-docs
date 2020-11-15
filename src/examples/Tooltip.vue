<template>
    <div class="component-playground no-overflow">
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
                    <code
                        ><span class="code-blue">text</span>=<span class="code-string"
                            >"{{ propObject.text }}"</span
                        ></code
                    >
                    <input class="large-input" type="text" v-model="propObject.text" />
                </div>
                <div class="option">
                    <code
                        ><span class="code-blue">position</span>=<span class="code-string"
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
                        >:<span class="code-blue">arrow</span>="<span class="code-navy">{{
                            propObject.arrow
                        }}</span
                        >"</code
                    >
                    <VTToggle
                        @toggle="
                            propObject.arrow = !propObject.arrow;
                            forceRender();
                        "
                        :initialState="true"
                    />
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example contrast">
                <VTTooltip
                    :text="propObject.text"
                    :position="propObject.position"
                    :arrow="propObject.arrow"
                    :key="key"
                    >Hover Me!</VTTooltip
                >
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span><span class="code-green">VTTooltip</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>
                        <span class="code-blue">text</span>=<span class="code-string"
                            >"{{ propObject.text }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">position</span>=<span class="code-string"
                            >"{{ propObject.position }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">arrow</span>="<span class="code-navy">{{
                            propObject.arrow
                        }}</span
                        >""
                    </div>
                    <div class="tag"><span class="code-tag">&gt;</span></div>
                    <div>Hover Me!</div>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span><span class="code-green">VTTooltip</span>
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
            text: 'Add tooltip text to the "text" prop',
            position: 'top',
            arrow: true,
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTTooltip
    :styles="{}"
    :containerStyles="{}"
    text="${propObject.text}"
    position="${propObject.position}"
    :arrow="${propObject.arrow}"
>
    Hover Me!
</VTTooltip>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };

        return { key, propObject, forceRender, copyCode };
    },
};
</script>
