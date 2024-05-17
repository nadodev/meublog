<?php

namespace App\Providers;

use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

class AliasServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $loader = AliasLoader::getInstance();

        // Add your aliases
        $loader->alias('Markdown',  Markdown::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
