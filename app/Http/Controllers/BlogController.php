<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Spatie\LaravelMarkdown\MarkdownRenderer;
use Spatie\ShikiPhp\Shiki;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Blog::get();


        return view('posts.index', compact('posts'));
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
}
