<template>
    <div id="examples">
        <section id="button">
            <h1>&lt;DKButton&gt;</h1>
            <Button />
        </section>
        <section id="video">
            <h1>&lt;DKVideo&gt;</h1>
            <Video />
        </section>
        <section id="tooltip">
            <h1>&lt;DKTooltip&gt;</h1>
            <Tooltip>Hover Me!</Tooltip>
        </section>
        <section id="hoverbox">
            <h1>&lt;DKHoverbox&gt;</h1>
            <Hoverbox fill="rgba(0,0,0,0.5)">Hover Me!</Hoverbox>
        </section>
        <section id="toggle">
            <h1>&lt;DKToggle&gt;</h1>
            <Toggle />
        </section>
        <section id="navbar">
            <h1>&lt;DKNavbar&gt;</h1>
            <Navbar />
        </section>
        <section id="searchbar">
            <h1>&lt;DKSearchbar&gt;</h1>
            <Searchbar />
        </section>
        <section id="pagination">
            <h1>&lt;DKPagination&gt;</h1>
            <Pagination><i class="fa fa-arrow-right"></i></Pagination>
        </section>
        <section id="popup">
            <h1>&lt;DKPopup&gt;</h1>
            <Popup>DKPopup</Popup>
        </section>
    </div>
</template>

<script>
import Button from '@/examples/Button';
import Video from '@/examples/Video';
import Tooltip from '@/examples/Tooltip';
import Hoverbox from '@/examples/Hoverbox';
import Toggle from '@/examples/Toggle';
import Navbar from '@/examples/Navbar';
import Searchbar from '@/examples/Searchbar';
import Pagination from '@/examples/Pagination';
import Popup from '@/examples/Popup';

export default {
    name: 'Home',

    components: {
        Button,
        Video,
        Tooltip,
        Hoverbox,
        Toggle,
        Navbar,
        Searchbar,
        Pagination,
        Popup,
    },

    setup() {
        document.body.style.background = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--white');
        document.title = 'Examples | Vue DK Lib';
    },
};
</script>

<style lang="scss">
#examples {
    h1 {
        letter-spacing: 2px;
    }
}
</style>
