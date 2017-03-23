new Vue({
  el: '#app',
  data: {
    title: 'Archicom',
    fruits: ['Jabłko', 'Banana', 'Kiwi'],
    name: 'Lama',
    surname: 'Media'
  },
  methods: {
    onClick () {
      console.log('clicked')
    }
  },
  computed: {
    fullname () {
      return this.name + ' ' + this.surname
    }
  }
})
