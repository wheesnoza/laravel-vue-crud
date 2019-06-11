new Vue({
  el: '#main',
  created: function () {
    this.getKeeps();
  },
  data: {
    keeps: [],
    keep: '',
    errors: [],
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
    },
    createKeep: function () {
      var url = 'tasks';
      axios.post(url, {
        keep: this.keep,
      }).then(res => {
        this.getKeeps();
        this.keep = '';
        this.errors = [];
        $('#create').modal('hide');
        toastr.success('作成しました！');
      }).catch(err => {
        this.errors = err.response.data;
      });
    }
  }
});
