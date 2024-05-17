<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;



Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');

Route::get('/', function () {
    $markdown = <<<'MARKDOWN'

    MARKDOWN;

    return view('markdown', ['markdown' => $markdown]);
});
