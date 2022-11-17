<template>
  <div class="list-wrapper">
    <!--list titles-->
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
      <div class="list-title">Password</div>
    </div>
    <!--list content-->
    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(serviceType, index) in serviceTypes" :key="serviceType.id">
        <div class="list-item">{{ serviceType.name }}</div>
        <div class="list-item">{{ serviceType.averageCompletionTime }}</div>
        <div class="list-trash-icon-wrapper">
          <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteServiceType(index)"/>
        </div>
      </div>
    </div>
    <!--list add buttons-->
    <div class="list-add-button-wrapper">
      <ButtonComponent class="mt-button" text="Add new service type" @button-click="this.dialog = true;"></ButtonComponent>
    </div>
  </div>

  <AddServiceTypeDialog v-model="dialog" @close-dialog="dialog = false" @add-service-type="onAddServiceType"/>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import AddServiceTypeDialog from "@/dialogs/AddServiceTypeDialog";
import {ServiceType} from "@/models/service-type-model";

export default {
  name: "AdminServiceTypesComponent",
  components: { AddServiceTypeDialog, ButtonComponent },

  data: function() {
    return {
      serviceTypes: [],
      dialog: false,
    };
  },

  methods: {
    getServiceTypesData() {
      this.serviceTypes.push(new ServiceType('sdasdkalsdjlkasdlkas', 'name1', 11111));
      this.serviceTypes.push(new ServiceType('dasdallalasásédlasád', 'name2', 222222));
      this.serviceTypes.push(new ServiceType('sadkskaédkasédlséldk', 'name3', 3333));
    },
    onDeleteServiceType(index) {
      this.serviceTypes.splice(index, 1);
    },
    onAddServiceType(name, avgCompletionTime) {
      this.serviceTypes.push(new ServiceType('sadkskaédkasédlséldk', name, avgCompletionTime));
    }
  },

  beforeMount() {
    this.getServiceTypesData();
    console.log(this.serviceTypes)
  }
}
</script>

<style scoped>

</style>
