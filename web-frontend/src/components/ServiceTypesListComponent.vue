<template>
  <div class="list-wrapper">
    <!--list titles-->
    <div class="list-title-wrapper">
      <div class="list-title">Name</div>
      <div class="list-title">Handle time</div>
    </div>
    <!--list content-->
    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(serviceType, index) in dataCustomerService.serviceTypes" :key="serviceType.id">
        <div class="list-item">{{ serviceType.name }}</div>
        <div class="list-item">
          <span class="mr-2">{{ serviceType.handleTime }}</span>
          <span>minutes</span>
        </div>
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

export default {
  name: "ServiceTypesListComponent",
  components: { AddServiceTypeDialog, ButtonComponent },

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
    onAddServiceType(name, avgCompletionTime) {
      const createServiceTypeRequest = {
        name: name,
        handleTime: avgCompletionTime,
        customerServiceId: this.dataCustomerService.id,
      };

      this.axios
          .post(process.env.VUE_APP_BASE_API_URL + "/serviceTypes", createServiceTypeRequest)
          .then((response) => {
            this.dataCustomerService.serviceTypes.push(response.data)
          });
    },

    onDeleteServiceType(index) {
      const serviceTypeId = this.dataCustomerService.serviceTypes.at(index).id

      this.axios
          .delete(process.env.VUE_APP_BASE_API_URL + "/serviceTypes/" + serviceTypeId)
          .then((response) => {
            if (!response.code) {
              this.dataCustomerService.serviceTypes.splice(index, 1);
            }
          });
    },
  },
}
</script>

<style scoped>

</style>
