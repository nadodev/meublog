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
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <section class="posts col-span-3">
            @foreach ($posts as $post)
                <a href="{{ route('blog.show', $post->slug) }}" class="posts__content">
                    <div class="posts__card">
                        <h2>{{ $post->title }}</h2>
                        <p>{{ strip_tags(Str::limit($post->description, 100)) }}</p>
                        <div class="posts__footer flex justify-between items-center">
                            <div>
                                <small>Publicado {{ $post->created_at->diffForHumans() }}</small> -
                                <small> {{ $post->author }}</small>
                            </div>
                            @if (isset($post->category->title))
                                <small class=""> Categoria: {{ $post->category->title }}</small>
                            @endif
                        </div>
                    </div>
                </a>
            @endforeach
        </section>
        <section class="col-span-2 md:col-span-1 mt-8 bg-zinc-900 p-4 rounded-md h-max	">
            <h3 class="text-2xl font-bold">Mais Populares</h3>
            @foreach ($postCount as $post)
                <a href="{{ route('blog.show', $post->slug) }}" class="posts__content border-b border-zinc-800 pb-2">
                    <div class="bg-zinc-900 overflow-hidden">

                        <h3 class="text-sm font-semibold text-white ">{{ $post->title }}</h3>
                        <div class="posts__footer">
                            <small class="text-xs">Post {{ $post->created_at->diffForHumans() }}</small>
                            @if ($post->likes()->where('user_id', Auth::id())->exists())
                                <i class="ri-heart-fill text-red-400"></i> {{ $post->likes()->count() }}
                                {{ $post->likes()->count() > 1 ? 'Likes' : 'Like' }}
                            @else
                                <i class="ri-heart-line text-red-400"></i> {{ $post->likes()->count() }}
                                {{ $post->likes()->count() > 1 ? 'Likes' : 'Like' }}
                            @endif
                        </div>
                    </div>
                </a>
            @endforeach
            {{-- <h3 class="text-2xl font-bold mt-4">Categorias</h3>
            @foreach ($categorias as $category)
                <a href="{{ route('blog.show', $category->id) }}" class="posts__content border-b border-zinc-800 pb-2">
                    <div class="bg-zinc-900">
                        <h3 class="text-sm font-semibold text-white ">{{ $category->title }}</h3>
                    </div>
                </a>
            @endforeach --}}
        </section>
    </div>
@endsection
