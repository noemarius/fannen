@extends('mytemplate')

@section('title', 'Event admin Page')

@section('content')
    <div class="container" style="padding-top:100px;">
        <div class="row">
            <div class="col-md-6">
                <div>
                    <h2>Events</h2>
                </div>
                <div>
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>

                            @if (!empty($event))
                                @foreach ($event as $e)
                                    <tr scope="row">
                                        <td>
                                            {{ $e->id }}
                                        </td>
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
                                            <div class="d-flex" style="gap:8px;">
                                                <a href="eventadminupdate/{{ $e->id }}">Update</a>
                                                <a href="eventadmin/delete/{{ $e->id }}">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <h2>Create a new Event</h2>

                </div>
                <form method="post">
                    @csrf
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" name="name"
                            placeholder="Please enter the event name" />
                    </div>
                    <div class="form-group">
                        <label for="start_date">Start date</label>
                        <input class="form-control" type="date" name="start_date"
                            placeholder="Please enter the start date" />
                    </div>
                    <div class="form-group">
                        <label for="end_date">End date</label>
                        <input class="form-control" type="date" name="end_date"
                            placeholder="Please enter the end date" />
                    </div>
                    <div class="form-group">
                        <label for="event_start">Start time</label>
                        <input class="form-control" type="time" name="event_start"
                            placeholder="Please enter the start hour" />
                    </div>
                    <div class="form-group">
                        <label for="event_end">End time</label>
                        <input class="form-control" type="time" name="event_end"
                            placeholder="Please enter the end hour" />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" name="description" cols="30" rows="10"
                            placeholder="Please enter the event description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact</label>
                        <input class="form-control" type="text" name="contact"
                            placeholder="Please enter the contact event" />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input class="form-control" type="text" name="price"
                            placeholder="Please enter the event price" />
                    </div>
                    <div class="form-group">
                        <label for="categorie_id">Categorie ID</label>
                        <input class="form-control" type="text" name="categorie_id"
                            placeholder="Please enter the event categorie" />
                    </div>
                    <div class="form-group">
                        <label for="location_id">Location ID</label>
                        <input class="form-control" type="text" name="location_id"
                            placeholder="Please enter the event location" />
                    </div>
                    <div class="form-group">
                        <label for="user_id">User ID</label>
                        <input class="form-control" type="text" name="user_id"
                            placeholder="Please enter the event user" />
                    </div>
                    <input class="form-control" type="submit" name="submitBtn" value="Create" />
            </div>
            </form>
        </div>
    </div>
    </div>
@endsection
