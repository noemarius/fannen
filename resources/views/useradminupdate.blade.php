@extends('mytemplate')

@section('title', 'User update Admin Page')

@section('content')
    <div class="container">
        <div class="createForm">
            <form method="post">
                @csrf
                {{-- {{ var_dump($user) }} --}}
                <input type="text" name="name" placeholder="Please enter the user name"
                    value="{{ $user->name }}" /><br />
                <input type="email" name="email" placeholder="Please enter the user email"
                    value="{{ $user->email }}" /><br />
                <input type="password" name="password" placeholder="Please enter the user password" /><br />
                <select name="role">
                    <option value="administrator">Administrator</option>
                    <option value="organizer">Organizer</option>
                    <option value="user">User</option>
                </select>
                <input class="form-control" type="submit" name="submitBtn" value="Update" />
            </form>
        </div>
    </div>


@endsection
