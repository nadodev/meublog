@extends('master.master-home')
@section('content')
    @php
        use Carbon\Carbon;
    @endphp
    <main>
        <header class="header">
            <div class="container-2xl">
                <div class="logo">
                    <a href="{{ route('home.index') }}">
                        <p>showcasy.</p>
                    </a>
                </div>
                <nav>
                    <div class="menu">
                        <a class="uk-button uk-button-primary gap-2"
                            https://wa.me/5549999195407?text=Ol%C3%A1%2C+estou+vindo+do+seu+portfolio" target="_blank"
                            rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>

                            Lets talk
                        </a>

                        {{-- <div class="language">
                        <label for="">
                            <span>Language</span>
                            <select name="select__language" class="select__language">
                                <option value="en">EN</option>
                                <option value="pt">PT</option>
                            </select>
                        </label>
                    </div> --}}
                    </div>
                    <div class="menu__mobile ">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    </main>
    <section class="hero__details container-2xl">
        <div>
            <div class="container">
                <h2>{{ $portfolio->title }} </h2>
                <span>{{ Carbon::parse($portfolio->created_at)->format('M-d-Y') }}</span>
                {!! $portfolio->description !!}
                <img src="{{ asset('storage/' . $portfolio->image) }}" />
            </div>
            <div class="flex mt-4 gap-2">
                <a class="uk-button uk-button-primary" href="{{ $portfolio->github ?? '#' }}">Github</a>
                <a class="uk-button uk-button-default" href=" {{ $portfolio->site ?? '#' }}">Ver Site</a>
            </div>
        </div>
        <div class="container">

            <div class="project__item">
                {!! $portfolio->text !!}
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="container-2xl">
            <p>© 2024. All rights reserved.</p>
            <p>Created by Leonardo Geja</p>
        </div>
    </footer>
@endsection
