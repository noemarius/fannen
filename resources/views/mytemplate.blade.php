<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="reset.css">
    @yield('css')
</head>

<body>
    <div class="header">
        <h1>Admin Panel</h1>
        <div class="headerWrap">
            <a href="">
                <div class="button">
                    Login
                </div>
            </a>
            <a href="">
                <div class="button">
                    Logout
                </div>
            </a>
        </div>

    </div>

    <div class="mainContainer">
        <div class="catContainer">
            <a class="catLink" href="useradmin">Users </a>
            <a class="catLink" href="catadmin">Categories </a>
            <a class="catLink" href="locadmin">Locations </a>
            <a class="catLink" href="eventadmin">Events </a>
            <a class="catLink" href="comadmin">Comments </a>
        </div>

        {{-- MgmtContainer Done --}}

        @yield('content')

    </div>

</body>

</html>
