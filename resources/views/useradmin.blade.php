@extends('mytemplate')

@section('title', 'User Admin Page')

@section('css')
    <link rel="stylesheet" href="styles.css">
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="title">
                    <h2>Users</h2>
                </div>

                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Statut</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (!empty($user))
                                @foreach ($user as $u)
                                    <tr scope="row">
                                        <td>
                                            {{ $u->id }}
                                        </td>
                                        <td>
                                            {{ $u->name }}
                                        </td>
                                        <td>
                                            {{ $u->email }}
                                        </td>
                                        <td>
                                            {{ $u->role }}
                                        </td>
                                        <td>
                                            <div class="d-flex" style="gap:8px;">
                                                <a href="useradminupdate/{{ $u->id }}">Update</a>
                                                <a href="useradmin/delete/{{ $u->id }}">Delete</a>
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
                    <h2>Create a new User</h2>
                </div>
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
                            <select class="form-control" name="role">
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
