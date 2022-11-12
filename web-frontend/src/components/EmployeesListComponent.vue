<template>
  <div class="list-wrapper">
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
      <div class="list-title">Password</div>
    </div>

    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(employee, index) in employees" :key="employee.id">
        <div class="list-item">{{ employee.email }}</div>
        <div class="list-item">{{ employee.password }}</div>
        <div class="list-trash-icon-wrapper">
          <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteEmployee(index)"/>
        </div>
      </div>
    </div>

    <div class="list-add-button-wrapper">
      <MainButton class="mt-button" text="Add new employee" @button-click="this.dialog = true;"></MainButton>
    </div>
  </div>

  <AddEmployeeDialog v-model="dialog" @close-dialog="dialog = false" @add-employee="onAddEmployee"/>
</template>

<script>
import { Employee } from "@/models/employee-model";
import MainButton from "@/components/ButtonComponent";
import AddEmployeeDialog from "@/dialogs/AddEmployeeDialog";

export default {
  name: "AdminEmployeesComponent",
  components: {AddEmployeeDialog, MainButton},
  data: function() {
    return {
      employees: [],
      dialog: false,
    };
  },
  methods: {
    getEmployeesData() {
      this.employees.push(new Employee('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
      this.employees.push(new Employee('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
    },
    onDeleteEmployee(index) {
      this.employees.splice(index, 1);
    },
    onAddEmployee(email) {
      this.employees.push(new Employee('sadkskaédkasédlséldk', email, 'valami3'));
    }
  },
  beforeMount(){
    this.getEmployeesData();
  }
}
</script>

<style scoped>

</style>
