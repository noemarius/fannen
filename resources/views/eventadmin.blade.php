@extends('mytemplate')

@section('title', 'Event admin Page')

@section('css')
    <link rel="stylesheet" href="styles.css">
@endsection

@section('content')
    <div class="userContainer">

        <div class="title">
            <h2>Events</h2>
        </div>
        <div>
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

                        @if (!empty($event))
                            @foreach ($event as $e)
                                <tr>
                                    <td>
                                        {{ $e->name }}
                                    </td>
                                    <td>
                                        {{ $e->date }}
                                    </td>
                                    <td>
                                        {{ $e->description }}
                                    </td>
                                    <td>
                                        <a href="catadmin/update/{{ $e->id }}">Update</a>
                                    </td>
                                    <td>
                                        <a href="catadmin/delete/{{ $e->id }}">Delete</a>
                                    </td>
                                </tr>
                            @endforeach
                        @endif

                    </tbody>
                </table>
            </div>
            <div class="title">
                <h1>Create a new Event</h1>

            </div>
            <form class="createForm" method="post">
                @csrf
                <div class="formContainer">
                    <input type="text" name="name" placeholder="Event Name" />
                    <input type="date" name="date" placeholder="Please enter the event date" />
                    <textarea name="description" cols="30" rows="5" placeholder="Please enter the event description"></textarea>
                    <input type="submit" name="submitBtn" value="Create Event" />
                </div>
            </form>

        @endsection
