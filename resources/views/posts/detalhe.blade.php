@extends('master.master')


@section('content')
<div class="btn__voltar">
    <a href="{{ route('blog.index') }}">Voltar</a>
</div>
<section class="posts">
    <div class="posts__card">
        <a href="{{ route('post.like', $post->slug) }}">
            <div class="posts__like">
                @if($post->like > 0)

                @else


                @endif
            </div>
        </a>
        <form action="{{ route('post.like', $post) }}" method="POST" style="display:flex;justify-content:flex-end">
            @csrf
            <button type="submit" style="border:none;background:transparent;font-size:1.3rem;margin-bottom:20px;cursor:pointer">
                @if($post->likes()->where('user_id', Auth::id())->exists())
                <i class="ri-heart-fill text-red-400"></i> {{ $post->likes()->count() }} {{ $post->likes()->count() > 1 ? 'Likes': 'Like' }}
                @else
                <i class="ri-heart-line text-red-400"></i> {{ $post->likes()->count() }} {{ $post->likes()->count() > 1 ? 'Likes': 'Like' }}
                @endif
            </button>
        </form>

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
        {!! $post->content!!}
    </div>

    <!-- Comentários -->
    <h3 id="comments" class="text-xl font-semibold mb-4 mt-4">Comentários</h3>
    <form id="comment-form" action="{{ route('post.comment', $post) }}" method="POST" class="comment-form mb-6">
        @csrf
        <textarea name="body" rows="3" required class="w-full p-2 border-2 border-[#51515e] rounded mb-2 bg-[#2f3134]"></textarea>
        <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">Comentar</button>
    </form>

    @foreach($post->comments()->whereNull('parent_id')->get() as $comment)
    <div class="comment p-4 bg-[#2e2e33] rounded mb-4">
        <div>
            <div  class="flex items-center gap-2 justify-between">
                <p><strong class="text-zinc-500 font-semibold">{{ $comment->user->name }} disse: </strong> </p>
                @if($comment->user_id === Auth::id())
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
            <textarea name="body" rows="2" required class="w-full p-2 border border-[#1e1e2e] rounded mb-2  bg-[#202024]"></textarea>
            <input type="hidden" name="parent_id" value="{{ $comment->id }}">
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Responder</button>
        </form>

        <!-- Botão de Exclusão -->


        <!-- Respostas -->
        @foreach($comment->replies as $reply)
        <div class="comment--reply p-4 bg-[#39393c] border-[#464646] rounded mt-4 ml-6 border">
            <div class=" flex items-center gap-2 justify-between">
            <p><strong class="text-zinc-500 font-semibold">{{ $reply->user->name }} respondeu: </strong> </p>
            <!-- Botão de Exclusão para Respostas -->
            @if($reply->user_id === Auth::id())
            <form action="{{ route('comment.destroy', $reply) }}" method="POST" class="mt-2 delete-comment-form">
                @csrf
                @method('DELETE')
                <button type="submit" class="px-4 py-2 bg-transparent text-white"><i class="ri-delete-bin-5-line"></i></button>
            </form>
            @endif
            </div>
            <p> {{ $reply->body }}</p>
        </div>
        @endforeach
    </div>
    @endforeach
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
