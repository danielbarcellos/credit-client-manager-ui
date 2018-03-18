<template>
    <el-dialog title="Cliente" v-model="dialogFormVisible" :close-on-click-modal="false" :show-close="false">
        <el-form :model="form">
            <el-form-item label="id" :label-width="formLabelWidth">
                <el-input :disabled="true" v-model="form.id" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Nome Cliente" :label-width="formLabelWidth">
                <el-input :disabled="false" v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="Limite de Credito" :label-width="formLabelWidth">
                <el-input :disabled="false" v-model="form.limits.value" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="Risco" :label-width="formLabelWidth">
            	 <el-select v-model="form.limits.venture" clearable placeholder="Limite de Crédito">
                	<el-option
                	        v-for="item in ['A', 'B', 'C']"
            	            :label="item"
        	                :value="item">
    	            </el-option>
	            </el-select>
            </el-form-item>
            <el-form-item label="Endereço" :label-width="formLabelWidth">
                <el-input :disabled="false" v-model="form.address" auto-complete="off"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button :plain="true" type="danger" v-on:click="canclemodal">Cancel</el-button>
            <el-button :plain="true" @click="updateForm(form)">Save</el-button>
        </div>
    </el-dialog>
</template>


<script>
    export default {
        props: ['dialogFormVisible', 'form'],
      
		 data() {
            return {
                formLabelWidth: '120px',
				formLabelWidthId: '20px'
            }
        },

        methods: {
            updateForm: function (formName) {
            console.log(formName);
            let itemId = formName.id;
            if(itemId) {
            	this.$axios.put('http://localhost:8080/ccm/api/clientes/' + itemId, {
				    "id": formName.id,
				    "name": formName.name,
				    "limits": {
				    	"id": formName.limits.id,
				        "value": formName.limits.value,
				        "venture": formName.limits.venture
				    },
				    "address": formName.address
				})
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }else {
            this.$axios.post('http://localhost:8080/ccm/api/clientes', {
				    "name": formName.name,
				    "limits": {
				        "value": formName.limits.value,
				        "venture": formName.limits.venture
				    },
				    "address": formName.address
				})
                    .then(function (response) {
                        console.log(response);
                        //this.form = response.data;

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            	location.reload();
            },
            canclemodal: function () {
                this.$emit('canclemodal');
            }
        }

    }

</script>