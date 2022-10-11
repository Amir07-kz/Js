<template>
    <div class="live-code">
        <DisplayState :state="$data"/>
    </div>
</template>

<script>
import DisplayState from './components/DisplayState';

export default {
    name: 'LiveCode',
    data() {
        return {
            users: [
                { name: 'Alex', age: 10 },
                { name: 'Pat', age: 25 },
                { name: 'Tom', age: 18 },
                { name: 'Sergey', age: 36 },
            ],
            newUsers: [],
        };
    },
    components: { DisplayState },
    mounted() {
        this.newUsers = this.users.map(({ name }) => name);
    },
};
</script>

<style scoped>
.live-code {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
