<?php

namespace App\Http\Controllers;

use App\Models\{Blog, Like, Category, User};
use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function index()
    {

        $existBlog = Blog::count() > 0;

        if(!$existBlog) {
            return redirect()->back();
        }

        $posts = Blog::orderBy('created_at', 'desc')->get();
        $categorias = Category::orderBy('created_at', 'asc')->get();

        $postCount = Blog::withCount('likes')
        ->orderByDesc('likes_count')
        ->take(3)
        ->get();


        $postRecentes = Blog::orderBy('created_at', 'asc')
        ->take(3)
        ->get();



        $user = User::where('email', 'contato@leonardogeja.com.br')->first();

        $gravatarUrl = Gravatar::get($user->email);

        return view('posts.index', compact('posts','postCount','postRecentes','categorias', 'gravatarUrl'));
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


    public function category($slug)
    {

        $categoies = Category::where('slug', $slug)->first();

        $posts = Blog::where('category_id', $categoies->id)
             ->orderBy('created_at', 'desc')
             ->get();

             $categorias = Category::has('blogs')
             ->orderBy('created_at', 'asc')
             ->get();

        $postCount = Blog::withCount('likes')
        ->orderByDesc('likes_count')
        ->take(3)
        ->get();


        $postRecentes = Blog::orderBy('created_at', 'asc')
        ->take(3)
        ->get();

        $user = User::where('email', 'contato@leonardogeja.com.br')->first();

        $gravatarUrl = Gravatar::get($user->email);

        return view('posts.category', compact('posts','postCount','postRecentes','categorias', 'gravatarUrl'));
    }
}
