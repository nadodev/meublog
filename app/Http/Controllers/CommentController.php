<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request, Blog $post)
    {
        $request->validate([
            'body' => 'required',
            'parent_id' => 'nullable|exists:comments,id'
        ]);

        Comment::create([
            'body' => $request->body,
            'user_id' => Auth::id(),
            'blog_id' => $post->id,
            'parent_id' => $request->parent_id,
        ]);

        return back();
    }

    public function destroy(Comment $comment)
    {
        if ($comment->user_id !== Auth::id()) {
            return redirect()->back()->with('error', 'Você não tem permissão para excluir este comentário.');
        }

        $comment->delete();

        return redirect()->back()->with('success', 'Comentário excluído com sucesso.');
    }
}
