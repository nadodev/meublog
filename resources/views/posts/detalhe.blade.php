@extends('master.master')


@section('content')
<section class="posts">
    <div class="posts__card">
       <a href="{{ route('blog.curtir', $post->slug) }}">
            <div class="posts__like">
                @if($post->like > 0)
                <i class="ri-heart-fill"></i> {{ $post->like }}
                @else

                <i class="ri-heart-line"></i>
                @endif
            </div>
       </a>
        <h2>{{$post->title}}</h2>
            <div class="posts__footer">
                <small>Publicado em: {{ $post->created_at }}</small>
                <small> Autor: {{ $post->author }}</small>
            </div>
            <p>{!! $post->description !!}</p>
          @if($post->image)
          <div class="posts__imagem">
                <img src="{{ asset('storage/'. $post->image)}}" />
            </div>
          @endif

            <x-markdown>
            {!! $post->content!!}
            </x-markdown>
    </div>
</section>
@endsection
