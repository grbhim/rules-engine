<template>

  <div class="row full-width q-pt-xs">
    <q-card class="col-md-6 col-sm-12 col-xs-12 offset-md-3">
      <h5 class="ta-center">Loan Details</h5>

      <q-input outlined v-model="loanAmount" type="number" prefix="$" label="Loan Amount" class="q-pa-md" />

      <q-select
        outlined
        v-model="loanTermYears"
        :options="loanTermYearsOptions"
        option-value="id"
        option-label="desc"
        option-disable="inactive"
        emit-value
        map-options
        label="Loan Term Years"
        class="q-pa-md" />

      <q-btn @click="showLenders" unelevated rounded color="default" label="Submit" class="float-right q-ma-lg" />

    </q-card>

    <LoanOptions v-if="showLenderOptions" :monthlyPayment="monthlyPayment"></LoanOptions>

  </div>


</template>

<script>
import {defineComponent, ref} from 'vue'
import {LocalStorageService} from "src/services/local-storage";
import {RepaymentCalculator} from "src/shared/repaymentCalculator";
import LoanOptions from "components/loan/LoanOptions";
let pmt = require('formula-pmt');

export default defineComponent({
  name: 'LoanApplication',
  components: {
    LoanOptions
  },
  setup() {
    const loanAmount = ref(null);
    const loanTermYears = ref(null);
    let showLenderOptions = ref(false);
    let monthlyPayment = ref(null);

    LocalStorageService.createDefault();

    function showLenders() {
      monthlyPayment.value = RepaymentCalculator.monthlyPayment(loanTermYears, loanAmount);
      showLenderOptions.value = true;
    }

    return {
      loanAmount,
      loanTermYears,
      monthlyPayment,
      loanTermYearsOptions: [
        {
          year: 1,
          desc: '1 year'
        },
        {
          year: 2,
          desc: '2 years'
        },
        {
          year: 3,
          desc: '3 years'
        },
        {
          year: 4,
          desc: '4 years'
        },
        {
          year: 5,
          desc: '5 years'
        }
      ] ,
      showLenderOptions,
      showLenders
    }
  }
})
</script>
