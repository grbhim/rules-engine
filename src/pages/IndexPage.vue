<template>
  <q-page class="q-pa-md">
    <component :is="componentToLoad"></component>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { inject } from "vue";
import LoanApplication from "components/loan/LoanApplication";
import LoanLender from "components/lender/LoanLender";

export default defineComponent({
  name: 'IndexPage',
  components: {
    LoanApplication,
    LoanLender
  },
  setup() {
    const { componentToLoad } = inject('componentToLoad', LoanApplication);

    return {
      componentToLoad
    }
  }
})
</script>
