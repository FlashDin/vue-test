<template>
  <md-content>
    <router-link to="/home">
      <md-button class="md-button md-raised md-primary">
        <i class="material-icons">android</i>
        {{msg}}
      </md-button>
    </router-link>
  </md-content>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>
