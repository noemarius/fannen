@extends('mytemplate')

@section('title', 'Category Admin Update Cat Page')

@section('css')
    <link rel="stylesheet" href="style.css">
@endsection

@section('content')
    <div class="container">
      
            <div class="createForm">
                <form method="post">
                    @csrf
                    <input type="text" name="name" placeholder="Please enter the category name" /><br />
                    <button type="submit" name="submitBtn">Update</button>

                </form>
            </div>
        </div>


    @endsection
