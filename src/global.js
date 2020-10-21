import { reactive } from 'vue';
import router from '@/router';

const root = getComputedStyle(document.documentElement);

const global = reactive({
    $primary: root.getPropertyValue('--primary'),
    $white: root.getPropertyValue('--white'),
    $black: root.getPropertyValue('--black'),
    $lightGrey: root.getPropertyValue('--light-grey'),
    $darkGrey: root.getPropertyValue('--dark-grey'),
    $tooltipStyles: { width: '300px', minWidth: 'unset' },
    $tooltipContainerStyles: { maxWidth: '100%' },
    $tooltipPosition: 'right',
});

const tooltipResponsive = () => {
    const tips = document.querySelectorAll('.vt__tooltip');

    if (window.matchMedia('(max-width: 992px)').matches) {
        global.$tooltipPosition = 'top';

        // Overrule default function
        setTimeout(() => {
            tips.forEach(tip => {
                const codepenTip = tip.innerHTML.includes('Codepen');
                const columnTip = tip.parentElement.parentElement.className.includes('column');
                const exampleTip = tip.parentElement.parentElement.className.includes('example');
                if (codepenTip || columnTip || exampleTip) return;

                tip.style.justifyContent = 'unset';
            });
        }, 0);
    } else {
        global.$tooltipPosition = 'right';
    }
};

window.addEventListener('load', tooltipResponsive);
window.addEventListener('resize', tooltipResponsive);
router.afterEach(() => setTimeout(() => tooltipResponsive(), 0));

export default global;
