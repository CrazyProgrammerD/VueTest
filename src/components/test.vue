<template>
    <div id="test" v-bind:class="classObject"></div>
</template>

<script>
export default {
    el: '#test',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
}
</script>