new Vue({
  el: '#main',
  created: function () {
    this.getKeeps();
  },
  data: {
    keeps: [],
    newKeep: '',
    fillKeep: { 'id': '', 'keep': '' },
    errors: [],
  },
  methods: {
    getKeeps: function () {
      var urlKeeps = 'tasks';
      axios.get(urlKeeps).then(res => {
        this.keeps = res.data;
      });
    },
    createKeep: function () {
      var url = 'tasks';
      axios.post(url, {
        keep: this.newKeep,
      }).then(res => {
        this.getKeeps();
        this.newKeep = '';
        this.errors = [];
        $('#create').modal('hide');
        toastr.success('作成しました！');
      }).catch(err => {
        this.errors = err.response.data;
      });
    },
    editKeep: function (keep) {
      this.fillKeep.id = keep.id;
      this.fillKeep.keep = keep.keep;
      $('#edit').modal('show');
    },
    updateKeep: function (id) {
      var url = 'tasks/' + id;
      axios.put(url, this.fillKeep)
        .then(res => {
          this.getKeeps();
          this.fillKeep = { 'id': '', 'keep': '' };
          this.errors = [];
          $('#edit').modal('hide');
          toastr.success('編集しました！');
        }).catch(err => {
          this.errors = err.response.data;
        });
    },
    deleteKeep: function (keep) {
      var url = 'tasks/' + keep.id;
      axios.delete(url).then(res => {
        this.getKeeps();
        toastr.success('削除しました！');
      });
    }
  }
});
