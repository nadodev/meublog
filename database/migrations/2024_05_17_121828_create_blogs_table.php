<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author')->nullable();
            $table->date('published_at');
            $table->text('content');
            $table->string('image')->nullable();
            $table->string('status')->default('published');
            $table->string('like')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations. php artisan make:filament-resource Blog --generate


     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
