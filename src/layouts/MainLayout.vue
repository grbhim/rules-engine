<template>
  <q-layout view="hHh lpR lFr">
    <q-header elevated class="carClarityDefault">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-toolbar-title>
          <strong>Car</strong>Clarity
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" @loadComp="initiateComponent" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, ref, provide} from 'vue';
import EssentialLink from "components/EssentialLink";
import LoanLender from "components/lender/LoanLender";
import LoanApplication from "components/loan/LoanApplication";

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const componentToLoad = ref(LoanApplication);

    function initiateComponent(comp) {
      componentToLoad.value = comp;
      leftDrawerOpen.value = false;
    }

    provide('componentToLoad', {
      componentToLoad,
      initiateComponent
    });

    return {
      leftDrawerOpen,
      componentToLoad,
      essentialLinks: [
        {
          title: "Add New Lender",
          icon: "add_business",
          comp: LoanLender
        },
        {
          title: "Calculate Repayments",
          icon: "calculate",
          comp: LoanApplication
        },
      ],
      initiateComponent
    }
  }
})
</script>
