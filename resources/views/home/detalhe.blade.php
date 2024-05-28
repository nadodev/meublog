@extends('master.master-home')
@section('content')
    @php
        use Carbon\Carbon;
    @endphp
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
                <p>I was contracted to work on the client project Just Trip for WeBOOST Australia. Working as the sole
                    designer, I closely collaborated with the client, project manager, and development team throughout the
                    entire process. Our main goal was to transform the existing WeChat Mini Program into native mobile apps
                    with significantly enhanced usability and accessibility, while also giving the user interface a modern,
                    clean makeover.

                </p>
                <img
                    src="https://assets-global.website-files.com/63d9b458b2ca2e7c30fa75b2/63f5987a0fac871436c938b9_Just%20Trip%20-%20Screenshot%201-p-2000.webp" />
            </div>
        </div>
        <div class="container">
            <div class="project__item">
                <h3>Overview</h3>
                <p>
                    As the sole UX/UI designer for the project, I worked closely with the client and the project manager and
                    developers from WeBOOST. I was responsible for:

                </p>

            </div>

            <div class="project__item">
                <h3>My Role </h3>
                <div>
                    <li>UX Audit of the existing app </li>
                    <li>Secondary research </li>
                    <li>Wireframes </li>
                    <li> Hi-fidelity UI design </li>
                </div>
            </div>
            <div class="project__item">
                <h3>Overview</h3>
                <p>
                    酱游Just Trip is bilingual travel app that enables you to travel the world on your own by offering
                    in-depths guides, maps populated with thousands of places, GPS navigation(online & offline), in-app
                    booking, user generated routes, etc!
                </p>
            </div>
            <div class="container">

                <img
                    src="https://assets-global.website-files.com/63d9b458b2ca2e7c30fa75b2/63f5987a0fac871436c938b9_Just%20Trip%20-%20Screenshot%201-p-2000.webp" />
            </div>
            <div class="project__item">
                <h3>Overview</h3>
                <p>
                    酱游Just Trip is bilingual travel app that enables you to travel the world on your own by offering
                    in-depths guides, maps populated with thousands of places, GPS navigation(online & offline), in-app
                    booking, user generated routes, etc!
                </p>
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
