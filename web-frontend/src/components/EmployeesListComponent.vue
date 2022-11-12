<template>
  <div class="list-wrapper">
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
      <div class="list-title">Password</div>
    </div>
    <div class="list-item-wrapper" v-for="(employee, index) in employees" :key="employee.id">
      <div class="list-item">{{ employee.email }}</div>
      <div class="list-item">{{ employee.password }}</div>
      <div class="list-trash-icon-wrapper">
        <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteEmployee(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Employee } from "@/models/employee-model";

export default {
  name: "AdminEmployeesComponent",
  data: function() {
    return {
      employees: [],
    };
  },
  methods: {
    getEmployeesData() {
      this.employees.push(new Employee('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
      this.employees.push(new Employee('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
      this.employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
    },
    onDeleteEmployee(index) {
      this.employees.splice(index, 1);
    }
  },
  beforeMount(){
    this.getEmployeesData();
  }
}
</script>

<style scoped>
  .list-wrapper {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: #D9D9D9;
    padding: 2rem;
    position: relative;
    overflow: auto;
  }

  .list-title-wrapper {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
  }

  .list-title {
    font-size: 20px;
    font-weight: bold;
    width: 45%;
  }

  .list-item-wrapper {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }

  .list-item {
    font-size: 18px;
    width: 45%;
  }

  .list-trash-icon-wrapper {
    width: 10%;
  }

  .list-trash-icon {
    width: 15px;
    height: 30px;
    float: right;
    cursor: pointer;
  }
</style>
