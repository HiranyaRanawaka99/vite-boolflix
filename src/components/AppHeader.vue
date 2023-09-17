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

<nav>
  <div class="logo">
    <h1> BOOFLIX </h1>
  </div>
  <div class="navigate">
    <p><a href="#"> Home </a></p>
    <p><a href="#"> Serie TV </a></p>
    <p><a href="#"> Film </a></p>
    <p><a href="#"> Nuovi e popolari </a></p>
    <p><a href="#"> La mia lista </a></p>
    <p><a href="#"> Sfoglia per la lingua </a></p>
   
  </div>
  <div classs="searchbar">
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
  </div>
</nav>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variable' as *;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: $color-primary;
  }
  .navigate {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
  }

}


</style>