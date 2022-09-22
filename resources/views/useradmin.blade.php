@extends('mytemplate')

@section('title', 'User Admin Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
        <h2>User list</h2>

        <div class="userTable">

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Statut</th>

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
                                    <a href="useradminupdate/{{$u->id}}">Update</a>
                                    <a href="useradmin/delete/{{$u->id}}">Delete</a>
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
                <input type="text" name="name" placeholder="Please enter the user name" /><br />
                <input type="email" name="email" placeholder="Please enter the user email" /><br />
                <input type="password" name="password" placeholder="Please enter the user password" /><br />
                <select name="statut">
                    <option value="administrator">Administrator</option>
                    <option value="organizer">Organizer</option>
                    <option value="user">User</option>
                </select>
                <input type="submit" name="submitBtn" value="Create" />

            </form>
        </div>
    </div>


@endsection
