@extends('app')

@section('content')

<div id="main" class="row mt-5">
  <div class="col-sm-7">
    <nav>
      <ul class="pagination">
        <li class="page-item" v-if="pagination.current_page > 1">
          <a href="#" class="page-link" @click.prevent="changePage(pagination.current_page - 1)">
            <span>前へ</span>
          </a>
        </li>

        <li class="page-item" v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'active' : '' ]" aria-current="page">
          <a href="#" class="page-link" @click.prevent="changePage(page)">
            <span>@{{ page }}</span>
          </a>
        </li>

        <li class="page-item" v-if="pagination.current_page < pagination.last_page">
          <a href="#" class="page-link" @click.prevent="changePage(pagination.current_page + 1)">
            <span>次へ</span>
          </a>
        </li>
      </ul>
    </nav>

    <transition-group class="list-group mb-3" name="slide-fade" tag="ul">
      <li class="list-group-item" v-for="keep in keeps" v-bind:key="keep.id">
        <input type="checkbox" v-model="keep.done" @change="changeDone(keep, pagination.current_page)">
        <span>@{{ keep.keep }}</span>
        <span class="badge badge-success" v-if="keep.done">完了</span>
        <span class="badge badge-secondary" v-else>未完了</span>
        <div class="float-right" role="group">
          <button type="button" class="btn btn-info" v-on:click.prevent="editKeep(keep)" data-toggle="modal" data-target="#edit"><i class="far fa-edit"></i></button>
          <button type="button" class="btn btn-danger" v-on:click.prevent="deleteKeep(keep, pagination.current_page)"><i class="far fa-trash-alt"></i></button>
        </div>
      </li>
    </transition-group>
    @include('edit')
  </div>
  <div class="col-sm-5">
    <form method="POST" v-on:submit.prevent="createKeep">
      <input type="text" name="keep" class="form-control" v-model="newKeep" placeholder="タスク名">
      <input type="submit" class="btn btn-primary btn-block mt-5" value="追加">
    </form>
  </div>
</div>

@endsection
