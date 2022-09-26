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
                                <th scope="col">Start date</th>
                                <th scope="col">End date</th>
                                <th scope="col">Event start</th>
                                <th scope="col">Event end</th>
                                <th scope="col">Description</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Price</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>

                            @if (!empty($events))
                                @foreach ($events as $e)
                                    <tr scope="row">
                                        <td>
                                            {{ $e->id }}
                                        </td>
                                        <td>
                                            {{ $e->name }}
                                        </td>
                                        <td>
                                            {{ $e->start_date }}
                                        </td>
                                        <td>
                                            {{ $e->end_date }}
                                        </td>
                                        <td>
                                            {{ $e->description }}
                                        </td>
                                        <td>
                                            {{ $e->contact }}
                                        </td>
                                        <td>
                                            {{ $e->price }}
                                        </td>
                                        <td>
                                            {{ $e->categorie_name }}
                                        </td>
                                        <td>
                                            {{ $e->location_name }}
                                        </td>
                                        <td>
                                            {{ $e->user_name }}
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
                        <select class="form-control" name="categorie" id="">
                            @foreach ($categories as $c)
                                <option value="categorie_name">{{ $c->name }}</option>
                            @endforeach
                        </select>
                        <a href="catadmin">Create a new category</a>
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="location" id="">
                            @foreach ($locations as $l)
                                <option value="location_name">{{ $l->name }}</option>
                            @endforeach
                        </select>
                        <a href="locadmin">Create a new location</a>
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="user" id="">
                            @foreach ($users as $u)
                                <option value="user_name">{{ $u->name }}</option>
                            @endforeach
                        </select>

                    </div>
                    <input class="form-control" type="submit" name="submitBtn" value="Create" />
            </div>
            </form>
        </div>
    </div>
    </div>
@endsection
