<template>
    <div id="home">
        <div id="home-left">
            <h1>
                Vuelity is a lightweight, <i>'use-what-you-need'</i> component library for Vue.js v3
            </h1>
        </div>
        <div id="home-right">
            <h1>INSTALLATION</h1>
            <div id="installation">
                <div class="block">
                    <code @click="copyCode($event)">npm i vuelity<i class="fa fa-copy"></i></code>
                </div>
                <div class="block">
                    <code @click="copyCode($event)"
                        ><span class="code-purple">import</span>
                        <span class="code-yellow"> { </span> <span class="code-blue">DKButton</span>
                        <span class="code-yellow"> } </span>
                        <span class="code-purple">from </span>
                        <span class="code-orange">'vuelity'</span>;<i class="fa fa-copy"></i
                    ></code>
                    ...
                    <code @click="copyCode($event)"
                        ><span class="code-blue">components:</span>
                        <span class="code-purple">{ </span> <span class="code-blue">DKButton</span>
                        <span class="code-purple">}</span><i class="fa fa-copy"></i
                    ></code>
                </div>
                or, register all at once in main.js:
                <div class="block">
                    <code @click="copyCode($event)"
                        ><span class="code-purple">import</span> <span class="code-navy">* </span>
                        <span class="code-purple">as </span>
                        <span class="code-blue">DKLib</span>
                        <span class="code-purple"> from </span>
                        <span class="code-orange">'vuelity'</span>;<i class="fa fa-copy"></i
                    ></code>
                    ...
                    <code @click="copyCode($event)"
                        ><div class="line-top">
                            <span class="code-green">Object</span>.<span class="code-light-yellow"
                                >keys</span
                            ><span class="code-yellow">(</span><span class="code-blue">DKLib</span
                            ><span class="code-yellow">)</span>.<span class="code-light-yellow"
                                >forEach</span
                            ><span class="code-yellow">(</span><span class="code-blue">el</span>
                            <span class="code-navy"> =></span> <span class="code-purple">{</span>
                        </div>
                        <i class="fa fa-copy"></i>
                        <div class="line-mid">
                            <span class="code-const">app</span>.<span class="code-light-yellow"
                                >component</span
                            ><span class="code-purple">(</span><span class="code-blue">el</span>,
                            <span class="code-blue">DKLib[el]</span
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
                        ><span class="code-grey">&lt;</span><span class="code-green">DKButton</span
                        ><span class="code-grey">&gt;</span>Hello!<span class="code-grey"
                            >&lt;/</span
                        ><span class="code-green">DKButton</span><span class="code-grey">&gt;</span
                        ><i class="fa fa-copy"></i
                    ></code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import app from '@/main';

export default {
    name: 'Home',

    setup() {
        const copyCode = e => {
            navigator.clipboard.writeText(e.target.innerText);

            app.config.globalProperties.$toast('Copied!');
        };

        document.body.removeAttribute('style');
        document.title = 'Home | Vuelity';

        return { copyCode };
    },
};
</script>

<style lang="scss">
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
    width: 40%;
}

#installation,
.block {
    @include flex-y(center, center);
}

.block {
    padding: 15px 20px;
    margin: 10px;
    font-size: 18px;
    background: var(--black);
    border-radius: 5px;

    code {
        cursor: pointer;
        position: relative;
        width: 100%;

        span {
            pointer-events: none;
        }

        i {
            position: absolute;
            right: -20px;
            opacity: 0;
            transform: translateY(50%);
            transition: all 0.15s;
        }

        .line-top,
        .line-mid,
        .line-bottom {
            pointer-events: none;
            width: 100%;
            line-height: 25px;
        }
        .line-mid {
            text-align: center;
        }

        &:hover i {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &:nth-of-type(3) {
        text-align: left;
    }
}
</style>
