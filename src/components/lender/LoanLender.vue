<template>
  <div class="row full-width q-pt-xs">
    <q-card class="col-md-6 col-sm-12 col-xs-12 offset-md-3">
      <h5 class="ta-center">New Lender</h5>

      <q-input outlined v-model="lender.name" label="Lender Name" class="q-pa-md"/>
      <q-input outlined v-model="lender.interest_rate" type="number" label="Interest Rate (p.a.)" class="q-pa-md"/>
      <q-input outlined v-model="lender.monthly_fee" type="number" prefix="$" label="Monthly Fee" class="q-pa-md"/>
      <q-input outlined v-model="lender.broker_fee" type="number" label="Broker Fee (p.a.)" class="q-pa-md"/>

      <q-btn @click="addLender" unelevated rounded color="default" label="Add" class="float-right q-ma-lg"/>

    </q-card>

  </div>
</template>

<script>
import {ref} from "vue";
import {LocalStorageService} from "src/services/local-storage";
import {Lenders} from "src/services/lenders";
import {useQuasar} from "quasar";

export default {
  name: "LoanLender",
  setup() {
    const lender = ref(new Lenders());
    const $q = useQuasar()

    function addLender() {
      LocalStorageService.addNew(lender.value);
      $q.notify({
        message: 'New Lender added!',
        color: 'secondary',
        position: 'top'
      })
    }

    return {
      lender,
      addLender
    }
  }
}
</script>
