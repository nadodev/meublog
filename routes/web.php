<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/curtir/{slug}', [BlogController::class, 'curtir'])->name('blog.curtir');
    Route::post('/post/{post}/like', [BlogController::class, 'like'])->name('post.like');
    Route::post('/post/{post}/comment', [CommentController::class, 'store'])->name('post.comment');

    Route::delete('/comment/{comment}', [CommentController::class, 'destroy'])->name('comment.destroy');



});




require __DIR__.'/auth.php';


Route::get('/', [BlogController::class, 'index'])->name('blog.index');
Route::get('/{slug}', [BlogController::class, 'show'])->name('blog.show');
Route::get('/category/{slug}', [BlogController::class, 'category'])->name('blog.category.show');
