<template>
  <div class="add">
    <h1 class="page-header">Adicionar Cliente</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="exampleInputGroup1"
                      label="Nome Cliente:"
                      label-for="exampleInput1"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="exampleInput1"
                        type="text"
                        v-model="customer.name"
                        required
                        placeholder="Insira o nome.">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Limite de Credito:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="customer.limitValue"
                        required
                        placeholder="Informe o limite de crédito">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup3"
                      label="Risco:"
                      label-for="exampleInput3">
          <b-form-select id="exampleInput3"
                        :options="risks"
                        required
                        v-model="customer.limitRisk">
          </b-form-select>
        </b-form-group>
        <b-form-group id="exampleInputGroup4"
                      label="Endereço:"
                      label-for="exampleInput4">
          <b-form-input id="exampleInput3"
                        type="text"
                        v-model="customer.address"
                        required
                        placeholder="Informe o endereço.">
          </b-form-input>
        </b-form-group>
        
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      customer: {
        id: null, name: null, limitValue: null, limitRisk: null, address: null
      },
      show: true,
      risks: [{ text: 'Selecione', value: null }, 'A','B','C']
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      let newCustomer = {
        "address": this.customer.address,
        "id": null,
        "limits": {
          "id": null,
          "rate": null,
          "value": this.customer.limitValue,
          "venture": this.customer.limitRisk
        },
        "name": this.customer.name
      };
      this.$http.post('http://localhost:8080/ccm/api/clientes', newCustomer)
        .then(function(response){
          this.$router.push({path: '/'});
        });
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.customer = {
        id: null, name: null, limitValue: null, limitRisk: null, address: null
      }
      
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
