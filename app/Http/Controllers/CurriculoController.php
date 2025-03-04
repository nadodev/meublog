<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Portfolio;

class CurriculoController extends Controller
{
    public function index()
    {
        $portfolio = Portfolio::where('status', 'active')
        ->orderBy('id', 'desc')
        ->get();
        $existBlog = Blog::count() > 0;

        return view('home.curriculo', compact('portfolio', 'existBlog'));
    }
}
