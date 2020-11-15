<template>
    <div class="component-playground">
        <div class="options-container">
            <div class="options">
                <div class="option property">
                    <code
                        ><span class="code-blue">text</span>=<span class="code-string"
                            >"{{ propObject.text }}"</span
                        ></code
                    >
                    <input
                        type="text"
                        v-model="propObject.text"
                        class="large-input"
                        :class="{ invalid }"
                    />
                </div>
                <div class="option property">
                    <code
                        ><span class="code-blue">duration</span>="<span class="code-num">{{
                            propObject.duration
                        }}</span
                        >"</code
                    >
                    <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="100"
                        v-model.number="propObject.duration"
                        class="large-input"
                    />
                </div>
                <div class="option property">
                    <code
                        ><span class="code-blue">slotLeft</span>=<span class="code-string"
                            >"{{ propObject.slotLeft }}"</span
                        ></code
                    >
                    <textarea
                        v-model="propObject.slotLeft"
                        :class="{ invalid }"
                        class="large-input"
                    />
                    <p>
                        Any valid HTML can go here. Fontawesome and Material Icons are loaded into
                        this demo, give it a try:
                        <code @click="fillIcon(0, 'slotLeft')" class="icon-examples"
                            >&lt;i class="fa fa-thumbs-up"&gt;&lt;/i&gt;</code
                        >
                        <code @click="fillIcon(1, 'slotLeft')" class="icon-examples"
                            >&lt;span class="material-icons">thumb_up&lt;/span></code
                        >
                        <small>
                            <strong>Note:</strong> <code class="code-note">&lt;span&gt;</code> and
                            <code class="code-note">&lt;i&gt;</code> are
                            <code class="code-note">position: absolute;</code> by default.
                        </small>
                    </p>
                </div>
                <div class="option property">
                    <code
                        ><span class="code-blue">slotRight</span>=<span class="code-string"
                            >"{{ propObject.slotRight }}"</span
                        ></code
                    >
                    <textarea
                        v-model="propObject.slotRight"
                        :class="{ invalid }"
                        class="large-input"
                    />
                    <p>
                        Same as <code class="code-note">slotLeft</code> but positioned to the right
                        <code @click="fillIcon(0, 'slotRight')" class="icon-examples"
                            >&lt;i class="fa fa-thumbs-up"&gt;&lt;/i&gt;</code
                        >
                        <code @click="fillIcon(1, 'slotRight')" class="icon-examples"
                            >&lt;span class="material-icons">thumb_up&lt;/span></code
                        >
                    </p>
                </div>
                <div class="option button-center">
                    <VTButton @click="toast()" :styles="{ margin: '0 0 40px' }"
                        >CREATE TOAST</VTButton
                    >
                </div>
            </div>
        </div>
        <div class="example-container swap-hide">
            <div class="copy-code" @click="copyCode('global')">
                <code class="toast-copy-code">
                    <div>
                        <span class="code-const">app</span>.<span class="code-method">use</span
                        ><span class="code-yellow">(</span
                        ><span class="code-blue">Vuelity</span>.<span class="code-blue"
                            >VTToast</span
                        >, <span class="code-purple">{</span>
                    </div>
                    <div class="preview-inner">
                        <div>
                            <span class="code-blue">styles</span>:
                            <span class="code-blue">{}</span>,
                        </div>
                        <div>
                            <span class="code-blue">duration</span>:
                            <span class="code-num">5000</span>,
                        </div>
                        <div>
                            <span class="code-blue">positionX</span>:
                            <span class="code-string">'right'</span>,
                        </div>
                        <div>
                            <span class="code-blue">positionY</span>:
                            <span class="code-string">'bottom'</span>,
                        </div>
                    </div>
                    <div><span class="code-purple">}</span><span class="code-yellow">)</span></div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
            <div class="copy-code" @click="copyCode('local')">
                <code class="toast-copy-code">
                    <div>
                        <span class="code-navy">this</span>.<span class="code-method">$toast</span
                        ><span class="code-yellow">(</span
                        ><span class="code-string">'{{ propObject.text }}'</span>,
                        <span class="code-purple">{</span>
                    </div>
                    <div class="preview-inner">
                        <div>
                            <span class="code-blue">styles</span>:
                            <span class="code-blue">{}</span>,
                        </div>
                        <div>
                            <span class="code-blue">duration</span>:
                            <span class="code-num">{{ propObject.duration }}</span
                            >,
                        </div>
                        <div>
                            <span class="code-blue">slotLeft</span>:
                            <span class="code-string">`</span>
                        </div>
                        <div class="preview-values">
                            <span class="code-string">{{ propObject.slotLeft }}</span>
                        </div>
                        <div><span class="code-string">`</span>,</div>
                        <div>
                            <span class="code-blue">slotRight</span>:
                            <span class="code-string">`</span>
                        </div>
                        <div class="preview-values">
                            <span class="code-string">{{ propObject.slotRight }}</span>
                        </div>
                        <div><span class="code-string">`</span>,</div>
                    </div>
                    <div><span class="code-purple">}</span><span class="code-yellow">)</span>;</div>
                </code>
                <i class="fa fa-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import app from '@/main';

export default {
    name: 'App',

    setup() {
        const propObject = reactive({
            duration: 3000,
            text: '',
            slotLeft: '',
            slotRight: '',
        });
        const styleProperty = ref('');
        const styleValue = ref('');
        const invalid = ref(false);

        const code = computed(() => {
            return {
                local: `this.$toast('${propObject.text}', {
    styles: {},
    duration: ${propObject.duration},
    slotLeft: \`${propObject.slotLeft}\`,
    slotRight: \`${propObject.slotRight}\`
});
`,
                global: `app.use(Vuelity.VTToast, {
    styles: {},
    duration: 5000,
    positionX: 'right',
    positionY: 'bottom'
})
`,
            };
        });
        const copyCode = scope => {
            navigator.clipboard.writeText(code.value[scope]);
            app.$toast('Copied!');
        };
        const toast = () => {
            if (!propObject.text && !propObject.slotLeft && !propObject.slotRight)
                invalid.value = true;
            else invalid.value = false;

            app.$toast(propObject.text, {
                duration: propObject.duration,
                styles: propObject.styles,
                slotLeft: propObject.slotLeft,
                slotRight: propObject.slotRight,
            });
        };
        const fillIcon = (library, pos) => {
            propObject[pos] =
                library === 0
                    ? '<i class="fa fa-thumbs-up"></i>'
                    : '<span class="material-icons">thumb_up</span>';
        };

        return { propObject, styleProperty, styleValue, invalid, copyCode, toast, fillIcon };
    },
};
</script>

<style scoped lang="scss">
.property {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid;
    border-radius: 5px;
    box-shadow: 0 1px 5px -3px rgba(0, 0, 0, 0.8);
}

.preview-inner {
    padding-left: 30px;
}
.preview-values {
    max-width: 180px;
    padding-left: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
}

p {
    margin-top: 10px;

    .icon-examples {
        cursor: pointer;
        display: block;
        padding: 5px;
        margin: 10px auto;
        font-size: 16px;
        border: 1px solid rgba(var(--white-rgb), 0.8);
        border-radius: 5px;
        white-space: pre-wrap;

        &:hover {
            color: var(--code-blue);
            background: var(--black);
        }
    }

    .code-note {
        display: inline;
        padding: 2px 5px;
        background-color: var(--black);
        color: var(--code-blue);
        border-radius: 5px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }
}

.invalid {
    border: 1px solid #ff0000;
}
</style>
