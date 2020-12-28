<template>
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
                    <code @click="copyCode($event)">npm i vuelity<i class="fa fa-copy"></i></code>
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
                            ><span class="code-yellow">(</span><span class="code-blue">Vuelity</span
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
                            ><span class="code-purple">(</span><span class="code-blue">el</span>,
                            <span class="code-blue">Vuelity[el]</span
                            ><span class="code-purple">)</span>;
                        </div>
                        <div class="line-bottom">
                            <span class="code-purple">}</span><span class="code-yellow">)</span>;
                        </div></code
                    >
                </div>
                then:
                <div class="block">
                    <code @click="copyCode($event)"
                        ><span class="code-tag">&lt;</span><span class="code-green">VTButton</span
                        ><span class="code-tag">&gt;</span>Hello!<span class="code-tag">&lt;/</span
                        ><span class="code-green">VTButton</span><span class="code-tag">&gt;</span
                        ><i class="fa fa-copy"></i
                    ></code>
                </div>
            </div>
            <div v-else>
                <div class="block double" @click="copyCode($event)">
                    <code
                        ><span class="code-tag">&lt;</span><span class="code-navy">script </span>
                        <span class="code-blue">src</span>=<span class="code-string overflow-mid"
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
                        ><span class="code-blue">src</span>=<span class="code-string overflow-mid"
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
                            <span class="code-blue">Vuelity</span><span class="code-purple">[</span
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
                            ><span class="code-yellow">(</span><span class="code-blue">Vuelity</span
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
                            ><span class="code-purple">(</span><span class="code-blue">el</span>,
                            <span class="code-blue">Vuelity[el]</span
                            ><span class="code-purple">)</span>;
                        </div>
                        <div class="line-bottom">
                            <span class="code-purple">}</span><span class="code-yellow">)</span>;
                        </div></code
                    >
                </div>
                then:
                <div class="block">
                    <code @click="copyCode($event)"
                        ><span class="code-tag">&lt;</span><span class="code-green">VTButton</span
                        ><span class="code-tag">&gt;</span>Hello!<span class="code-tag">&lt;/</span
                        ><span class="code-green">VTButton</span><span class="code-tag">&gt;</span
                        ><i class="fa fa-copy"></i
                    ></code>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue';
import app from '@/main';

export default {
    name: 'Installation',

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
