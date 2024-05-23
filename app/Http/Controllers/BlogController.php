<?php

namespace App\Http\Controllers;

use App\Models\{Blog, Like, Category};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Spatie\LaravelMarkdown\MarkdownRenderer;
use Spatie\ShikiPhp\Shiki;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Blog::orderBy('created_at', 'asc')->get();
        $categorias = Category::orderBy('created_at', 'asc')->get();

        $postCount = Blog::withCount('likes')
        ->orderByDesc('likes_count')
        ->take(3)
        ->get();


        $postRecentes = Blog::orderBy('created_at', 'asc')
        ->take(3)
        ->get();

        return view('posts.index', compact('posts','postCount','postRecentes','categorias'));
    }


    public function show(string $slug) : View
    {

        $post = Blog::where('slug', $slug)->first();

        return  view('posts.detalhe', compact('post'));
    }

    public function curtir($slug)
    {
        $post = Blog::where('slug', $slug)->first();

        $post->like = $post->like + 1;

        $post->save();

        return redirect()->back();

    }

    public function like(Blog $post)
    {
        $like = Like::where('user_id', Auth::id())->where('blog_id', $post->id)->first();

        if ($like) {
            // Se já curtiu, descurte
            $like->delete();
        } else {
            // Se não curtiu, curte

            Like::create([
                'user_id' => Auth::id(),
                'blog_id' => $post->id,
            ]);
        }

        return back();
    }
}
