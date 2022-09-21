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
                    <input type="submit" name="submitBtn" value="Update" />

                </form>
            </div>
        </div>


    @endsection
