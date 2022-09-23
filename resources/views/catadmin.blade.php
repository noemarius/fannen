@extends('mytemplate')

@section('title', 'Administrator Cat Page')

@section('css')
    <link rel="stylesheet" href="styles.css">
@endsection

@section('content')
    <div class="userContainer">
        <div class="title">
            <h2>Categories</h2>
        </div>
        <div class="wrap">
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    @if (!empty($category))
                        @foreach ($category as $c)
                            <tr>
                                <td>
                                    {{ $c->name }}
                                </td>
                                <td>
                                    <a href="catadminupdate/{{ $c->id }}">Update</a>

                                </td>
                                <td>
                                    <a href="catadmin/delete/{{ $c->id }}">Delete</a>
                                </td>
                            </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>
        </div>

        <div class="title">
            <h1>Create a new Category</h1>
        </div>
        <form class="createForm" method="post">
            @csrf
            <div class="formContainer">
                <div class="formBreak">
                    <p class="formP">Category: </p>
                    <input class="form" type="text" name="name" placeholder="Category Name" />
                </div>
                <input type="submit" name="submitBtn" value="Create" />
            </div>
        </form>
    </div>

@endsection
