<template>
    <div id="home">
        <div id="home-left">
            <h1>
                Vuelity is a lightweight, <i>'use-what-you-need'</i> component library for Vue.js v3
            </h1>
        </div>
        <Installation />
    </div>
</template>

<script>
import Installation from '@/components/Installation';

export default {
    name: 'Home',

    components: { Installation },
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
    min-height: 100vh;
    padding: 100px 0;

    h1 {
        letter-spacing: 1px;
    }
}

#home-left {
    margin: 75px 0 0;
    padding: 20px;
    max-width: 550px;
    background: var(--primary);
    border-radius: 10px;
}
#home-right {
    padding: 40px 5px 0;
    height: 560px;
    width: 40%;
}

#home-tabs {
    @include flex-x(space-around, center);
    padding: 10px 0;

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
        max-width: calc(100vw - 40px);
        overflow: hidden;
        text-overflow: ellipsis;

        span {
            pointer-events: none;
        }

        .line-top,
        .line-mid,
        .line-bottom {
            pointer-events: none;
            text-align: left;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
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
            min-width: 200px;
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
