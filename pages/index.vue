<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" style="float:left; margin: 10px">
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'This is a homepage !',
        hid: 'desctiption'
      }]
    }
  },
  async asyncData({$dataApi}) {
    const homes = (await $dataApi.getHomes()).json.hits
    console.log('homes index', homes);
    return {
      homes: homes
    }
  }
}
</script>