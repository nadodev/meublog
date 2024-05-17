<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;


    protected $fillable = ['title','slug', 'author', 'published_at', 'description', 'content', 'image', 'status', 'like'];
}
