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
                <div class="option column">
                    <code
                        ><span class="code-blue">placeholder</span>=<span class="code-string"
                            >"{{ propObject.placeholder }}"</span
                        ></code
                    >
                    <input
                        class="medium-input"
                        type="text"
                        v-model="propObject.placeholder"
                        @input="forceRender()"
                    />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">crossEnabled</span>="<span class="code-navy">{{
                            propObject.crossEnabled
                        }}</span
                        >"</code
                    >
                    <VTToggle
                        @toggle="propObject.crossEnabled = !propObject.crossEnabled"
                        :initialState="true"
                    />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">iconEnabled</span>="<span class="code-navy">{{
                            propObject.iconEnabled
                        }}</span
                        >"</code
                    >
                    <VTToggle
                        @toggle="propObject.iconEnabled = !propObject.iconEnabled"
                        :initialState="true"
                    />
                </div>
                <div class="option">
                    <VTTooltip
                        text="Swaps the primary and secondary props."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            >:<span class="code-blue">contrast</span>="<span class="code-navy">{{
                                propObject.contrast
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle @toggle="toggleContrast()" />
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">primary</span>=<span class="code-string"
                            >"{{ propObject.primary }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.primary" maxlength="25" />
                        <input type="color" v-model="propObject.primary" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">secondary</span>=<span class="code-string"
                            >"{{ propObject.secondary }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.secondary" maxlength="25" />
                        <input type="color" v-model="propObject.secondary" />
                    </form>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Returns the input value on keyup."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code :class="{ 'emit-overflow': propObject.value !== '' }"
                            >@<span class="code-blue">search-value</span>="<span
                                class="code-method method-sm"
                                >logValue</span
                            ><span class="hide-sm">(<span class="code-blue">$event</span>)</span
                            >"</code
                        >
                    </VTTooltip>
                    <code class="search-results">
                        {{ propObject.value }}
                    </code>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Returns the input value on submit. Normal @submit event works too for a more in-depth returned value."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code :class="{ 'emit-overflow': propObject.submit !== '' }"
                            >@<span class="code-blue">search-submit</span>="<span
                                class="code-method method-sm"
                                >logSubmit</span
                            ><span class="hide-sm">(<span class="code-blue">$event</span>)</span
                            >"</code
                        >
                    </VTTooltip>
                    <code class="search-results">
                        {{ propObject.submit }}
                    </code>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example contrast" ref="contrast">
                <VTSearchbar
                    :placeholder="propObject.placeholder"
                    :crossEnabled="propObject.crossEnabled"
                    :iconEnabled="propObject.iconEnabled"
                    :contrast="propObject.contrast"
                    :primary="propObject.primary"
                    :secondary="propObject.secondary"
                    @search-value="logValue($event)"
                    @search-submit="logSubmit($event)"
                    :key="key"
                />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span
                        ><span class="code-green">VTSearchbar</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>
                        <span class="code-blue">placeholder</span>=<span class="code-string"
                            >"{{ propObject.placeholder }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">crossEnabled</span>="<span class="code-navy">{{
                            propObject.crossEnabled
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">iconEnabled</span>="<span class="code-navy">{{
                            propObject.iconEnabled
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">contrast</span>="<span class="code-navy">{{
                            propObject.contrast
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">primary</span>=<span class="code-string"
                            >"{{ propObject.primary }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">secondary</span>=<span class="code-string"
                            >"{{ propObject.secondary }}"</span
                        >
                    </div>
                    <div>
                        @<span class="code-blue">search-value</span>="<span class="code-method"
                            >logValue</span
                        >(<span class="code-blue">$event</span>)"
                    </div>
                    <div>
                        @<span class="code-blue">search-submit</span>="<span class="code-method"
                            >logSubmit</span
                        >(<span class="code-blue">$event</span>)"
                    </div>
                    <div class="tag"><span class="code-tag">/&gt;</span></div>
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
    name: 'Popup',

    setup() {
        const contrast = ref(null);
        const key = ref(0);
        const propObject = reactive({
            placeholder: 'Search...',
            crossEnabled: true,
            iconEnabled: true,
            contrast: false,
            primary: '#ffffff',
            secondary: '#5bd0b9',
            value: '',
            submit: '',
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTSearchbar
    :styles="{}"
    placeholder="${propObject.placeholder}"
    :crossEnabled="${propObject.crossEnabled}"
    :iconEnabled="${propObject.iconEnabled}"
    :contrast="${propObject.contrast}"
    primary="${propObject.primary}"
    secondary="${propObject.secondary}"
    @search-value="logValue($event)"
    @search-submit="logSubmit($event)"
/>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const toggleContrast = () => {
            propObject.contrast = !propObject.contrast;
            contrast.value.classList.toggle('contrast');
            forceRender();
        };
        const logValue = e => (propObject.value = e);
        const logSubmit = e => (propObject.submit = e);

        return {
            app,
            contrast,
            key,
            propObject,
            forceRender,
            copyCode,
            toggleContrast,
            logValue,
            logSubmit,
        };
    },
};
</script>
