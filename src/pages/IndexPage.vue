<template>
  <q-page class="q-pa-md">
    <LoanApplication></LoanApplication>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import LoanApplication from "components/LoanApplication";

export default defineComponent({
  name: 'IndexPage',
  components: {
    LoanApplication
  }
})
</script>
