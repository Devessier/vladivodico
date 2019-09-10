<template>
    <div class="flex w-full bg-red-800">definition</div>
</template>

<script></script>

<style>
.page-leave-to,
.page-enter {
    animation-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.page-leave-to {
    z-index: 0;
}

.page-enter {
    z-index: 1;
}

.page-leave-to {
    animation-name: leaveToLeft;
}

.page-enter {
    animation-name: enterFromRight;
}
</style>
