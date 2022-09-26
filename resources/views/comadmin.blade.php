@extends('mytemplate')

@section('title', 'Comment admin Page')

@section('content')
    <div class="container" style="padding-top:100px;">
        <div class="row">
            <div class="col-sm-6">
                <div class="title">
                    <h2>Comments</h2>
                </div>
                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User ID</th>
                                <th scope="col">User name</th>
                                <th scope="col">Location ID</th>
                                <th scope="col">Location name</th>
                                <th scope="col">Comment</th>
                                <th scope="col">Valitated</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (!empty($comments))
                                @foreach ($comments as $c)
                                    <tr scope="row">
                                        <td>
                                            {{ $c->id }}
                                        </td>
                                        <td>
                                            {{ $c->user_id }}
                                        </td>
                                        <td>
                                            {{ $c->user_name }}
                                        </td>
                                        <td>
                                            {{ $c->location_id }}
                                        </td>
                                        <td>
                                            {{ $c->location_name }}
                                        </td>
                                        <td>
                                            {{ $c->comment }}
                                        </td>
                                        <td>
                                            {{ $c->validation == true ? '✅' : '❌' }}
                                        </td>
                                        <td>
                                            <div class="d-flex" style="gap:8px;">
                                                <a href="comadminvalidate/{{ $c->id }}">Validate</a>
                                                <a href="comadmin/delete/{{ $c->id }}">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-6">
                <div>
                    <h1>Create a new Comment</h1>
                </div>
                <div>
                    <form method="post">
                        @csrf
                        <div>
                            <div class="form-group">
                                <label for="">Username: </label>
                                <input class="form-control" type="text" name="name" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <label for="">Email:</label>
                                <input class="form-control" type="email" name="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label for="">Password:</label>
                                <input class="form-control" type="password" name="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="">Role:</label>
                                <select class="form-control" name="statut">
                                    <option value="administrator">Administrator</option>
                                    <option value="organizer">Organizer</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <input class="form-control" type="submit" name="submitBtn" value="Create User" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endsection
