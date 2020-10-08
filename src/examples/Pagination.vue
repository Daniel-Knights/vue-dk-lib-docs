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
                    <code>:<span class="code-blue">blockStyles</span>="{}"</code>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">currentColor</span>=<span class="code-orange"
                            >"{{ propObject.currentColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.currentColor" maxlength="25" />
                        <input type="color" v-model="propObject.currentColor" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">currentBackground</span>=<span class="code-orange"
                            >"{{ propObject.currentBackground }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.currentBackground" maxlength="25" />
                        <input type="color" v-model="propObject.currentBackground" />
                    </form>
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">currentPage</span>="<span
                            class="code-lightgreen"
                            >{{ propObject.currentPage }}</span
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
                        >:<span class="code-blue">lastPage</span>="<span class="code-lightgreen"
                            >10</span
                        >"</code
                    >
                </div>
                <div class="option">
                    <code
                        >@<span class="code-blue">page-changed</span>="<span
                            class="code-light-yellow"
                            >logValue</span
                        >(<span class="code-blue">$event</span>)"</code
                    >
                    <div class="log">
                        <span class="code-lightgreen">{{ propObject.currentPage }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example">
                <VTPagination
                    :currentColor="propObject.currentColor"
                    :currentBackground="propObject.currentBackground"
                    :currentPage="propObject.currentPage"
                    :lastPage="propObject.lastPage"
                    @page-changed="logValue($event)"
                    :key="key"
                />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span
                        ><span class="code-green">VTPagination</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">blockStyles</span>="{}"</div>
                    <div>
                        <span class="code-blue">currentColor</span>=<span class="code-orange"
                            >"{{ propObject.currentColor }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">currentBackground</span>=<span class="code-orange"
                            >"{{ propObject.currentBackground }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">currentPage</span>="<span
                            class="code-lightgreen"
                            >{{ propObject.currentPage }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">lastPage</span>="<span class="code-lightgreen">{{
                            propObject.lastPage
                        }}</span
                        >"
                    </div>
                    <div>
                        @<span class="code-blue">page-changed</span>="<span
                            class="code-light-yellow"
                            >logValue</span
                        >(<span class="code-blue">$event</span>)"
                    </div>
                    <div class="tag"><span class="code-grey">&gt;</span></div>
                    <div>
                        <VTTooltip
                            text="Slot for a right-facing arrow, rotated 180deg for the left-facing arrow."
                            :styles="{ minWidth: '250px', top: '20px', textAlign: 'center' }"
                        >
                            &lt;!-- Optional Arrow Slot --&gt;
                        </VTTooltip>
                    </div>
                    <div class="tag">
                        <span class="code-grey">&lt;/</span
                        ><span class="code-green">VTPagination</span
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
    name: 'Pagination',

    setup() {
        const key = ref(0);
        const propObject = ref({
            currentColor: '#f5fafd',
            currentBackground: '#83dbca',
            currentPage: 1,
            lastPage: 10,
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTPagination
    :styles="{}"
    :blockStyles="{}"
    currentColor="${propObject.value.currentColor}"
    currentBackground="${propObject.value.currentBackground}"
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
            propObject.value.currentPage = e;
            console.log(e);
        };

        return { key, propObject, forceRender, copyCode, logValue };
    },
};
</script>
