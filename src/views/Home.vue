<template>
    <div id="home">
        <div id="home-left">
            <h1>
                Vuelity is a lightweight, <i>'use-what-you-need'</i> component library for Vue.js v3
            </h1>
        </div>
        <div id="home-right">
            <h1>INSTALLATION</h1>
            <div id="home-tabs">
                <VTHoverbox>
                    <div class="tab" @click="cli = true" :class="{ 'tab-selected': cli }">CLI</div>
                </VTHoverbox>
                <VTHoverbox>
                    <div class="tab" @click="cli = false" :class="{ 'tab-selected': !cli }">
                        CDN
                    </div>
                </VTHoverbox>
            </div>
            <transition name="installation" mode="out-in">
                <div v-if="cli" id="installation">
                    <div class="block">
                        <code @click="copyCode($event)"
                            >npm i vuelity<i class="fa fa-copy"></i
                        ></code>
                    </div>
                    <div class="block">
                        <code @click="copyCode($event)"
                            ><span class="code-purple">import</span>
                            <span class="code-yellow"> { </span>
                            <span class="code-blue">VTButton</span>
                            <span class="code-yellow"> } </span>
                            <span class="code-purple">from </span>
                            <span class="code-string">'vuelity'</span>;<i class="fa fa-copy"></i
                        ></code>
                        ...
                        <code @click="copyCode($event)"
                            ><span class="code-blue">components:</span>
                            <span class="code-purple"> { </span>
                            <span class="code-blue">VTButton</span>
                            <span class="code-purple"> } </span><i class="fa fa-copy"></i
                        ></code>
                    </div>
                    or, register all at once in main.js:
                    <div class="block">
                        <code @click="copyCode($event)"
                            ><span class="code-purple">import</span>
                            <span class="code-navy"> * </span>
                            <span class="code-purple">as </span>
                            <span class="code-blue">Vuelity</span>
                            <span class="code-purple"> from </span>
                            <span class="code-string">'vuelity'</span>;<i class="fa fa-copy"></i
                        ></code>
                        ...
                        <code @click="copyCode($event)"
                            ><div class="line-top">
                                <span class="code-green">Object</span>.<span class="code-method"
                                    >keys</span
                                ><span class="code-yellow">(</span
                                ><span class="code-blue">Vuelity</span
                                ><span class="code-yellow">)</span>.<span class="code-method"
                                    >forEach</span
                                ><span class="code-yellow">(</span><span class="code-blue">el</span>
                                <span class="code-navy"> =></span>
                                <span class="code-purple">{</span>
                            </div>
                            <i class="fa fa-copy"></i>
                            <div class="line-mid">
                                <span class="code-const">app</span>.<span class="code-method"
                                    >component</span
                                ><span class="code-purple">(</span
                                ><span class="code-blue">el</span>,
                                <span class="code-blue">Vuelity[el]</span
                                ><span class="code-purple">)</span>;
                            </div>
                            <div class="line-bottom">
                                <span class="code-purple">}</span
                                ><span class="code-yellow">)</span>;
                            </div></code
                        >
                    </div>
                    then:
                    <div class="block">
                        <code @click="copyCode($event)"
                            ><span class="code-tag">&lt;</span
                            ><span class="code-green">VTButton</span
                            ><span class="code-tag">&gt;</span>Hello!<span class="code-tag"
                                >&lt;/</span
                            ><span class="code-green">VTButton</span
                            ><span class="code-tag">&gt;</span><i class="fa fa-copy"></i
                        ></code>
                    </div>
                </div>
                <div v-else>
                    <div class="block double" @click="copyCode($event)">
                        <code
                            ><span class="code-tag">&lt;</span
                            ><span class="code-navy">script </span>
                            <span class="code-blue">src</span>=<span
                                class="code-string overflow-mid"
                                >"https://unpkg.com/vue@3.0.0/dist/vue.global.js"</span
                            ><span class="overflow-end"
                                ><span class="code-tag">></span><span class="code-tag">&lt;/</span
                                ><span class="code-navy">script</span
                                ><span class="code-tag">></span></span
                            ></code
                        >
                        <i class="fa fa-copy"></i>
                        <code
                            ><span class="code-tag">&lt;</span><span class="code-navy">script </span
                            ><span class="code-blue">src</span>=<span
                                class="code-string overflow-mid"
                                >"https://unpkg.com/vuelity/dist/vuelity.umd.min.js"</span
                            ><span class="overflow-end"
                                ><span class="code-tag">></span><span class="code-tag">&lt;/</span
                                ><span class="code-navy">script</span
                                ><span class="code-tag">></span></span
                            ></code
                        >
                    </div>
                    ...
                    <div class="block">
                        <code @click="copyCode($event)"
                            ><div class="line-top">
                                <span class="code-const">app</span>.<span class="code-method"
                                    >component</span
                                >
                                <span class="code-yellow">(</span>
                            </div>
                            <i class="fa fa-copy"></i>
                            <div class="line-mid">
                                <span class="code-string">'vt-button'</span>,
                                <span class="code-blue">Vuelity</span
                                ><span class="code-purple">[</span
                                ><span class="code-string">'vt-navbar'</span
                                ><span class="code-purple">]</span>
                            </div>
                            <div class="line-bottom"><span class="code-yellow">)</span>;</div>
                        </code>
                    </div>
                    or, register all at once:
                    <div class="block">
                        <code @click="copyCode($event)"
                            ><div class="line-top">
                                <span class="code-green">Object</span>.<span class="code-method"
                                    >keys</span
                                ><span class="code-yellow">(</span
                                ><span class="code-blue">Vuelity</span
                                ><span class="code-yellow">)</span>.<span class="code-method"
                                    >forEach</span
                                ><span class="code-yellow">(</span><span class="code-blue">el</span>
                                <span class="code-navy"> => </span>
                                <span class="code-purple">{</span>
                            </div>
                            <i class="fa fa-copy"></i>
                            <div class="line-mid">
                                <span class="code-const">app</span>.<span class="code-method"
                                    >component</span
                                ><span class="code-purple">(</span
                                ><span class="code-blue">el</span>,
                                <span class="code-blue">Vuelity[el]</span
                                ><span class="code-purple">)</span>;
                            </div>
                            <div class="line-bottom">
                                <span class="code-purple">}</span
                                ><span class="code-yellow">)</span>;
                            </div></code
                        >
                    </div>
                    then:
                    <div class="block">
                        <code @click="copyCode($event)"
                            ><span class="code-tag">&lt;</span
                            ><span class="code-green">VTButton</span
                            ><span class="code-tag">&gt;</span>Hello!<span class="code-tag"
                                >&lt;/</span
                            ><span class="code-green">VTButton</span
                            ><span class="code-tag">&gt;</span><i class="fa fa-copy"></i
                        ></code>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import app from '@/main';

