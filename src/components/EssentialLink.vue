<template>
  <q-item clickable @click="loadComponents(comp)">
    <q-item-section
      v-if="icon"
      avatar>
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    comp: {
      required: true
    },
    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['loadComp'],
  setup(props, ctx) {
    function loadComponents(component) {
      ctx.emit('loadComp', component)
    }

    return {
      loadComponents
    }
  }
}
</script>
