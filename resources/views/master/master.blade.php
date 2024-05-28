<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pagina destinada para publicações sobre técnologia">
    <meta name="keywords" content="blog, tecnologia, php, portfolio, programacao">
    <meta name="robots" content="index, follow">
    <title>Leonardo Geja - Blog</title>
    <link rel="canonical" href="{{ url()->current() }}">
    <!-- Open Graph Tags -->

    <!-- Twitter Cards -->
    @yield('twitter')
    <!-- Favicon -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="{{ asset('dist/style.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
        integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container-2xl">
        <header class="w-full border-b border-solid border-zinc-200 flex justify-between items-center">
            <a href="{{ route('blog.index') }}">
                <h3 class="pt-4 pb-2">
                    Blog.
                </h3>
            </a>
            <nav>
                <ul class="flex gap-2 items-center">
                    <li>
                        <a href="https://leonardogeja.com.br/" class="flex items-center gap-2">
                            <i class="ri-global-fill"></i>
                            <span class="text-1xl">Meu site</span>
                        </a>
                    </li>
                    <li class="text-2xl">
                        <a href="https://www.linkedin.com/in/leonardogeja/" target="_blank" no-referrer>
                            <i class="ri-linkedin-box-fill"></i>
                        </a>
                    </li>
                    <li class="text-2xl">
                        <a href="https://github.com/nadodev" target="_blank" no-referrer>
                            <i class="ri-github-fill"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        @yield('content')
    </div>
</body>

</html>
