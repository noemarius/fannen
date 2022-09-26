@extends('mytemplate')

@section('title', 'Category Admin Update Cat Page')

@section('content')
    <div class="container" style="padding-top:100px;">
        <div class="createForm">
            <form method="post">
                @csrf
                <div class="form-group">
                    <label for="categoryName">City name</label>
                    <input type="text" name="name" class="form-control" placeholder="Please enter the category name"
                        value="{{ $cities->name }}" id="categoryName" /><br />
                </div>
                <div class="form-group">
                    <label for="geoloc">Geolocation</label>
                    <input type="text" name="geo" class="form-control" placeholder="Please enter the category name"
                        value="{{ $cities->geo }}" id="geoloc" /><br />
                </div>
                <button class="form-control" type="submit" name="submitBtn">Update</button>
            </form>
        </div>
    @endsection
