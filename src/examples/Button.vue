<template>
    <div id="dk-btn-container">
        <div id="btn-options-container">
            <div id="btn-options">
                <div class="option">
                    <code>:<span class="code-blue">styles</span>="{}"</code>
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">rainbow</span>="<span class="code-navy">{{
                            propObject.rainbow
                        }}</span
                        >"</code
                    >
                    <DKToggle @toggle="toggleProp('rainbow')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">fill</span>="<span class="code-navy"
                            >{{ propObject.fill }}"</span
                        ></code
                    >
                    <DKToggle @toggle="toggleProp('fill')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">onlyBorder</span>="<span class="code-navy"
                            >{{ propObject.onlyBorder }}"</span
                        ></code
                    >
                    <DKToggle @toggle="toggleProp('onlyBorder')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">ripple</span>="<span class="code-navy"
                            >{{ propObject.ripple }}"</span
                        ></code
                    >
                    <DKToggle @toggle="toggleProp('ripple')" :initialState="true" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">shine</span>="<span class="code-navy"
                            >{{ propObject.shine }}"</span
                        ></code
                    >
                    <DKToggle @toggle="toggleProp('shine')" />
                </div>
                <div class="option">
                    <code
                        >:<span class="code-blue">hoverEnabled</span>="<span class="code-navy"
                            >{{ propObject.hoverEnabled }}"</span
                        ></code
                    >
                    <DKToggle @toggle="toggleProp('hoverEnabled')" :initialState="true" />
                </div>
                <div class="option column">
                    <code
                        ><span class="code-blue">hoverColor</span>=<span class="code-orange"
                            >"{{ propObject.hoverColor }}"</span
                        ></code
                    >
                    <form @submit.prevent="forceRender()">
                        <input type="text" v-model="propObject.hoverColor" maxlength="25" />
                        <DKButton
                            :styles="{
                                minWidth: '50px',
                                height: '25px',
                                fontSize: '14px',
                                borderRadius: '0 5px 5px 0',
                            }"
                            >APPLY</DKButton
                        >
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
                        <DKButton
                            :styles="{
                                minWidth: '50px',
                                height: '25px',
                                fontSize: '14px',
                                borderRadius: '0 5px 5px 0',
                            }"
                            >APPLY</DKButton
                        >
                    </form>
                </div>
            </div>
        </div>
        <div id="btn-container">
            <DKButton
                :styles="{ justifySelf: 'center', alignSelf: 'center' }"
                :rainbow="propObject.rainbow"
                :fill="propObject.fill"
                :onlyBorder="propObject.onlyBorder"
                :ripple="propObject.ripple"
                :shine="propObject.shine"
                :hoverEnabled="propObject.hoverEnabled"
                :hoverColor="propObject.hoverColor"
                :hoverBackground="propObject.hoverBackground"
                :key="key"
                >CLICK ME!</DKButton
            >
            <div class="copy-code" @click="copyCode()">
                <code>
                    <div class="tag">
                        <span class="code-grey">&lt;</span><span class="code-green">DKButton</span>
                    </div>
                    <div>
                        :<span class="code-blue">rainbow</span>="<span class="code-navy">{{
                            propObject.rainbow
                        }}</span
                        >"
                    </div>
                    <div>
                        :<span class="code-blue">fill</span>="<span class="code-navy">{{
                            propObject.fill
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
                        <span class="code-grey">&lt;/</span><span class="code-green">DKButton</span
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
            fill: false,
            onlyBorder: false,
            ripple: true,
            shine: false,
            hoverEnabled: true,
            hoverColor: '#ffffff',
            hoverBackground: '#5aafff',
        });

        const forceRender = () => key.value++;
        const toggleProp = prop => {
            propObject.value[prop] = !propObject.value[prop];
            forceRender();
        };
        const code = computed(() => {
            return `<DKButton
    :rainbow="${propObject.value.rainbow}"
    :fill="${propObject.value.fill}"
    :onlyBorder="${propObject.value.onlyBorder}"
    :ripple="${propObject.value.ripple}"
    :shine="${propObject.value.shine}"
    :hoverEnabled="${propObject.value.hoverEnabled}"
    :hoverColor="${propObject.value.hoverColor}"
    :hoverBackground="${propObject.value.hoverBackground}"
>
    CLICK ME!
</DKButton>`;
        });
        const copyCode = () => {
            navigator.clipboard.writeText(code.value);
            app.config.globalProperties.$toast('Copied!');
        };

        return { key, propObject, toggleProp, forceRender, copyCode, code };
    },
};
</script>

<style lang="scss">
#dk-btn-container {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 30px;
    width: 100%;
    height: 70vh;
    flex: 1;

    > * {
        @include flex-y(center, center);
    }

    #btn-options-container {
        height: 100%;
        width: 100%;
        background: var(--dark-grey);
        border-radius: 10px;

        #btn-options {
            width: 100%;
        }

        .option {
            display: flex;
            justify-content: space-between;
            margin: 25px;
            font-size: 18px;
        }

        .column {
            flex-direction: column;
            align-items: center;
            padding: 5px;
            border: 1px solid;
            border-radius: 5px;

            form {
                display: flex;
                margin: 5px;

                input {
                    padding: 0 5px;
                    border: none;
                    border-radius: 5px 0 0 5px;
                }
            }
        }
    }

    #btn-container {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 50% 50%;
        height: 100%;

        .copy-code {
            cursor: pointer;
            @include flex-x(center, center);
            height: 100%;
            width: 100%;
            font-size: 16px;
            text-align: left;
            background: var(--dark-grey);
            border-radius: 5px;

            code {
                width: fit-content;
                transform: translateX(20px);

                .tag {
                    transform: translateX(-30px);
                }
            }

            i {
                opacity: 0;
                transform: translate(40px, 25%);
                transition: all 0.15s;
            }

            &:hover > i {
                opacity: 1;
                transform: translate(40px, 0);
            }
        }
    }
}
</style>
