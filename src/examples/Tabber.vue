<template>
    <div id="tabber">
        <div id="tabber-inner">
            <p>
                <code
                    ><span class="code-method">vtTabber</span
                    ><span class="code-yellow">()</span></code
                >
                is an accessibility function which prevents the default focus outline on click, but
                maintains it when using the <code>tab ⇥</code> key.
            </p>
            <p>
                Vuelity does come with accessibility built-in, but, this function allows an extra
                layer of support for those who are physically impaired, suffer learning disabilities
                or simply prefer to use a keyboard to navigate the web.
            </p>
            <p>
                All you need to do is call
                <code @click="copyCode($event)" class="copy-code"
                    ><span class="code-blue">Vuelity</span>.<span class="code-method">vtTabber</span
                    ><span class="code-yellow">()</span></code
                >, and this handles everything for you.
            </p>
            <p>
                To give the outline a unique styling, you can target it like this:
            </p>
            <div class="css-code" @click="copyCode($event)">
                <code class="line-top">
                    <span class="code-css">.vt__tabber </span>
                    <span class="code-navy">*</span>:<span class="code-css">focus </span>
                    <span class="code-yellow">{</span>
                </code>
                <code class="line-mid">
                    <span class="code-blue">outline</span>: <span class="code-num">5px </span>
                    <span class="code-string">solid</span>;
                </code>
                <code class="line-bottom">
                    <span class="code-yellow">}</span>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import app from '@/main';

export default {
    name: 'Tabber',

    setup() {
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
        const copyCode = e => {
            if (!e) navigator.clipboard.writeText(code.value);
            else navigator.clipboard.writeText(e.target.innerText);
            app.$toast('Copied!');
        };

        return { copyCode };
    },
};
</script>

<style lang="scss">
#tabber {
    @include flex-y(center, center);
    flex: 1;
    margin: 20px;
    padding: 20px;
    width: calc(100% - 40px);
    font: 500 clamp(15px, 2vw, 22px) var(--font_primary);
    background: var(--primary);
    border-radius: 10px;

    &-inner {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px clamp(10px, 2.5vw, 30px);
        border-radius: 10px;
        background: var(--lightgrey);
        line-height: clamp(25px, 2.5vw, 50px);

        code {
            padding: 5px;
            border-radius: 10px;
            background: var(--dark-grey);
            white-space: pre;

            span {
                pointer-events: none;
            }
        }

        .copy-code {
            cursor: pointer;
            transition: background 0.15s;

            &:hover {
                background: rgba(var(--dark-grey-rgb), 0.8);
            }
        }

        .css-code {
            cursor: pointer;
            @include flex-y(center, center);
            position: relative;
            margin: 0 auto;
            padding: 10px 15px;
            width: 340px;
            text-align: left;
            background: var(--dark-grey);
            border-radius: 10px;

            code {
                pointer-events: none;
                padding: 0;
                line-height: 28px;

                &:nth-of-type(2) {
                    line-height: 25px;
                    transform: translateY(2px);
                }
            }
            i {
                position: absolute;
                right: 30px;
                opacity: 0;
                transform: translate(40px, 25%);
                transition: all 0.15s;
                z-index: 0;
            }

            &:hover > i {
                opacity: 1;
                transform: translate(40px, 0);
            }
        }

        .line {
            &-top,
            &-mid,
            &-bottom {
                width: 100%;
            }

            &-mid {
                text-align: right;
            }
        }
    }
}
</style>
