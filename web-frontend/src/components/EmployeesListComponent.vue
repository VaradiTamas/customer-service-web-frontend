<template>
  <div class="list-wrapper">
    <!--list titles-->
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
    </div>
    <!--list content-->
    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(employee, index) in dataCustomerService?.employees" :key="employee.id">
        <div class="list-item">{{ employee.email }}</div>
        <div class="list-item"></div>
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
      const employeeId = this.dataCustomerService.employees.at(index).id

      this.axios
          .delete(process.env.VUE_APP_BASE_API_URL + `/employees/${employeeId}`)
          .then(() => {
            this.dataCustomerService.employees.splice(index, 1);
          });
    },
    onAddEmployee(email) {
      const registerUserDto = {
        email: email,
        password: "this field won't be used",
        role: "EMPLOYEE",
        customerServiceId: this.dataCustomerService.id
      };

      this.axios
          .post(process.env.VUE_APP_BASE_API_URL + '/auth/register', registerUserDto)
          .then((response) => {
            this.dataCustomerService.employees.push(response.data);
          });
    }
  },
}
</script>

<style scoped>

</style>
