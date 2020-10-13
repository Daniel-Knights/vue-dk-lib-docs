<template>
    <VTModal v-if="fullscreen" @close="fullscreen = false" :key="key" :notify="propObject.notify" />
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
                <div class="option">
                    <VTTooltip
                        text="Determines whether to display an exit-fullscreen notification."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code
                            >:<span class="code-blue">notify</span>="<span class="code-navy">{{
                                propObject.notify
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle @toggle="toggleNotify()" :initialState="true" />
                </div>
                <div class="option">
                    <VTTooltip
                        text="Emits an event when clicking outside the inner-content."
                        position="right"
                        :styles="{ width: '300px', minWidth: 'unset' }"
                    >
                        <code>
                            @<span class="code-blue">close</span>="<span class="code-light-yellow"
                                >closeModal</span
                            >()"
                        </code>
                    </VTTooltip>
                </div>
                <div class="option button-center">
                    <VTButton @click="fullscreen = true">OPEN MODAL</VTButton>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example example-info contrast">
                <p>
                    <code>&lt;VTModal></code> utilises Vue 3's <code>&lt;teleport></code> component
                    to transport itself before the closing <code>&lt;body></code> tag.
                </p>
                <p></p>
            </div>
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">VTModal</span>
                    </div>
                    <div>
                        <span class="code-blue">v-if</span>="<span class="code-blue"
                            >yourCondition</span
                        >"
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>:<span class="code-blue">containerStyles</span>="{}"</div>
                    <div>
                        :<span class="code-blue">notify</span>="<span class="code-navy">{{
                            propObject.notify
                        }}</span
                        >"
                    </div>
                    <div>
                        @<span class="code-blue">close</span>="<span class="code-light-yellow"
                            >closeModal</span
                        >()"
                    </div>
                    <div class="tag"><span class="code-grey">&gt;</span></div>
                    <div>
                        <VTTooltip text="Vue slot for any valid HTML">
                            <span class="code-grey">&lt;</span><span class="code-navy">h1</span
                            ><span class="code-grey">></span>VTModal<span class="code-grey"
                                >&lt;</span
                            ><span class="code-navy">h1</span><span class="code-grey">></span>
                        </VTTooltip>
                    </div>
                    <div class="tag">
                        <span class="code-grey">&lt;/</span><span class="code-green">VTModal</span
                        ><span class="code-grey">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, ref } from 'vue';
import app from '@/main';

export default {
    name: 'Modal',

    setup() {
        const key = ref(0);
        const fullscreen = ref(false);
        const propObject = ref({
            notify: true,
        });

        const forceRender = () => key.value++;
        const code = computed(() => {
            return `<VTModal
    v-if="yourCondition"
    :styles="{}"
    :containerStyles="{}"
    :notify="${propObject.value.notify}"
>
    <!-- Optional Slot -->
</VTModal>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const toggleNotify = () => {
            propObject.value.notify = !propObject.value.notify;
            forceRender();
        };
        const fullscreenListener = e => {
            if (e.key !== 'Escape') return;
            fullscreen.value = false;
        };

        document.addEventListener('keydown', fullscreenListener);
        onBeforeUnmount(() => document.removeEventListener('keydown', fullscreenListener));

        return {
            key,
            fullscreen,
            propObject,
            forceRender,
            copyCode,
            toggleNotify,
            fullscreenListener,
        };
    },
};
</script>
