<form method="POST" v-on:submit.prevent="updateKeep(fillKeep.id, pagination.current_page)">
  <div class="modal fade" id="edit">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">タスク編集</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label for="keep">タイトル</label>
          <input type="text" name="keep" class="form-control" v-model="fillKeep.keep">
        </div>
        <div class="modal-footer">
          <input type="submit" class="btn btn-primary" value="完了">
        </div>
      </div>
    </div>
  </div>
</form>
