@extends('mytemplate')

@section('title', 'Comment admin Page')

@section('css')
    <link rel="stylesheet" href="styles.css">
@endsection

@section('content')

    <div class="userContainer">
        <div class="title">
            <h2>Comments</h2>
        </div>
        <div class="wrap">
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    @if (!empty($comment))
                        @foreach ($comment as $c)
                            <tr>
                                <td>
                                    {{ $c->user_id }}
                                </td>
                                <td>
                                    {{ $c->location_id }}
                                </td>
                                <td>
                                    {{ $c->comment }}
                                </td>
                                <td>
                                    <a href="comadminvalidate/{{ $c->id }}">Validate</a>
                                </td>
                                <td>
                                    <a href="comadmin/delete/{{ $c->id }}">Delete</a>
                                </td>
                            </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>
        </div>

        <div class="title">
            <h1>Create a new Comment</h1>
        </div>
        <div class="createForm">
            <form class="createForm" method="post">
                @csrf
                <div class="formContainer">
                    <div class="formBreak">
                        <p class="formP">Username: </p>
                        <input class="form" type="text" name="name" placeholder="Username" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Email:</p>
                        <input class="form" type="email" name="email" placeholder="Email" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Password:</p>
                        <input class="form" type="password" name="password" placeholder="Password" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Role:</p>
                        <select class="form" name="statut">
                            <option value="administrator">Administrator</option>
                            <option value="organizer">Organizer</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    <input class="formButton" type="submit" name="submitBtn" value="Create User" />
                </div>
            </form>
            {{-- What to do here --}}
        </div>

    @endsection