export default {
    name: 'Home',

    setup() {
        const cli = ref(true);

        const copyCode = e => {
            navigator.clipboard.writeText(e.target.innerText);

            app.$toast('Copied!');
        };

        document.body.removeAttribute('style');

        return { cli, copyCode };
    },
};
</script>

<style lang="scss">
.installation-enter-active,
.installation-leave-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.25s;
}
.installation-leave-to,
.installation-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

#home {
    @include flex-x(center, center);
    height: 100vh;
    padding: 0 40px;

    h1 {
        letter-spacing: 1px;
    }
}

#home-left {
    padding: 20px;
    max-width: 550px;
    background: var(--primary);
    border-radius: 10px;
}
#home-right {
    height: 540px;
    width: 40%;
}

#home-tabs {
    @include flex-x(space-around, center);

    .tab {
        cursor: pointer;
        letter-spacing: 1px;
        font-weight: 600;
    }

    .tab-selected {
        color: var(--primary);
        transition: color 0.25s;

        &:hover {
            color: var(--white);
        }
    }
}

#installation,
.block {
    @include flex-y(center, center);
}

.block {
    position: relative;
    padding: 15px 20px;
    margin: 10px auto;
    width: fit-content;
    white-space: pre;
    font-size: 18px;
    background: var(--black);
    border-radius: 5px;

    i {
        position: absolute;
        right: -20px;
        opacity: 0;
        transform: translateY(50%);
        transition: all 0.15s;
    }

    code {
        cursor: pointer;
        position: relative;
        width: 100%;

        span {
            pointer-events: none;
        }

        .line-top,
        .line-mid,
        .line-bottom {
            pointer-events: none;
            width: 100%;
            text-align: left;
            line-height: 25px;
        }
        .line-mid {
            margin-left: 30px;
        }

        .overflow-mid,
        .overflow-end {
            display: inline-block;
            vertical-align: top;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .overflow-mid {
            width: 22vw;
        }
        .overflow-end {
            width: 0;
        }

        &:hover i {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &.double {
        cursor: pointer;

        > * {
            pointer-events: none;
        }
        > i {
            right: 0;
        }
    }
    &.double:hover > i {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
