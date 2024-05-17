@extends('master.master')


@section('content')
<div class="teste">
    <h1 class="title">Posts do Blog</h1>
</div>
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
