<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta description="Leonardo Geja, Front-end Developer, UI/UX Designer">
    <meta name="keywords" content="Leonardo Geja, Front-end Developer, UI/UX Designer,front end developer">
    <meta name="description" property="og:description" content="Website portfolio pessoal, author: Leonardo Geja">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Leonardo Geja">
  
    <meta name="twitter:card" content="player">
    <meta name="twitter:title" content="Meu Site Pessoal">
    <meta name="twitter:site" content="@www.leonardogeja.com.br">
    <meta name="twitter:description" content="Um website, para expor meus trabalhos como desenvolvedor front end">
    <meta name="twitter:player" content="www.leonardogeja.com.br">
    <meta name="twitter:player:height" content="300">
    <meta name="twitter:player:width" content="500">
    <meta name="twitter:image" content="https://leonardogeja.com.br/assets/img/undraw_dev_productivity_re_fylf.svg">
    <meta name="twitter:image:alt" content="imagem de um programador">
    <meta name="title" property="og:title" content="Portfolio Pessoal, Leonardo Geja - Desenvolvedor Frontend">
    <meta property="og:type" content="Website">
    <meta name="google-site-verification" content="8-8ctPYB4M0Zp3zeaLIvAMwnlRqliSb3GpnVSvwMmc0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">

    <link rel="canonical" href="https://www.leonardogeja.com.br" />
    <link rel="stylesheet" href="{{ asset('dist/style.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.12/dist/default.min.css" />

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('site/assets/img/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('site/assets/img/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('site/assets/img/favicon-16x16.png') }}">
    <title>My showcase - Initial Page</title>
    <script type="application/ld+json">
    {
        "@context": "http://schema.org/",
        "@type": "Person",
        "name": "Leonardo Geja",
        "url": "https://www.leonardogeja.com.br",
        "jobTitle": "Desenvolvedor Front End",
        "sameAs": ["https://www.instagram.com/leonardo_geja", "https://www.linkedin.com/in/leonardogeja/"]
    }
  </script>
</head>

<body>
    @yield('content')
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit-icons.min.js"></script>
</body>

</html>
