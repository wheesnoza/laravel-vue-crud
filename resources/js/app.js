new Vue({
  el: '#main',
  created: function () {
    this.getKeeps();
  },
  data: {
    keeps: []
  },
  methods: {
    getKeeps: function () {
      var urlKeeps = 'tasks';
      axios.get(urlKeeps).then(res => {
        this.keeps = res.data;
      });
    }
  }
});
