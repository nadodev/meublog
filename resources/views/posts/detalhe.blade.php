@extends('master.master')

@section('twitter')
<meta property="og:title" content="{{ $post->title }}">
<meta property="og:description" content="{{ $post->description }}">
<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:image" content="{{ asset('storage/' . $post->image) }}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@leonardogeja">
<meta name="twitter:title" content="{{ $post->title }}">
<meta name="twitter:description" content="{{ $post->description }}">
<meta name="twitter:image" content="{{ asset('storage/' . $post->image) }}">
@endsection
@section('content')
<section class="posts">
    <div class="posts__card">
        <div class="px-4 py-2 mt-4 mb-4 bg-zinc-600 text-white rounded-md block w-fit h-fit">
            <a href="{{ route('blog.index') }}" title="voltar">Voltar</a>
        </div>
        @php
        use Carbon\Carbon;
        $date = Carbon::parse($post->created_at); // Garantindo que $date é um objeto Carbon
        @endphp

        <h1 class="mb-6 font-bold">{{ $post->title }}</h1>
        <div class="h-px bg-zinc-100 mb-2 mt-6"></div>
        <div class="flex justify-between sm:items-center items-start flex-col sm:flex-row">
            <div class="posts__footer">
                <small><b class="font-semibold ">Autor:</b> {{ $post->author }}</small><br>
                <small><b class="font-semibold ">Publicado em:</b>
                    {{ $date->format('d/m/Y h:i:s') }}</small><br>
                @if (isset($post->category->title))
                <small><b class="font-semibold ">Categoria:</b> {{ $post->category->title }}</small>
                @endif
            </div>
            <form action="{{ route('post.like', $post) }}" method="POST" class="mt-4 sm:mt-0" style="display:flex;justify-content:flex-end">
                @csrf
                <button type="submit" style="border:none;background:transparent;font-size:1.3rem;cursor:pointer">
                    @if ($post->likes()->where('user_id', Auth::id())->exists())
                    <i class="ri-heart-fill text-red-400"></i> {{ $post->likes()->count() }}
                    {{ $post->likes()->count() > 1 ? 'Likes' : 'Like' }}
                    @else
                    <i class="ri-heart-line text-red-400"></i> {{ $post->likes()->count() }}
                    {{ $post->likes()->count() > 1 ? 'Likes' : 'Like' }}
                    @endif
                </button>
            </form>
        </div>
        <div class="h-px bg-zinc-100 mt-2"></div>
        <p>{!! $post->description !!}</p>
        @if ($post->image)
        <div class="posts__imagem">
            <img src="{{ asset('storage/' . $post->image) }}" alt="{{ $post->title }}" />
        </div>
        @endif
        <x-markdown>{!! $post->content !!}</x-markdown>
        @if (isset($post->tags))
        <div class="flex items-center gap-2 flex-wrap mt-20">

            @foreach ($post->tags as $tag)
            <div class="tags p-2 bg-zinc-100 border border-zinc-200 border-solid text-zinc-500 w-fit text-sm rounded-full">
                {{ $tag }}
            </div>
            @endforeach
        </div>
        <div class="h-px bg-zinc-200 mt-2"></div>
        @endif
    </div>

    @if (session('error'))
    <div class="alert alert-danger mt-4">{{ session('error') }}</div>
    @endif
    @if (session('success'))
    <div class="alert alert-success mt-4 bg-green-700 text-white px-6 text-center rounded-md">
        {{ session('success') }}
    </div>
    @endif
    <!-- Comentários -->
    <h2 id="comments" class="text-xl font-semibold mb-4 mt-4">Comentários</h2>
    <form id="comment-form" action="{{ route('post.comment', $post) }}" method="POST" class="comment-form mb-6">
        @csrf
        <textarea name="body" rows="3" required class="w-full p-2 shadow-custom border border-[#eee] rounded mb-2"></textarea>
        <button type="submit" class="px-4 py-2 bg-zinc-800 text-white rounded">Comentar</button>
    </form>

    @php
            use Creativeorange\Gravatar\Facades\Gravatar;

    @endphp

    @if ($post->comments()->whereNull('parent_id')->where('status', 'published')->exists())
    @foreach ($post->comments()->whereNull('parent_id')->where('status', 'published')->get() as $comment)

    @php
            $gravatarUrl = Gravatar::get( $comment->user->email);

    @endphp
    <div class="comment p-4  mb-4">
        <div class="p-4 bg-zinc-50">
            <div class="flex items-center gap-2 ">
                <div class="flex items-center gap-2 mb-4">
                    <div class="rounded-full w-14 h-14 bg-zinc-400 overflow-hidden">
                        <img src="{{ $gravatarUrl }}" alt="Gravatar do usuário">
                    </div>
                    <div>
                        <strong class=" text-zinc-900 block">{{ $comment->user->name }} </strong>
                        <strong class=" text-zinc-900 block">{{ $comment->created_at->diffForHumans() }} </strong>
                    </div>
                </div>
                @if ($comment->user_id === Auth::id())
                <form action="{{ route('comment.destroy', $comment) }}" method="POST" class="delete-comment-form">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="px-4 py-2 bg-transparent text-white"><i class="ri-delete-bin-5-line"></i></button>
                </form>
                @endif
            </div>
            <p>{{ $comment->body }}</p>
        </div>

        <!-- Formulário de Resposta -->
        <form action="{{ route('post.comment', $post) }}" method="POST" class="comment-form--reply mt-4">
            @csrf
            <textarea name="body" rows="2" required class="w-full p-2 shadow-custom rounded mb-2 border-0 "></textarea>
            <input type="hidden" name="parent_id" value="{{ $comment->id }}">
            <button type="submit" class="px-4 py-2 bg-blue-900 text-white rounded">Responder</button>
        </form>

        <!-- Botão de Exclusão -->


        <!-- Respostas -->
        @foreach ($comment->replies as $reply)
        @php
            $gravatarUrlReply = Gravatar::get( $reply->user->email);

        @endphp
        <div class="comment--reply p-4  mt-4 ml-10 border-l-2 border-solid border-zinc-300 pl-4 bg-zinc-50">
            <div class=" flex items-center gap-2 justify-between ">
                <div class="flex items-center gap-2 mb-4">
                    <div class="rounded-full w-14 h-14 bg-zinc-400 overflow-hidden">
                        <img src="{{ $gravatarUrlReply  }}" alt="Gravatar do usuário">
                    </div>
                    <div>
                        <strong class=" text-zinc-900 block">{{ $reply->user->name }} </strong>
                        <strong class=" text-zinc-900 block">{{ $reply->created_at->diffForHumans() }} </strong>
                    </div>
                </div>
                <!-- Botão de Exclusão para Respostas -->
                @if ($reply->user_id === Auth::id())
                <form action="{{ route('comment.destroy', $reply) }}" method="POST" class="mt-2 delete-comment-form">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="px-4 py-2 bg-transparent text-zinc-800"><i class="ri-delete-bin-5-line"></i></button>
                </form>
                @endif
            </div>
            <p> {{ $reply->body }}</p>
        </div>
        @endforeach
    </div>
    @endforeach
    @else
    <p>Não há comentarios cadastrado</p>
    @endif
</section>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Excluir comentário
        document.querySelectorAll('.delete-comment-form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                if (confirm('Você tem certeza que deseja excluir este comentário?')) {
                    fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form)
                    }).then(response => {
                        if (response.ok) {
                            sessionStorage.setItem('scrollToComments', 'true');
                            window.location.reload();
                        }
                    });
                }
            });
        });

        // Enviar comentário
        const commentForm = document.getElementById('comment-form');
        if (commentForm) {
            commentForm.addEventListener('submit', function() {
                sessionStorage.setItem('scrollToComments', 'true');
            });
        }

        // Enviar resposta
        document.querySelectorAll('.comment-form--reply').forEach(form => {
            form.addEventListener('submit', function() {
                sessionStorage.setItem('scrollToComments', 'true');
            });
        });

        // Rolar até os comentários se necessário
        if (sessionStorage.getItem('scrollToComments') === 'true') {
            sessionStorage.removeItem('scrollToComments');
            window.location.hash = '#comments';
        }
    });
</script>
@endsection
