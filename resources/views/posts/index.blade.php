@extends('master.master')


@section('content')
<div class="teste">
    <h1 class="title">Posts do Blog</h1>
</div>
    <ul>
        @foreach ($posts as $post)
            <li>
                <h2>{{ $post->title }}</h2>
                <x-markdown  theme="github-dark" :options="['commonmark' => ['enable_strong' => false]]">
                    {!! $post->content !!}
                </x-markdown>
                <p><small>Publicado {{ $post->created_at->diffForHumans() }}</small></p>
            </li>
        @endforeach
    </ul>
@endsection
