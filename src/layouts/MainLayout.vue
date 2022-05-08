<template>
  <q-layout view="hHh lpR lFr">
    <q-header elevated class="carClarityDefault">
      <q-toolbar>
        <q-toolbar-title>
          <strong>Car</strong>Clarity
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
