<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="style.css">
    @yield('css')
</head>

<body>
    <nav>
        <ul>
            <li>Home page</li>
            <li>User Page</li>
            <li>Contact</li>
        </ul>
    </nav>
    <aside>
        <p>Management</p>
        <a href="useradmin">User </a><br />
        <a href="catadmin">Category </a><br />
        <a href="locadmin">Location </a><br />
        <a href="eventadmin">Event </a><br />
        <a href="comadmin">Comment </a><br />
    </aside>
    <div class="content">
        @yield('content')
    </div>

    <footer>
        <p>My footer</p>
    </footer>

</body>

</html>
