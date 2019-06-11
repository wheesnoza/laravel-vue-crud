<div class="modal fade" id="create">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">新規タスク</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="keep">タイトル</label>
        <input type="text" name="keep" class="form-control" v-model="keep">
      <span v-for="error in errors" class="text-danger">@{{ error.keep }}</span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="完了" v-on:click.prevent="createKeep()">
      </div>
    </div>
  </div>
</div>
