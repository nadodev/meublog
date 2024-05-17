<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Spatie\LaravelMarkdown\MarkdownRenderer;
use Spatie\ShikiPhp\Shiki;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Blog::get();


        return view('posts.index', compact('posts'));
    }
}
