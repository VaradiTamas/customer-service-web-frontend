<template>
  <div class="list-wrapper">
    <!--list titles-->
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
      <div class="list-title">Password</div>
    </div>
    <!--list content-->
    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(employee, index) in dataCustomerService.employees" :key="employee.id">
        <div class="list-item">{{ employee.email }}</div>
        <div class="list-item">{{ employee.password }}</div>
        <div class="list-trash-icon-wrapper">
          <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteEmployee(index)"/>
        </div>
      </div>
    </div>
    <!--list add button-->
    <div class="list-add-button-wrapper">
      <ButtonComponent class="mt-button" text="Add new employee" @button-click="this.dialog = true;"></ButtonComponent>
    </div>
  </div>

  <AddEmployeeDialog v-model="dialog" @close-dialog="dialog = false" @add-employee="onAddEmployee"/>
</template>

<script>
import { Employee } from "@/models/employee-model";
import ButtonComponent from "@/components/ButtonComponent";
import AddEmployeeDialog from "@/dialogs/AddEmployeeDialog";

export default {
  name: "AdminEmployeesComponent",
  components: { AddEmployeeDialog, ButtonComponent },

  props: {
    propCustomerService: {
      type: Object
    }
  },

  data: function() {
    return {
      dialog: false,
      dataCustomerService: {
        type: Object
      },
    };
  },

  watch: {
    propCustomerService: function(newVal) {
      this.dataCustomerService = newVal;
    }
  },

  beforeMount() {
    this.dataCustomerService = this.propCustomerService;
  },

  methods: {
    onDeleteEmployee(index) {
      this.employees.splice(index, 1);
    },
    onAddEmployee(email) {
      this.employees.push(new Employee('sadkskaédkasédlséldk', email, 'valami3'));
    }
  },
}
</script>

<style scoped>

</style>
