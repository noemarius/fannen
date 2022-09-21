@extends('mytemplate')

@section('title', 'Administrator Loc Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
        <h2>Location list</h2>

        <div class="locationTable">

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>address</th>
                        <th>geo</th>
                        <th>link</th>
                        <th>contact</th>

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
                                    {{ $l->adress }}
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
                                    <a href="locadmin/update/{{$l->id}}">Update</a>
                                    <a href="locadmin/delete/{{$l->id}}">Delete</a>
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
                <input type="text" name="name" placeholder="Please enter the location name" /><br />
                <input type="text" name="address" placeholder="Please enter the location address" /><br />
                <input type="text" name="geo" placeholder="Please enter the location geo" /><br />
                <input type="text" name="link" placeholder="Please enter the location link" /><br />
                <input type="text" name="contact" placeholder="Please enter the location contact" /><br />
                <input type="submit" name="submitBtn" value="Create" />

            </form>
        </div>
    </div>


@endsection
