@extends('mytemplate')

@section('title', 'User Admin Page')

@section('css')
    <link rel="stylesheet" href="styles.css">
@endsection

@section('content')
    <div class="userContainer">
        <div class="title">
            <h2>Users</h2>
        </div>
        <table id="users">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Statut</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                @if (!empty($user))
                    @foreach ($user as $u)
                        <tr>
                            <td>
                                {{ $u->name }}
                            </td>
                            <td>
                                {{ $u->email }}
                            </td>
                            <td>
                                {{ $u->statut }}
                            </td>
                            <td>
                                <a href="useradmin/update/{{ $u->id }}">Update</a>
                            </td>
                            <td>
                                <a href="useradmin/delete/{{ $u->id }}">Delete</a>
                            </td>
                        </tr>
                    @endforeach
                @endif
            </tbody>
        </table>

        <div class="title">
            <h1>Create a new User</h1>
        </div>
        <form class="createForm" method="post">
            @csrf
            <div class="formBreak">
                <p class="formP">Username:</p>
                <p class="formP">Email:</p>
                <p class="formP">Password:</p>
                <p class="formP">Role:</p>
            </div>
            <div class="formBreak">
                <input class="form" type="text" name="name" placeholder="Username" />
                <input class="form" type="email" name="email" placeholder="Email" />
                <input class="form" type="password" name="password" placeholder="Password" />
                <select class="form" name="statut">
                    <option value="administrator">Administrator</option>
                    <option value="organizer">Organizer</option>
                    <option value="user">User</option>
                </select>
            </div>


            <input class="formButton" type="submit" name="submitBtn" value="Create" />
        </form>

    </div>


@endsection
