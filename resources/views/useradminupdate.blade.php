@extends('mytemplate')

@section('title', 'User update Admin Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
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
                <input type="submit" name="submitBtn" value="Update" />

            </form>
        </div>
    </div>


@endsection
