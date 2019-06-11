@extends('app')

@section('content')
  
<div id="main" class="row">
  <div class="col-xl-12">
    <h1 class="">TASKs</h1>
    <hr>
  </div>
  <div class="col-sm-7">
    <a href="#" class="btn btn-primary float-right mb-3" data-toggle="modal" data-target="#create">追加</a>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th colspan="2">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="keep in keeps">
        <td width="10px">@{{ keep.id }}</td>
        <td>@{{ keep.keep }}</td>
          <td width="10px">
            <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(keep)" data-toggle="modal" data-target="#edit">Edit</a>
          </td>
          <td width="10px">
            <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(keep)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
    @include('create')
    @include('edit')
  </div>
  <div class="col-sm-5">
    <pre>
      @{{ $data }}
    </pre>
  </div>
</div>

@endsection
