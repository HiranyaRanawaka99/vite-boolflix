<script>

export default {
    data(){
        return{
            searchedTerm: '',
        }
    },
    
    props: {
        searchText: String,
    },

    emits: ['searchMovie']
}
    
</script>


<template>
    <form 
        @submit.prevent = "$emit('searchMovie', searchedTerm )"
        class="input-group mb-3">
        <input 
             v-model="searchedTerm"
            :placeholder= "searchText|| 'Cerca'"
            type="text" 
            class="form-control" 
            aria-label="Recipient's username" aria-describedby="button-addon2"
        />
         <button 
            class="btn btn-outline-secondary" 
            type="button" 
            id="button-addon2">Cerca
        </button>
    </form>
</template>


<style lang="scss" scoped>

</style>