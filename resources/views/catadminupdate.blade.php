@extends('mytemplate')

@section('title', 'Category Admin Update Cat Page')

@section('content')
    <div class="container">
        <div class="createForm">
            <form method="post">
                @csrf
                <div class="form-group">
                    <label for="categoryName">Category name</label>
                    <input type="text" name="name" class="form-control" placeholder="Please enter the category name"
                        value="{{ $category->name }}" id="categoryName" />
                    <button class="form-control" type="submit" name="submitBtn">Update</button>
                </div>
            </form>
        </div>
    </div>
@endsection
