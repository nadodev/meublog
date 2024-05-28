<?php

namespace App\Http\Controllers;
use App\Models\Portfolio;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $portfolio = Portfolio::where('status', 'active')
        ->orderBy('created_at', 'desc')
        ->get();


        return view('home.index', compact('portfolio'));
    }

    public function detalhe($slug)
    {

        $portfolio = Portfolio::where('slug', $slug)->first();

        return view('home.detalhe', compact('portfolio'));
    }
}
