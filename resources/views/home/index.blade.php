@extends('master.master-home')
@section('content')
    <main>
        <header class="header">
            <div class="container-2xl">
                <div class="logo">
                    <a href="#">
                        <p>showcasy.</p>
                    </a>
                </div>
                <nav>
                    <div class="menu">
                        <a class="uk-button uk-button-ghost gap-2" href="/blog" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>

                            Blog
                        </a>
                        <a class="uk-button uk-button-primary gap-2"
                            href="https://wa.me/5549999195407?text=Ol%C3%A1%2C+estou+vindo+do+seu+portfolio" target="_blank"
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
        <!-- start hero section  -->
        <section class="hero">
            <div class="container-2xl">
                <div class="hero__content">
                    <span class="subtitle">Hello! I’m Leonardo Geja.</span>
                    <h1>Crafting visually web experiences with a focus
                        <span><strong>on design excellence.</strong></span>
                    </h1>
                    <a href="{{ asset('resume.pdf') }}" target="_blank" rel="noopener noreferrer" class="btn-myresume">My
                        resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>

                    </a>
                </div>
                <div class="hero__img">
                    <img src="{{ asset('site/assets/img/undraw_dev_productivity_re_fylf.webp') }}"
                        alt="image of a programmer" height="280.6875" width="499.55555555555554" loading="lazy">
                </div>
            </div>
        </section>
        <!-- end hero section  -->
        <!-- start approch section  -->
        <section class="approch">
            <div class="container-2xl">
                <div class="approch__header flex flex-col  md:flex-row w-full items-center">
                    <h2>What is my workflow</h2>
                    <span>The approach</span>
                </div>
                <div class="approch__wrapper">
                    <div class="approch__item">
                        <h3 class="font-black text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                            Strategy
                        </h3>
                        <p class="text-md">In this stage, I identify and assess which problem needs to be resolved,
                            determine the
                            project requirements, and establish the optimal architecture for implementation.</p>
                    </div>
                    <div class="approch__item">
                        <h3 class="font-black text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>

                            Execution
                        </h3>
                        <p>In this phase, I implement the previously defined strategy, breaking it down into smaller
                            tasks and ensuring that all requirements and structures are optimized to the best of my
                            ability.</p>
                    </div>
                    <div class="approch__item">
                        <h3 class="font-black text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                            </svg>

                            Tests
                        </h3>
                        <p>In this final phase, I conduct tests to ensure that everything is working as effectively as
                            possible, and ultimately, I create documentation.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- end  approch section -->
    </main>
    <div class="wrapper container-2xl">
        <div class="approch__header">
            <h2>My Works</h2>
            <span> A few of my works.</span>
        </div>
        <!-- card 1 -->
        <div class="wrapper__content">
            @if ($portfolio)
                @foreach ($portfolio as $port)
                    <div class="card">
                        <a href="{{ route('detalhe.index', $port->slug) }}">
                            <div class="card__header">
                                <img src="{{ asset('storage/' . $port->image) }}" alt="Image Cover of the Wireframe project"
                                    height="188.44" width="380" loading="lazy">
                            </div>

                            <div class="card__footer">
                                <div>
                                    <p class="font-black text-2xl font-zinc-900">{{ $port->title }}</p>
                                    <span class="text-1xl">
                                        {!! $port->description !!}
                                    </span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </a>
                    </div>
                @endforeach
            @else
            @endif
        </div>
    </div>
    {{-- <div class="wrapper__footer">
        <button class="uk-button uk-button-primary">Mais</button>
    </div> --}}
    </div>

    </div>

    <footer class="footer">
        <div class="container-2xl">
            <p>© 2024. All rights reserved.</p>
            <p>Created by Leonardo Geja</p>
        </div>
    </footer>
@endsection
