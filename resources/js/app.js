new Vue({
  el: '#main',
  created: function () {
    this.getKeeps();
  },
  data: {
    show: true,
    keeps: [],
    pagination: {
      'total': 0,
      'current': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0,
    },
    newKeep: '',
    fillKeep: { 'id': '', 'keep': '' },
    error: '',
    offset: 3,
  },
  computed: {
    isActived: function () {
      return this.pagination.current_page;
    },
    pagesNumber: function () {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }

      var to = from + (this.offset * 2);
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    }
  },
  methods: {
    getKeeps: function (page) {
      var urlKeeps = 'tasks?page=' + page;
      axios.get(urlKeeps).then(res => {
        this.keeps = res.data.tasks.data;
        this.pagination = res.data.pagination;
      });
    },
    createKeep: function () {
      var url = 'tasks';
      axios.post(url, {
        keep: this.newKeep,
      }).then(res => {
        this.getKeeps();
        this.newKeep = '';
        this.error = '';
        $('#create').modal('hide');
        toastr.success('作成しました！');
      }).catch(err => {
        this.error = err.response.data.errors.keep;
        toastr.error(this.error);
      });
    },
    editKeep: function (keep) {
      this.fillKeep.id = keep.id;
      this.fillKeep.keep = keep.keep;
      $('#edit').modal('show');
    },
    updateKeep: function (id, page) {
      var url = 'tasks/' + id;
      axios.put(url, this.fillKeep)
        .then(res => {
          this.getKeeps(page);
          this.fillKeep = { 'id': '', 'keep': '' };
          this.error = '';
          $('#edit').modal('hide');
          toastr.success('編集しました！');
        }).catch(err => {
          this.error = err.response.data.errors.keep;
          toastr.error(this.error)
        });
    },
    changeDone: function (keep, page) {
      var url = 'tasks/' + keep.id;
      axios.put(url, keep)
        .then(res => {
          this.getKeeps(page);
        });
    },
    deleteKeep: function (keep, page) {
      var url = 'tasks/' + keep.id;
      axios.delete(url).then(res => {
        this.getKeeps(page);
        toastr.success('削除しました！');
      });
    },
    changePage: function (page) {
      this.pagination.current_page = page;
      this.getKeeps(page);
    }
  }
});
