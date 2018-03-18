<template>
    <div>
    	<el-button :plain="true" @click="addItem()">Adicionar Cliente</el-button>
        <el-table
                :data="tableData"
                border
                style="width: 100%"
                class="table">
            <el-table-column
                    fixed
                    prop="id"
                    label="id">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="Nome">
            </el-table-column>
            <el-table-column
                    prop="limits.value"
                    label="Limite de Credito">
            </el-table-column>
            <el-table-column
                    prop="limits.venture"
                    label="Risco">
            </el-table-column>
            <el-table-column
                    prop="limits.rate"
                    label="Taxa">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="Endereço">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="Ação"
                    width="100">
                <template scope="scope">
                    <el-button size="mini" icon="edit" @click="editItem(scope.$index, tableData)" type="primary" ></el-button>
                    <el-button size="mini" icon="delete" @click="removeItem(scope.$index, tableData)" type="danger" ></el-button>
                </template>
            </el-table-column>
        </el-table>
        </el-pagination>
        <db-modal :dialogFormVisible="dialogFormVisible" :form="form" v-on:canclemodal="dialogVisible"></db-modal>
    </div>

</template>

<script>
    import Bus from '../eventBus'
    import DbModal from './DbModal.vue'

    export default {
        data(){
            return {
                tableData: [],
                apiUrl: 'http://localhost:8081/ccm/api/clientes',
                total: 0,
                pageSize: 10,
                currentPage: 1,
                name: '',
                dialogFormVisible: false,
                form: {
				    "id": null,
				    "name": null,
				    "limits": {
				        "id": null,
				        "value": null,
				        "venture": null,
				        "rate": null
				    },
				    "addresses": null
				}
            }
        },
        components: {
            DbModal
        },
        mounted () {
            this.getCustomers();
            Bus.$on('filterResultData', (data) => {
                this.tableData = data.content;
                this.total = data.total_pages;
                this.pageSize = data.count;
                this.email = data.email;
                this.sex = data.sex;

            });
        },

        methods: {

            dialogVisible: function () {
                this.dialogFormVisible = false;
            },

            getCustomers: function () {
            	console.log(this.apiUrl);
            	
                this.$axios.get(this.apiUrl).then((response) => { 
                    this.tableData = response.data.content;
                    console.log(this.tableData);
                    this.total = response.data.totalElements;
                    this.pageSize = response.data.size;
                    console.log(response.data);
                }).catch(function (response) {
                    console.log(response)
                });
            },
            changePage: function (currentPage) {
                this.currentPage = currentPage;
                this.getCustomers()
            },
            addItem: function () {
                this.dialogFormVisible = true;
                this.form = {
				    "id": null,
				    "name": null,
				    "limits": {
				        "id": null,
				        "value": null,
				        "venture": null,
				        "rate": null
				    },
				    "addresses": null
				}
            },
            editItem: function (index, rows) {
                this.dialogFormVisible = true;
                const itemId = rows[index].id;
                const idurl = 'http://127.0.0.1:8081/ccm/api/clientes/' + itemId;
                this.$axios.get(idurl).then((response) => {
                    this.form = response.data;
                }).catch(function (response) {
                    console.log(response)
                });
            },
            
            removeItem: function(index, rows) {
                const itemId = rows[index].id;
                const idurl = 'http://127.0.0.1:8081/ccm/api/clientes/' + itemId;
                this.$axios.delete(idurl).then((response) => {
                rows.splice(index, 1);
                }).catch(function (response) {
                    console.log(response)
                });
                
 
            	
            },

            formatter(row, column) {
                let data = this.$moment(row.create_datetime, this.$moment.ISO_8601);
                return data.format('YYYY-MM-DD')
            },
        }
    }
</script>

<style>
    .table {
        margin-top: 30px;
    }

    .pagination {
        margin-top: 10px;
        float: right;
    }

</style>