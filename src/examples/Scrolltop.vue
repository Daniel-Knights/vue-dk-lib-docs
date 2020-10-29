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
                    <VTTooltip
                        text="The container to scroll within. Defaults to the HTML tag."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code>
                            <span class="code-blue">target</span>=<span class="code-string"
                                >".scroll-height-container"</span
                            >
                        </code>
                    </VTTooltip>
                </div>
                <div class="option">
                    <VTTooltip
                        text="Defines the targets scroll-behavior."
                        :position="$global.$tooltipPosition"
                        :styles="$global.$tooltipStyles"
                        :containerStyles="$global.$tooltipContainerStyles"
                    >
                        <code
                            >:<span class="code-blue">smooth</span>="<span class="code-navy">{{
                                propObject.smooth
                            }}</span
                            >"</code
                        >
                    </VTTooltip>
                    <VTToggle @toggle="toggleSmooth()" :initialState="true" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">ripple</span>="<span class="code-navy">{{
                            propObject.ripple
                        }}</span
                        >"</code
                    >
                    <VTToggle
                        @toggle="propObject.ripple = !propObject.ripple"
                        :initialState="true"
                    />
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
                        ><span class="code-blue">hoverBackground</span>=<span class="code-string"
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
                        ><span class="code-blue">iconColor</span>=<span class="code-string"
                            >"{{ propObject.iconColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.iconColor" maxlength="25" />
                        <input type="color" v-model="propObject.iconColor" />
                    </form>
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">iconHoverColor</span>=<span class="code-string"
                            >"{{ propObject.iconHoverColor }}"</span
                        ></code
                    >
                    <form @submit.prevent>
                        <input type="text" v-model="propObject.iconHoverColor" maxlength="25" />
                        <input type="color" v-model="propObject.iconHoverColor" />
                    </form>
                </div>
            </div>
        </div>
        <div class="example-container">
            <div class="example scroll-height-container border" ref="container">
                <p>
                    The target is set to <code>.scroll-height-container</code> for the purpose of
                    this demo, its default target is the <code>&lt;html></code> tag.
                </p>
                <p class="hey">Hey there!</p>
                <div class="scroll-height"></div>
            </div>
            <VTScrolltop
                :styles="scrolltopStyles"
                target=".scroll-height-container"
                :smooth="propObject.smooth"
                :ripple="propObject.ripple"
                :background="propObject.background"
                :hoverBackground="propObject.hoverBackground"
                :iconColor="propObject.iconColor"
                :iconHoverColor="propObject.iconHoverColor"
            />
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-tag">&lt;</span
                        ><span class="code-green">VTScrolltop</span>
                    </div>
                    <div>:<span class="code-blue">styles</span>="{}"</div>
                    <div>
                        <span class="code-blue">target</span>=<span class="code-string"
                            >".scroll-height-container"</span
                        >
                    </div>
                    <div>
                        :<span class="code-blue">smooth</span>="<span class="code-navy">{{
                            propObject.smooth
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
                        <span class="code-blue">background</span>=<span class="code-string"
                            >"{{ propObject.background }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">hoverBackground</span>=<span class="code-string"
                            >"{{ propObject.hoverBackground }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">iconColor</span>=<span class="code-string"
                            >"{{ propObject.iconColor }}"</span
                        >
                    </div>
                    <div>
                        <span class="code-blue">iconHoverColor</span>=<span class="code-string"
                            >"{{ propObject.iconHoverColor }}"</span
                        >
                    </div>
                    <div class="tag"><span class="code-tag">></span></div>
                    <div>&lt;!-- Optional Slot --></div>
                    <div class="tag">
                        <span class="code-tag">&lt;/</span
                        ><span class="code-green">VTScrolltop</span
                        ><span class="code-tag">&gt;</span>
                    </div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import app from '@/main';

export default {
    name: 'Button',

    setup() {
        const container = ref(null);
        const log = ref('');
        const propObject = ref({
            smooth: true,
            ripple: true,
            background: '#47cab1',
            hoverBackground: '#6fd6c1',
            iconColor: '#ffffff',
            iconHoverColor: '#ffffff',
        });
        const scrolltopStyles = ref({
            position: 'absolute',
            top: '39%',
            right: '50px',
        });
        const smallMediaQuery = window.matchMedia('(max-width: 461px)');
        const largeMediaQuery = window.matchMedia('(max-width: 992px)');

        const code = computed(() => {
            return `<VTScrolltop
    :styles="{}"
    target=".scroll-height-container"
    :smooth="${propObject.value.smooth}"
    :ripple="${propObject.value.ripple}"
    background="${propObject.value.background}"
    hoverBackground="${propObject.value.hoverBackground}"
    iconColor="${propObject.value.iconColor}"
    iconHoverColor="${propObject.value.iconHoverColor}"
>
    <!-- Optional Slot -->
</VTScrolltop>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.$toast('Copied!');
        };
        const toggleSmooth = () => {
            propObject.value.smooth = !propObject.value.smooth;

            if (propObject.value.smooth) {
                container.value.style.scrollBehavior = 'smooth';
            } else container.value.style.scrollBehavior = 'auto';
        };
        const responsiveScrolltopStyles = () => {
            if (smallMediaQuery.matches) {
                scrolltopStyles.value.top = '360px';
                scrolltopStyles.value.right = '20px';
            } else if (largeMediaQuery.matches) {
                scrolltopStyles.value.top = '380px';
                scrolltopStyles.value.right = '60px';
            } else {
                scrolltopStyles.value.top = '39%';
                scrolltopStyles.value.right = '50px';
            }
        };

        responsiveScrolltopStyles();
        window.addEventListener('resize', responsiveScrolltopStyles);

        onMounted(() => container.value.scroll(0, 5000));

        return { container, log, propObject, scrolltopStyles, copyCode, toggleSmooth };
    },
};
</script>

<style lang="scss">
.scroll-height-container {
    max-height: 400px;
    font-size: 18px;
    color: var(--black);
    overflow: scroll;

    .hey {
        position: absolute;
        top: 1000px;
    }
}
.scroll-height {
    align-self: flex-start;
    position: relative;
    height: 2000px;
    width: 100%;
}
</style>
