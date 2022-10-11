<template>
    <div class="display-state">
        <pre class="display-state__body">
            <strong class="display-state__body-header"
            >The state is:</strong>{{ JSON.stringify(state, null, 2) }}
        </pre>
    </div>
</template>

<script>

export default {
    name: 'DisplayState',
    props: {
        state: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style scoped>
.display-state {
    margin: 40px;
}

.display-state__body {
    background: #f6f8fa;
    font-size: 22px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

.display-state__body-header {
    margin-bottom: 10px;
}
</style>
