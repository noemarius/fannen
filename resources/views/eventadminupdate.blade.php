@extends('mytemplate')

@section('title', 'Event update admin Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
            <div class="createForm">
                <form method="post">
                    @csrf
                    <input type="text" name="name" placeholder="Please enter the event name" /><br />
                    <input type="date" name="start_date" placeholder="Please enter the start date" /><br />
                    <input type="date" name="end_date" placeholder="Please enter the end date" /><br />
                    <input type="datetime" name="event_start" placeholder="Please enter the start hour" /><br />
                    <input type="datetime" name="event_end" placeholder="Please enter the end hour" /><br />
                    <textarea name="description" cols="30" rows="10" placeholder="Please enter the event description"></textarea><br />
                    <input type="text" name="contact" placeholder="Please enter the contact event" /><br />
                    <input type="text" name="price" placeholder="Please enter the event price" /><br />
                    <input type="submit" name="submitBtn" value="Update" />

                </form>
            </div>
        </div>

    @endsection