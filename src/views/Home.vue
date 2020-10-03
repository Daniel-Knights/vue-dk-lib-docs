<template>
    <div id="home">
        <h1>INSTALLATION</h1>
        <div id="installation">
            <div class="block">
                <code @click="copyCode($event)">npm i vue-dk-lib<i class="fa fa-copy"></i></code>
            </div>
            <div class="block">
                <code @click="copyCode($event)"
                    ><span class="purple">import</span> <span class="yellow">{ </span>
                    <span class="blue">DKButton</span> <span class="yellow">}</span>
                    <span class="purple"> from</span> <span class="orange">'vue-dk-lib'</span>;<i
                        class="fa fa-copy"
                    ></i
                ></code>
                ...
                <code @click="copyCode($event)"
                    ><span class="blue">components:</span> <span class="purple">{ </span>
                    <span class="blue">DKButton</span> <span class="purple">}</span
                    ><i class="fa fa-copy"></i
                ></code>
            </div>
            or
            <div class="block">
                <code @click="copyCode($event)"
                    ><span class="purple">import</span> <span class="dark-blue">* </span>
                    <span class="purple">as </span>
                    <span class="blue">DKLib</span>
                    <span class="purple"> from</span> <span class="orange">'vue-dk-lib'</span>;<i
                        class="fa fa-copy"
                    ></i
                ></code>
                ...
                <code @click="copyCode($event)"
                    ><span class="blue">components:</span> <span class="purple">{ </span>
                    <span class="blue">DKLib.DKButton</span> <span class="purple">}</span
                    ><i class="fa fa-copy"></i
                ></code>
            </div>
            <div class="block">
                <code @click="copyCode($event)"
                    ><span class="grey">&lt;</span><span class="green">DKButton</span
                    ><span class="grey">&gt;</span>Hello!<span class="grey">&lt;/</span
                    ><span class="green">DKButton</span><span class="grey">&gt;</span
                    ><i class="fa fa-copy"></i
                ></code>
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

            app.config.globalProperties.$toast('Copied!', { duration: 3000 });
        };

        return { copyCode };
    },
};
</script>

<style lang="scss">
#home {
    h1 {
        margin: 100px 0 0;
    }
}

#installation,
.block {
    @include flex-y(center, center);
}

#installation {
    height: 400px;
}

.block {
    padding: 10px;
    margin: 10px;
    font-size: 18px;
    background: #1e1e1e;
    border-radius: 5px;

    code {
        cursor: pointer;
        position: relative;
        width: 100%;

        i {
            position: absolute;
            right: -20px;
            opacity: 0;
            transform: translateY(50%);
            transition: all 0.15s;
        }

        &:hover i {
            opacity: 1;
            transform: translateY(0);
        }

        .purple {
            color: #c684c1;
        }
        .blue {
            color: #9adcff;
        }
        .orange {
            color: #cf9176;
        }
        .yellow {
            color: #ffd900;
        }
        .dark-blue {
            color: #539bd8;
        }
        .green {
            color: #47cab0;
        }
        .grey {
            color: #808080;
        }
    }
}
</style>
