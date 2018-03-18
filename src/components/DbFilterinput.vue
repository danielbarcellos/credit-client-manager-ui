<template>
    <el-form :inline="true" :model="formInline">
		
		<el-button :plain="true" @click="openModal()">Adicionar Cliente</el-button>
		
    </el-form>
</template>

<script>
    import lodash from 'lodash'
    import Bus from '../eventBus'

    export default {
        name: 'db-filterinput',
        data() {
            return {
                type_options: [],
                formInline: {
                    sex: '',
                    email: ''
                },
                formLabelWidth: '120px'
            }
        },

        methods: {
        	openModal: function() {
        		this.dialogFormVisible = true;
        	}
        }
    }


</script>