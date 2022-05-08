<template>
  <div class="row full-width q-pt-xs">
    <q-card class="col-md-6 col-sm-12 col-xs-12 offset-md-3" flat bordered>
      <h5 class="ta-center q-ma-sm">Loan Repayment Options</h5>
      <q-item-section>
        <q-item-label caption class="ta-center">
          by
        </q-item-label>
      </q-item-section>

      <q-separator/>

      <q-card-section horizontal>
        <q-card-section class="col-6 bg-default text-white">
          Lender A
        </q-card-section>
        <q-card-section class="col-6 bg-default text-white">
          Lender B
        </q-card-section>
      </q-card-section>

      <q-separator/>

      <q-card-section horizontal>
        <q-card-section v-for="payment in monthlyPayment" :key="payment" class="col-6">
          {{ parseInt(payment).toFixed(2) }}
        </q-card-section>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
import {StringIdGenerator} from "src/shared/alphabetIncreament";
import {watch} from "vue";

export default {
  name: "LoanOptions",
  props: {
    monthlyPayment: {
      type: Object
    }
  }
}
</script>
