@extends('mytemplate')

@section('title', 'Administrator Cat Page')

@section('content')
    <div class="container w-100 h-100">
        <div class="row w-100 h-100">
            <div class="col-8">
                <div class="title">
                    <h2>Categories</h2>
                </div>
                <div>
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (!empty($category))
                                @foreach ($category as $c)
                                    <tr scope="row">
                                        <td>
                                            {{ $c->id }}
                                        </td>
                                        <td>
                                            {{ $c->name }}
                                        </td>
                                        <td>
                                            <div class="d-flex" style="gap:8px;">
                                                <a href="catadminupdate/{{ $c->id }}">Update</a>
                                                <a href="catadmin/delete/{{ $c->id }}">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="title">
                    <h2>Create a new Category</h2>
                </div>
                <form method="post">
                    @csrf
                    <div class="form-group">
                        <div class="formBreak">
                            <label for="name">Category name</label>
                            <input class="form-control" type="text" name="name" placeholder="Category Name" />
                        </div>
                        <input class="form-control" type="submit" name="submitBtn" value="Create" />
                    </div>
                </form>
            </div>
        </div>
    </div>


@endsection
