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
                        ><span class="code-blue">placeholder</span>=<span class="code-orange"
                            >"{{ propObject.placeholder }}"</span
                        ></code
                    >
                    <input
                        class="medium-input"
                        type="text"
                        v-model="propObject.placeholder"
                        @keyup="forceRender()"
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
                        text="Delay from page-load to the popup appearing."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
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
                        ><span class="code-blue">primary</span>=<span class="code-orange"
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
                        ><span class="code-blue">secondary</span>=<span class="code-orange"
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
                        text="Delay from page-load to the popup appearing."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code
                            >@<span class="code-blue">search-value</span>="<span
                                class="code-light-yellow"
                                >searchValue</span
                            >(<span class="code-blue">$event</span>)"</code
                        >
                    </VTTooltip>
                    <div class="text-box">
                        {{ propObject.searchValue }}
                    </div>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Delay from page-load to the popup appearing."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code
                            >@<span class="code-blue">search-submit</span>="<span
                                class="code-light-yellow"
                                >searchSubmit</span
                            >(<span class="code-blue">$event</span>)"</code
                        >
                    </VTTooltip>
                    <div class="text-box">
                        {{ propObject.searchSubmit }}
                    </div>
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
                    @search-value="searchValue($event)"
                    @search-submit="searchSubmit($event)"
                    :key="key"
                />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span
                        ><span class="code-green">VTSearchbar</span>
                    </div>
                    <div><span class="code-blue">styles</span>="{}"</div>
                    <div>
                        <span class="code-blue">placeholder</span>=<span class="code-orange"
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
                        <span class="code-blue">primary</span>=<span class="code-orange"
                            >"{{ propObject.primary }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">secondary</span>=<span class="code-orange"
                            >"{{ propObject.secondary }}"</span
                        >
                    </div>
                    <div class="option">
                        @<span class="code-blue">search-value</span>="<span
                            class="code-light-yellow"
                            >searchValue</span
                        >(<span class="code-blue">$event</span>)"
                    </div>
                    <div class="option">
                        @<span class="code-blue">search-submit</span>="<span
                            class="code-light-yellow"
                            >searchSubmit</span
                        >(<span class="code-blue">$event</span>)"
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
    name: 'Popup',

    setup() {
        const contrast = ref(null);
        const key = ref(0);
        const propObject = ref({
            placeholder: 'Search...',
            crossEnabled: true,
            iconEnabled: true,
            contrast: false,
            primary: '#ffffff',
            secondary: '#5bd0b9',
            searchValue: '',
            searchSubmit: '',
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTSearchbar
    :styles="{}"
    placeholder="${propObject.value.placeholder}"
    :crossEnabled="${propObject.value.crossEnabled}"
    :iconEnabled="${propObject.value.iconEnabled}"
    :contrast="${propObject.value.contrast}"
    primary="${propObject.value.primary}"
    secondary="${propObject.value.secondary}"
    @search-value="searchValue($event)"
    @search-submit="searchSubmit($event)"
/>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const toggleContrast = () => {
            propObject.value.contrast = !propObject.value.contrast;
            contrast.value.classList.toggle('contrast');
            forceRender();
        };
        const searchValue = e => {
            propObject.value.searchValue = e;
        };
        const searchSubmit = e => {
            propObject.value.searchSubmit = e;
        };

        return {
            contrast,
            key,
            propObject,
            forceRender,
            copyCode,
            toggleContrast,
            searchValue,
            searchSubmit,
        };
    },
};
</script>
