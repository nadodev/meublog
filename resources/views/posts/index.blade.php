@extends('master.master')

@section('twitter')
    <meta property="og:title" content="Pagina Inicial do Blog">
    <meta property="og:description" content="Pagina onde contem a lista de posts">
    <meta property="og:url" content="{{ url()->current() }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@leonardogeja">
    <meta name="twitter:title"content="Pagina Inicial do Blog">
    <meta name="twitter:description" content="Pagina onde contem a lista de posts">
@endsection

@section('content')
@php
    use Illuminate\Support\Str;
@endphp
<section class="posts">
    @foreach ($posts as $post)
        <a href="{{ route('blog.show', $post->slug) }}" class="posts__content">
          <div class="posts__card">
          <h2>{{$post->title}}</h2>
            <p>{{ strip_tags(Str::limit($post->description, 100)) }}</p>
            <div class="posts__footer">
                <small>Publicado {{ $post->created_at->diffForHumans() }}</small>
                <small>  {{ $post->author }}</small>
            </div>
          </div>
        </a>
    @endforeach
</section>
@endsection
