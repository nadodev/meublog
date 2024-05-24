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
                <a href="{{ route('blog.show', $post->slug) }}" class="posts__content border-t-[1px] border-zinc-200 border-solid">
                    <div class="posts__card">
                        <div class="flex items-center gap-2 mb-6">
                            <div class="rounded-full w-6 h-6 bg-zinc-400 overflow-hidden">
                                    <img src="{{ $gravatarUrl }}" alt="" class="w-6 h-6 object-cover">
                            </div>
                            <small class="block"> {{ $post->author }}</small>
                        </div>
                        <h2 class="text-3xl font-bold">{{ $post->title }}</h2>
                        <p>{{ strip_tags(Str::limit($post->description, 200)) }}</p>
                        <div
                            class="posts__footer flex justify-between items-start  mt-4 md:flex-row flex-col md:items-center">
                            <div class="flex gap-2">
                                <small class="block">{{ $post->created_at->diffForHumans() }}</small>
                                <small class="block text-sm">
                                    <i class="ri-chat-1-line"></i> {{ $post->comments()->count() }}
                            </small>
                            </div>
                        </div>
                    </div>
                </a>
            @endforeach
        </section>
        <section class="col-span-2 md:col-span-1 mt-8  p-4 h-full border-l border-solid border-zinc-200">
            <h3 class="text-2xl font-bold">Mais Populares</h3>
            @foreach ($postCount as $post)
                <a href="{{ route('blog.show', $post->slug) }}" class="posts__content border-b border-zinc-200 pb-2">
                    <div class="overflow-hidden">
                        <h3 class="text-sm font-semibold  ">{{ $post->title }}</h3>
                        <div class="posts__footer">
                            <small class="text-xs">{{ $post->created_at->diffForHumans() }}</small>
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
          <h3 class="text-2xl font-bold mt-4">Categorias</h3>
            @foreach ($categorias as $category)
                <a href="{{ route('blog.category.show', $category->slug) }}" class="posts__content border-b border-zinc-200 pb-2">
                    <div class="">
                        <h3 class="text-sm font-semibold">{{ $category->title }}</h3>
                    </div>
                </a>
            @endforeach
        </section>
    </div>
@endsection
