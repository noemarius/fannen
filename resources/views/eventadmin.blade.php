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
                                        <a href="catadmin/update/{{$e->id}}">Update</a>
                                        <a href="catadmin/delete/{{$e->id}}">Delete</a>
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
                    <input type="text" name="name" placeholder="Please enter the event name" /><br />
                    <input type="date" name="date" placeholder="Please enter the event date" /><br />
                    <textarea name="description" cols="30" rows="10" placeholder="Please enter the event description"></textarea><br />
                    <input type="submit" name="submitBtn" value="Create" />

                </form>
            </div>
        </div>

    @endsection