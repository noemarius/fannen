@extends('mytemplate')

@section('title', 'Cities Admin Page')

@section('content')
    <div class="container" style="padding-top:100px;">
        <div class="row">
            <div class="col-sm">
                <div class="title">
                    <h2>Cities</h2>
                </div>
                <div>
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Geolocation</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (!empty($cities))
                                @foreach ($cities as $c)
                                    <tr scope="row">
                                        <td>
                                            {{ $c->id }}
                                        </td>
                                        <td>
                                            {{ $c->name }}
                                        </td>
                                        <td>
                                            {{ $c->geo }}
                                        </td>
                                        <td>
                                            <div class="d-flex" style="gap:8px;">
                                                <a href="citiesadmin/update/{{ $c->id }}">Update</a>
                                                <a href="citiesadmin/delete/{{ $c->id }}">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm">
                <div class="title">
                    <h2>Add a new City</h2>
                </div>
                <form method="post">
                    @csrf
                    <div>
                        <div class="form-group">
                            <label for="name">City name</label>
                            <input class="form-control" type="text" name="name" placeholder="Category Name" />
                        </div>
                        <div class="form-group">
                            <label for="name">Geolocation</label>
                            <input class="form-control" type="text" name="geo" placeholder="Category Name" />
                        </div>
                        <input class="form-control" type="submit" name="submitBtn" value="Create" />
                    </div>
                </form>
            </div>
        </div>
    </div>


@endsection
