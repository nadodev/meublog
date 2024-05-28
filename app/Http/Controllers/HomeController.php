<?php

namespace App\Http\Controllers;
use App\Models\Portfolio;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $portfolio = Portfolio::where('status','active')->get();

        return view('home.index', compact('portfolio'));
    }
}
