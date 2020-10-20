<template>
    <div class="component-playground">
        <div class="options-container">
            <div class="options">
                <div class="option">
                    <VTTooltip
                        text="This is eqiuvalent to ordinary Vue :style bindings but targets specific elements within the component."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                    >
                        <code>:<span class="code-blue">styles</span>="{}"</code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <code>:<span class="code-blue">blockStyles</span>="{}"</code>
                </div>
                <div class="option">
                    <code>
                        :<span class="code-blue">ripple</span>="<span class="code-navy">{{
                            propObject.ripple
                        }}</span
                        >"
                    </code>
                    <VTToggle @toggle="toggleRipple()" :initialState="true" />
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">color</span>=<span class="code-string"
                            >"{{ propObject.color }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.color" maxlength="25" />
                        <input type="color" v-model="propObject.color" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">disabledColor</span>=<span class="code-string"
                            >"{{ propObject.disabledColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.disabledColor" maxlength="25" />
                        <input type="color" v-model="propObject.disabledColor" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">background</span>=<span class="code-string"
                            >"{{ propObject.background }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.background" maxlength="25" />
                        <input type="color" v-model="propObject.background" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">altBackground</span>=<span class="code-string"
                            >"{{ propObject.altBackground }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.altBackground" maxlength="25" />
                        <input type="color" v-model="propObject.altBackground" />
                    </form>
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">currentPage</span>="<span class="code-num">{{
                            propObject.currentPage
                        }}</span
                        >"</code
                    >
                    <input
                        type="number"
                        v-model.number="propObject.currentPage"
                        @keypress.prevent
                        min="1"
                        :max="propObject.lastPage"
                        class="small-input"
                    />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">lastPage</span>="<span class="code-num">10</span
                        >"</code
                    >
                </div>
                <div class="option">
                    <code
                        >@<span class="code-blue">page-change</span>="<span class="code-method"
                            >logValue</span
                        >(<span class="code-blue">$event</span>)"</code
                    >
                    <code>
                        <span class="code-num">{{ currentPageLog }}</span>
                    </code>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example">
                <VTPagination
                    :ripple="propObject.ripple"
                    :color="propObject.color"
                    :disabledColor="propObject.disabledColor"
                    :background="propObject.background"
                    :altBackground="propObject.altBackground"
                    :currentPage="propObject.currentPage"
                    :lastPage="propObject.lastPage"
                    @page-change="logValue($event)"
                    :key="key"
                />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span
                        ><span class="code-green">VTPagination</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">blockStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">ripple</span>="<span class="code-navy">{{
                            propObject.ripple
                        }}</span
                        >"
                    </div>
                    <div>
                        <span class="code-blue">color</span>=<span class="code-string"
                            >"{{ propObject.color }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">disabledColor</span>=<span class="code-string"
                            >"{{ propObject.disabledColor }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">background</span>=<span class="code-string"
                            >"{{ propObject.background }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">altBackground</span>=<span class="code-string"
                            >"{{ propObject.altBackground }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">currentPage</span>="<span class="code-num">{{
                            propObject.currentPage
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">lastPage</span>="<span class="code-num">{{
                            propObject.lastPage
                        }}</span
                        >"
                    </div>
                    <div>
                        @<span class="code-blue">page-change</span>="<span class="code-method"
                            >logValue</span
                        >(<span class="code-blue">$event</span>)"
                    </div>
                    <div class="tag"><span class="code-tag">&gt;</span></div>
                    <div>
                        <VTTooltip
                            text="Slot for a right-facing arrow, rotated 180deg for the left-facing arrow."
                            :styles="{ minWidth: '250px', top: '20px', textAlign: 'center' }"
                        >
                            &lt;!-- Optional Arrow Slot --&gt;
                        </VTTooltip>
                    </div>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span
                        ><span class="code-green">VTPagination</span
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
    name: 'Pagination',

    setup() {
        const key = ref(0);
        const propObject = ref({
            ripple: true,
            color: '#ffffff',
            disabledColor: '#dbdbdb',
            background: '#5bd0b9',
            altBackground: '#83dbca',
            currentPage: 1,
            lastPage: 10,
        });
        const currentPageLog = ref(1);

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTPagination
    :styles="{}"
    :blockStyles="{}"
    :ripple="${propObject.value.ripple}"
    color="${propObject.value.color}"
    disabledColor="${propObject.value.disabledColor}"
    background="${propObject.value.background}"
    altBackground="${propObject.value.altBackground}"
    :currentPage="${propObject.value.currentPage}"
    :lastPage="${propObject.value.lastPage}"
>
    <!-- Optional Arrow Slot -->
</VTPagination>
`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const logValue = e => {
            currentPageLog.value = e;
            console.log(e);
        };
        const toggleRipple = () => {
            propObject.value.ripple = !propObject.value.ripple;
            forceRender();
        };

        return { key, propObject, currentPageLog, forceRender, copyCode, logValue, toggleRipple };
    },
};
</script>
