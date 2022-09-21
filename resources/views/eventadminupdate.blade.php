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
                    <input type="date" name="date" placeholder="Please enter the event date" /><br />
                    <textarea name="description" cols="30" rows="10" placeholder="Please enter the event description"></textarea><br />
                    <input type="submit" name="submitBtn" value="Update" />

                </form>
            </div>
        </div>

    @endsection