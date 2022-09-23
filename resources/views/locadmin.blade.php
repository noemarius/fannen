@extends('mytemplate')

@section('title', 'Administrator Loc Page')

@section('css')
    <link rel="stylesheet" href="styles.css">
@endsection

@section('content')
    <div class="userContainer">
        <div class="title">
            <h2>Locations</h2>
        </div>
        <div class="wrap">
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Coordinates</th>
                        <th>Link</th>
                        <th>Contact</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    @if (!empty($location))
                        @foreach ($location as $l)
                            <tr>
                                <td>
                                    {{ $l->name }}
                                </td>
                                <td>
                                    {{ $l->address }}
                                </td>
                                <td>
                                    {{ $l->geo }}
                                </td>
                                <td>
                                    {{ $l->link }}
                                </td>
                                <td>
                                    {{ $l->contact }}
                                </td>
                                <td>

                                    <a href="locadmin/update/{{ $l->id }}">Update</a>
                                </td>
                                <td>
                                    <a href="locadmin/delete/{{ $l->id }}">Delete</a>
                                </td>

                            </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>
        </div>

        <div class="title">
            <h1>Create a new Location</h1>
        </div>
        <div class="createForm">
            <form class="createForm" method="post">
                @csrf
                <div class="formContainer">
                    <div class="formBreak">
                        <p class="formP">Name: </p>
                        <input class="form" type="text" name="name" placeholder="Name" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Address:</p>
                        <input class="form" type="text" name="address" placeholder="Address" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Cooridnates:</p>
                        <input class="form" type="text" name="geo" placeholder="Coordinates" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Link:</p>
                        <input class="form" type="text" name="geo" placeholder="Link" />
                    </div>
                    <div class="formBreak">
                        <p class="formP">Contact:</p>
                        <input class="form" type="text" name="geo" placeholder="Contact" />
                    </div>

                    <input class="formButton" type="submit" name="submitBtn" value="Create Location"></input>
                </div>
            </form>
        </div>
    </div>



@endsection
