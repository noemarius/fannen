@extends('mytemplate')

@section('title', 'Administrator Cat Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
        <div class="container">
            <h2>category list</h2>

            <div class="categoryTable">

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Manage</th>
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
                                        <a href="catadmin/update/{{ $c->id }}">Update</a>
                                        <a href="catadmin/delete/{{ $c->id }}">Delete</a>
                                    </td>

                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>

            <div class="createForm">
                <form method="post">
                    @csrf
                    <input type="text" name="name" placeholder="Please enter the category name" /><br />
                    <input type="submit" name="submitBtn" value="Create" />

                </form>
            </div>
        </div>


    @endsection
