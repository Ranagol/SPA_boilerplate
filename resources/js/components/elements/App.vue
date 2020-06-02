<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './Navbar';
export default {
    name: 'App',
    components: {
        'navbar': Navbar,
    }
}
</script>