<template>
  <div class="home">
    {{cuest}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      cuest: []
    }
  },
  mounted() {
    window.ipcRenderer.invoke('getCuestionario').then(res => {
      this.cuest = res
    })
  }
}
</script>
