@extends('mytemplate')

@section('title', 'Update Loc admin Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
        <div class="createForm">
            <form method="post">
                @csrf
                <input type="text" name="name" placeholder="Please enter the location name" /><br />
                <input type="text" name="address" placeholder="Please enter the location address" /><br />
                <input type="text" name="geo" placeholder="Please enter the location geo" /><br />
                <input type="text" name="link" placeholder="Please enter the location link" /><br />
                <input type="text" name="contact" placeholder="Please enter the location contact" /><br />
                <button type="submit" name="submitBtn">Update</button>

            </form>
        </div>
    </div>


@endsection
