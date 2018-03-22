<template>
  <div class="customers">
    <h1 class="page-header">Gerenciamento de clientes</h1>
    <b-table striped hover :items="customers"></b-table>
  </div>
</template>

<script>

export default {
  name: 'Customers',
  data () {
    return {
      customers: []
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get('http://localhost:8080/ccm/api/clientes')
        .then(function(response){
          console.log(response.data.content);
          this.customers = response.data.content;
        });
    } 
  },
  created: function(){
    this.fetchCustomers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
