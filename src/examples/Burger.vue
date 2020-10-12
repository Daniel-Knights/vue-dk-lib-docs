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
                <div class="option column">
                    <code
                        ><span class="code-blue">background</span>=<span class="code-orange"
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
                        ><span class="code-blue">hoverBackground</span>=<span class="code-orange"
                            >"{{ propObject.hoverBackground }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.hoverBackground" maxlength="25" />
                        <input type="color" v-model="propObject.hoverBackground" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">stripColor</span>=<span class="code-orange"
                            >"{{ propObject.stripColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.stripColor" maxlength="25" />
                        <input type="color" v-model="propObject.stripColor" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">stripHoverColor</span>=<span class="code-orange"
                            >"{{ propObject.stripHoverColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.stripHoverColor" maxlength="25" />
                        <input type="color" v-model="propObject.stripHoverColor" />
                    </form>
                </div>
                <div class="option">
                    <VTTooltip
                        text="If you need to programmatically toggle VTBurger, it will watch for this prop and update accordingly."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code
                            >:<span class="code-blue">toggled</span>="<span class="code-navy">{{
                                propObject.toggled
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle
                        @toggle="propObject.toggled = !propObject.toggled"
                        :state="propObject.toggleToggled"
                    />
                </div>
                <div class="option">
                    <code
                        >@<span class="code-blue">open</span>="<span class="code-light-yellow"
                            >logEvent</span
                        >(<span class="code-blue">$event</span>)"</code
                    >
                    <code>
                        {{ log }}
                    </code>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example">
                <VTBurger
                    :background="propObject.background"
                    :hoverBackground="propObject.hoverBackground"
                    :stripColor="propObject.stripColor"
                    :stripHoverColor="propObject.stripHoverColor"
                    :toggled="propObject.toggled"
                    @open="logEvent($event)"
                />
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">VTBurger</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>
                        <span class="code-blue">background</span>=<span class="code-orange"
                            >"{{ propObject.background }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">hoverBackground</span>=<span class="code-orange"
                            >"{{ propObject.hoverBackground }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">stripColor</span>=<span class="code-orange"
                            >"{{ propObject.stripColor }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">stripHoverColor</span>=<span class="code-orange"
                            >"{{ propObject.stripHoverColor }}"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">toggled</span>="<span class="code-navy">{{
                            propObject.toggled
                        }}</span
                        >"
                    </div>
                    <div>
                        @<span class="code-blue">open</span>="<span class="code-light-yellow"
                            >logEvent</span
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
    name: 'Button',

    setup() {
        const log = ref('');
        const propObject = ref({
            background: '#47cab1',
            hoverBackground: '#6fd6c1',
            stripColor: '#ffffff',
            stripHoverColor: '#ffffff',
            toggled: false,
            toggleToggled: false,
        });

        const code = computed(() => {
            return `<VTBurger
    :styles="{}"
    background="${propObject.value.background}"
    hoverBackground="${propObject.value.hoverBackground}"
    stripColor="${propObject.value.stripColor}"
    stripHoverColor="${propObject.value.stripHoverColor}"
    :toggled="${propObject.value.toggled}"
    @open="logEvent($event)"
/>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const logEvent = e => {
            log.value = e;
            propObject.value.toggled = !propObject.value.toggled;
            propObject.value.toggleToggled = !propObject.value.toggleToggled;
            console.log(e);
        };

        return { log, propObject, copyCode, logEvent };
    },
};
</script>
