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
    },
    deleteKeeps: function (keep) {
      var url = 'tasks/' + keep.id;
      axios.delete(url).then(res => {
        this.getKeeps();
        toastr.success('削除しました！');
      });
    }
  }
});
