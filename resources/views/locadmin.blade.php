@extends('mytemplate')

@section('title', 'Administrator Loc Page')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="title">
                    <h2>Locations</h2>
                </div>
                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Address</th>
                                <th scope="col">Coordinates</th>
                                <th scope="col">Link</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (!empty($location))
                                @foreach ($location as $l)
                                    <tr scope="row">
                                        <td>
                                            {{ $l->id }}
                                        </td>
                                        <td>
                                            {{ $l->name }}
                                        </td>
                                        <td>
                                            {{ $l->city_name }}
                                        </td>
                                        <td>
                                            {{ $l->address }}
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
                                            <div class="d-flex" style="gap:8px;">
                                                <a href="locadminupdate/{{ $l->id }}">Update</a>
                                                <a href="locadmin/delete/{{ $l->id }}">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="title">
                    <h2>Create a new Location</h2>
                </div>
                <div>
                    <form method="post">
                        @csrf
                        <div class="form-group">
                            <div class="formBreak">
                                <label for="">Name: </label>
                                <input class="form-control" type="text" name="name" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <select class="form-control" name="citie" id="">
                                    @foreach ($cities as $c)
                                        <option value="location_name">{{ $c->name }}</option>
                                    @endforeach
                                </select>
                                <a href="citiesadmin">Create a new City</a>
                            </div>
                            <div class="form-group">
                                <label for="">Address:</label>
                                <input class="form-control" type="text" name="address" placeholder="Address" />
                            </div>
                            <div class="form-group">
                                <label for="">Coordinates:</label>
                                <input class="form-control" type="text" name="geo" placeholder="Coordinates" />
                            </div>
                            <div class="form-group">
                                <label for="">Link:</label>
                                <input class="form-control" type="text" name="link" placeholder="Link" />
                            </div>
                            <div class="form-group">
                                <label for="">Contact:</label>
                                <input class="form-control" type="text" name="contact" placeholder="Contact" />
                            </div>

                            <input class="form-control" type="submit" name="submitBtn" value="Create Location" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>



@endsection
