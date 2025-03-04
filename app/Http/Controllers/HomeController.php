<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Portfolio;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $portfolio = Portfolio::where('status', 'active')
        ->orderBy('id', 'desc')
        ->get();

        $existBlog = Blog::count() > 0;

        $existJobs =  Portfolio::count() > 0;
        return view('home.index', compact('portfolio', 'existBlog', 'existJobs'));
    }

    public function detalhe($slug)
    {

        $portfolio = Portfolio::where('slug', $slug)->first();

        return view('home.detalhe', compact('portfolio'));
    }
}
