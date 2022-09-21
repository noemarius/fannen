@extends('mytemplate')

@section('title', 'Event admin Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
        <div class="container">
            <h2>Event list</h2>

            <div class="categoryTable">

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>description</th>
                            <th>Manage</th>
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
                                        <a href="comadmin/validate/{{$c->id}}">Validate</a>
                                        <a href="comadmin/delete/{{$c->id}}">Delete</a>
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
                    <input type="text" name="name" placeholder="Please enter the User name" /><br />
                    <input type="text" name="location" placeholder="Please enter the location name" /><br />
                    <textarea name="comment" cols="30" rows="10" placeholder="Please enter the comment"></textarea><br />
                    <input type="submit" name="submitBtn" value="Create" />

                </form>
            </div>
        </div>

    @endsection