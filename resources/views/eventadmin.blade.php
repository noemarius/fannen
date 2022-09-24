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
                                        <a href="eventadminupdate/{{ $e->id }}">Update</a>
                                    </td>
                                    <td>
                                        <a href="eventadmin/delete/{{ $e->id }}">Delete</a>
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
                    @csrf
                    <input type="text" name="name" placeholder="Please enter the event name" /><br />
                    <input type="date" name="start_date" placeholder="Please enter the start date" /><br />
                    <input type="date" name="end_date" placeholder="Please enter the end date" /><br />
                    <input type="time" name="event_start" placeholder="Please enter the start hour" /><br />
                    <input type="time" name="event_end" placeholder="Please enter the end hour" /><br />
                    <textarea name="description" cols="30" rows="10" placeholder="Please enter the event description"></textarea><br />
                    <input type="text" name="contact" placeholder="Please enter the contact event" /><br />
                    <input type="text" name="price" placeholder="Please enter the event price" /><br />
                    <input type="text" name="categorie_id" placeholder="Please enter the event categorie" /><br />
                    <input type="text" name="location_id" placeholder="Please enter the event location" /><br />
                    <input type="text" name="user_id" placeholder="Please enter the event user" /><br />
                    <input type="submit" name="submitBtn" value="Create" />
                </div>
            </form>

        @endsection
