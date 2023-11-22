const app = Vue.createApp({
    data() {
        return {
            card: [],
            premium: true
        }
    },
    methods: {
        updateCard(id) {
            this.card.push(id)
        }
    }
  })
  