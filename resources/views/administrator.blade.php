@extends('mytemplate')

@section('title', 'Administrator Page')

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
                        <th>Password</th>

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
                                    {{ $u->password }}
                                </td>
                            </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>
        </div>
        <div class="sidenav">
            <aside>
                <a href="">User Managment</a><br />
                <a href="">Category Managment</a><br />
                <a href="">Location Managment</a><br />
            </aside>
        </div>
        
        <div class="createForm">
            <form method="post">
                @csrf
                <input type="text" name="name" placeholder="Please enter the user name" /><br />
                <input type="email" name="email" placeholder="Please enter the user email" /><br />
                <input type="password" name="password" placeholder="Please enter the user password" /><br />
                <input type="submit" name="submitBtn" value="Create" />

            </form>
        </div>
    </div>


@endsection
