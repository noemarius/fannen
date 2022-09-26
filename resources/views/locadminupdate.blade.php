@extends('mytemplate')

@section('title', 'Update Loc admin Page')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form method="post">
                    @csrf
                    <div class="form-group"><label for="name">Location name</label>
                        <input class="form-control" type="text" name="name" placeholder="Please enter the location name"
                            value="{{ $location->name }}" />
                    </div>

                    <div class="form-group"><label for="city">City</label>
                        <input class="form-control" type="text" name="city"
                            placeholder="Please enter the location city" value="{{ $location->city_name }}" />
                    </div>
                   
                    <div class="form-group"><label for="address">address</label>
                        <input class="form-control" type="text" name="address"
                            placeholder="Please enter the location address" value="{{ $location->address }}" />
                    </div>
                    <div class="form-group"><label for="geo">Geolocation</label>
                        <input class="form-control" type="text" name="geo"
                            placeholder="Please enter the location geo" value="{{ $location->geo }}" />
                    </div>
                    <div class="form-group"><label for="link">link</label>
                        <input class="form-control" type="text" name="link"
                            placeholder="Please enter the location link" value="{{ $location->link }}" />
                    </div>
                    <div class="form-group"><label for="contact">contact</label>
                        <input class="form-control" type="text" name="contact"
                            placeholder="Please enter the location contact" value="{{ $location->contact }}" />
                    </div>
                    <button class="form-control" type="submit" name="submitBtn">Update</button>
                </form>
            </div>
        </div>
    </div>


@endsection
