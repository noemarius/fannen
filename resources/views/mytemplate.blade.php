<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="reset.css">
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet" />
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="{{ asset('style.css') }}">
    <title>@yield('title')</title>
</head>

<body class="w-100 h-100">
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="justify-content:space-between;">
            <a class="navbar-brand" href="#" style="font-size:32px;padding-left:12px;"><img
                    src="{{ asset('fannen.png') }}" style="width:70px;" /> Admin Panel</a>
            <ul class="navbar-nav" style="font-size:24px;">
                <li class="nav-item">
                    {{-- <a class="nav-link" href="#">
                        Login
                    </a> --}}
                <li class="nav-item">
                    <a class="nav-link" href="/">
                        Logout
                    </a>
                </li>
                </li>
            </ul>
        </nav>
    </div>


    <div class="container-fluid w-100 h-100">
        <div class="row w-100 h-100">
            <div class="col-1 w-10 nmaPaddingRight">
                <nav class="nav flex-column" style="font-size:26px;">
                    <a class="nav-link" href="/useradmin">Users </a>
                    <a class="nav-link" href="/catadmin">Categories </a>
                    <a class="nav-link" href="/citiesadmin">Cities </a>
                    <a class="nav-link" href="/locadmin">Locations </a>
                    <a class="nav-link" href="/eventadmin">Events </a>
                    <a class="nav-link" href="/comadmin">Comments </a>
                </nav>
            </div>
            <div class="col-11 h-100 nmaPaddingTop">
                @yield('content')
            </div>
        </div>
    </div>
</body>

</html>
