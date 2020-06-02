<template>
    <div>
        <h3>Customers</h3>
        <p>{{ customers }}</p>
    </div>
</template>

<script>
import customerService from '../service/customerService';
export default {
    name: 'Customers',
    data(){
        return {
            customers: [],
        }
    },

    methods: {
        async getCustomers(){
            try {
                this.customers = await customerService.getCustomers();
                console.dir(this.customers);
            } catch (error) {
                console.dir(error);
            }
        }
    },

    created(){
        this.getCustomers();
    }
}
</script>