@extends('mytemplate')

@section('title', 'Event update admin Page')

@section('content')
    <div class="container">
        <div>
            <form method="post">
                @csrf
                <div class="form-group">
                    <label for="name">Name</label>
                    <input class="form-control" type="text" name="name" placeholder="Please enter the event name"
                        value={{ $event->name }} /><br />
                </div>
                <div class="form-group">
                    <label for="start_date">Start date</label>
                    <input class="form-control" type="date" name="start_date" placeholder="Please enter the start date"
                        value={{ $event->start_date }} /><br />
                </div>
                <div class="form-group">
                    <label for="end_date">End date</label>
                    <input class="form-control" type="date" name="end_date" placeholder="Please enter the end date"
                        value={{ $event->end_date }} /><br />
                </div>
                <div class="form-group">
                    <label for="event_start">Start time</label>
                    <input class="form-control" type="datetime" name="event_start" placeholder="Please enter the start hour"
                        value={{ $event->event_start }} /><br />
                </div>
                <div class="form-group">
                    <label for="event_end">End time</label>
                    <input class="form-control" type="datetime" name="event_end" placeholder="Please enter the end hour"
                        value={{ $event->event_end }} /><br />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea name="description" cols="30" rows="10" placeholder="Please enter the event description">{{ $event->description }}</textarea><br />
                </div>
                <div class="form-group">
                    <label for="contact">Contact</label>
                    <input class="form-control" type="text" name="contact" placeholder="Please enter the contact event"
                        value={{ $event->contact }} /><br />
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input class="form-control" type="text" name="price" placeholder="Please enter the event price"
                        value={{ $event->price }} /><br />
                </div>
                <div class="form-group">
                    <label for="categorie_id">Category ID</label>
                    <input class="form-control" type="text" name="categorie_id"
                        placeholder="Please enter the event categorie" value={{ $categorie->name }} /><br />
                </div>
                <div class="form-group">
                    <label for="location_id">Location ID</label>
                    <input class="form-control" type="text" name="location_id"
                        placeholder="Please enter the event location" value={{ $event->location_id }} /><br />
                </div>
                <div class="form-group">
                    <label for="user_id">User ID</label>
                    <input class="form-control" type="text" name="user_id" placeholder="Please enter the event user"
                        value={{ $event->user_id }} /><br />
                </div>
                <input class="form-control" type="submit" name="submitBtn" value="Update" />

            </form>

        </div>
    </div>

@endsection
