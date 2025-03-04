@extends('master.master-home')

@section('content')
<style>
    .informacao-pessoal {
        display: none;
    }

    #contentForPdf {
        width: 100%;
        margin: 0 auto;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    @media print {

        header,
        footer,
        #printButton,
        .menu,
        .imagem-cover,
        .btn-informacao,
        .projetos,
        .sobre {
            display: none;
        }

        .informacao-pessoal {
            display: block;
            margin-bottom: 10px;
        }

        body {
            font-size: 12pt;
            line-height: 1.5;
            color: #000;
            background: #fff;
        }

        .hero__avatar img {
            width: 100px;
            height: 100px;
            border: 2px solid #ccc;
        }

        .container-2xl {
            padding: 0;
            margin: 0;
        }

        h2,
        h3 {
            font-size: 16pt;
            text-align: left;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        p {
            font-size: 12pt;
            margin-bottom: 10px;
        }

        .approch__item {
            page-break-inside: avoid;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
        }

        a {
            color: #000;
            text-decoration: none;
        }

        .informacao-pessoal ul {
            list-style-type: none;
            padding: 0;
        }

        .informacao-pessoal li {
            margin-bottom: 5px;
        }

        .informacao-pessoal strong {
            font-weight: bold;
        }
    }

</style>
<main>
    <header class="header">
        <div class="container-2xl">
            <div class="logo">
                <a href="/">
                    <p>LeonardoGeja.</p>
                </a>

            </div>

            <nav>
                <div class="menu">
                    <!--button id="printButton" class="uk-button uk-button-primary gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Imprimir Currículo
                        </button>
                        <button id="downloadPdfButton" class="uk-button uk-button-primary gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Baixar Currículo em PDF
                        </button-->
                        @if($existBlog) 
                        <a class="uk-button uk-button-ghost gap-2" href="/blog">
                            Blog
                        </a>
                        @endif
                    <a class="uk-button uk-button-primary gap-2" href="https://wa.me/5549999195407?text=Ol%C3%A1%2C+estou+vindo+do+seu+portfolio" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        Vamos conversar?
                    </a>

                </div>
            </nav>
        </div>
    </header>
    <div id="contentForPdf">
        <section class="imagem-cover relative w-full h-[350px]">
            <img src="https://media.licdn.com/dms/image/v2/D4D16AQFBzcGGYmyoZg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1725498789570?e=1746057600&v=beta&t=idJ14KL-anj_A7m9luYbuGL7Vxpq3V57ThCSwVN8O1U" alt="Fundo" class="absolute top-0 left-0 w-full h-[350px] object-cover">
            <div class="hero__avatar absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 sm:top-2/3 md:top-1/2 lg:top-[300px] lg:block hidden md:block">
                <img src="https://github.com/nadodev.png" alt="Leonardo Geja" class="rounded-full border-4 border-gray-300 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            </div>
        </section>
        <section class="hero mt-[70px]">
            <div class="container-2xl flex items-center justify-between">
                <div class="hero__text ">
                    <div class="flex ">
                        <div class="w-full flex items-start flex-col justify-start">
                            <h2 class="text-4xl font-semibold text-gray-800 mb-2 leading-relaxed">Leonardo Geja</h2>
                            <div class="flex gap-4 md:justify-between w-full md:items-center flex-col md:flex-row justfy justify-start ">
                                <p class="mb-3 max-w-[500px] leading-relaxed text-gray-600">
                                    Desenvolvedor FullStack | JAVA | Spring Boot | PHP | Laravel | Mysql | SQL | Mongodb | Postgres | Docker | Oracle
                                </p>

                                <div class="flex md:justify-end md:items-end flex-col leading-relaxed text-gray-600">
                                    <p class="font-bold">Trabalho atualmente em:</p>
                                    <p>Unoesc Joaçaba</p>

                                </div>

                            </div>
                            <ul class="list-none space-y-2 text-lg text-gray-700 informacao-pessoal">
                                <li><strong class="font-semibold">Nome:</strong> Leonardo Geja</li>
                                <li><strong class="font-semibold">Endereço:</strong> Rua Exemplo, 123, Cidade, Estado</li>
                                <li><strong class="font-semibold">Telefone:</strong> (49) 99999-9999</li>
                                <li><strong class="font-semibold">Email:</strong> <a href="mailto:leonardo.geja@email.com" class="text-blue-500 hover:text-blue-700">leonardo.geja@email.com</a></li>
                                <li><strong class="font-semibold">LinkedIn:</strong> <a href="https://www.linkedin.com/in/leonardogeja" target="_blank" class="text-blue-500 hover:text-blue-700">linkedin.com/in/leonardogeja</a></li>
                                <li><strong class="font-semibold">GitHub:</strong> <a href="https://github.com/leonardogeja" target="_blank" class="text-blue-500 hover:text-blue-700">github.com/leonardogeja</a></li>
                            </ul>
                            <p class="btn-informacao text-blue-600">Veja as <a href="#" id="openModalBtn" class=" underline">Informações de contato</a></p>
                        </div>

                    </div>
                    <div class="sobre mt-8">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-4">Sobre</h2>
                        <p class="text-lg leading-relaxed text-gray-600">
                            Sou apaixonado por tecnologia e design, com experiência em desenvolvimento frontend e criação de
                            interfaces que garantem uma experiência única para os usuários.
                            Meu objetivo é combinar a estética do design com a funcionalidade, criando soluções que atendam às
                            necessidades dos usuários e aos objetivos do negócio.
                            Sempre busco aprender novas tecnologias e tendências para me manter atualizado e oferecer o melhor
                            em minhas entregas.
                        </p>

                    </div>
                </div>


            </div>
        </section>
        <section class="approch py-16">
            <div class="container-2xl">
                <div class="approch__header flex flex-col md:flex-row w-full items-center mb-8">
                    <h2 class="text-4xl font-semibold text-gray-800">Experiência</h2>
                    <span class="text-xl text-gray-600 mt-2 md:mt-0">Trabalho com diversas tecnologias e projetos
                        desafiadores</span>
                </div>
                <div class="approch__wrapper grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="font-semibold text-2xl text-gray-800">Desenvolvedor Java</h3>
                        <h4>Universidade do Oeste de Santa Catarina · Tempo integral</h4>
                        <span class="text-sm text-gray-900 ">set de 2024 - o momento · 7 meses
                            Joaçaba · Presencial</span>
                        <p class="text-base text-gray-700 mt-4">Na unoesc trabalho como desenvolvedor fullstack e atualmente estou na parte de sustentaçao do sistema academico, como as seguinte tecnilogias e ferramentas Java , Spring boot , Oracle , RabbitMQ, Flayway, JSP , Jasper, javascript
                        </p>
                    </div>
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="font-semibold text-2xl text-gray-800">Desenvolvedor de software (PHP)</h3>
                        <h4>Studio Alpha Comunicação · Tempo integral</h4>
                        <span class="text-sm text-gray-900 ">ago de 2023 - ago de 2024 · 1 ano 1 mês
                            Joaçaba, Santa Catarina, Brasil · Presencial</span>
                        <p class="text-base text-gray-700 mt-4">
                            Na Studio Alpha, trabalhei como programador Back End, trabalhei com gerenciamento de projetos e com ferramentas como Laravel, MySQL, Redis e Pest
                        </p>
                    </div>
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="font-semibold text-2xl text-gray-800"> Desenvolvedor front-end</h3>
                        <h4>DOT Digital Group · Tempo integral</h4>
                        <span class="text-sm text-gray-900 ">fev de 2022 - ago de 2023 · 1 ano 7 meses
                            Florianópolis, Santa Catarina</span>
                        <p class="text-base text-gray-700 mt-4">Durante meu tempo no DOT Digital Group, desempenhei um papel vital na criação de sites e portais. Minhas habilidades em HTML, CSS e JavaScript, incluindo o uso do SASS, foram cruciais na criação de interfaces otimistas. Além disso, minha experiência com PHP e o uso do Craft CMS e Twig me permitiram desenvolver soluções web robustas e flexíveis. Também tive a oportunidade de contribuir para projetos envolvendo React Native, ampliando minha expertise no desenvolvimento móvel. Minhas responsabilidades abrangeram desde a concepção até a manutenção de portais de grande escala, garantindo que cada projeto proporcionasse uma experiência digital excepcional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="approch">
            <div class="container-2xl">
                <div class="approch__header flex flex-col md:flex-row items-center mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">Formação acadêmica</h2>
                    <span class="text-gray-600 mt-2 md:mt-0">Aperfeiçoamento contínuo é essencial para meu desenvolvimento</span>
                </div>
                <div class="approch__wrapper grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="text-2xl font-bold text-gray-800">Estácio </h3>
                        <span class="text-gray-400 text-sm">1 Fase - Andamento</span>
                        <p class="text-gray-700">Tecnólogo: Analise e desenvolvimento de sistemas</p>
                    </div>

                </div>

                <div class="approch__wrapper grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="text-2xl font-bold text-gray-800">Universidade do Oeste de Santa Catarina (Unoesc)</h3>
                        <span class="text-gray-400 text-sm">3 Fase - Andamento </span>
                        <p class="text-gray-700">Bacharelado: Direito</p>
                    </div>

                </div>
            </div>
        </section>
        <!-- section class="approch projetos">
            <div class="container-2xl">
                <div class="approch__header flex flex-col md:flex-row items-center mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">Projetos</h2>
                    <span class="text-gray-600 mt-2 md:mt-0">Aperfeiçoamento contínuo é essencial para meu desenvolvimento</span>
                </div>
                <div class="approch__wrapper grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="text-2xl font-bold text-gray-800">Curso de React Avançado</h3>
                        <p class="text-gray-700">Plataforma Z, 2022</p>
                    </div>
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="text-2xl font-bold text-gray-800">Design de Interfaces com Figma</h3>
                        <p class="text-gray-700">Academia Y, 2021</p>
                    </div>
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="text-2xl font-bold text-gray-800">Desenvolvimento Web Full Stack</h3>
                        <p class="text-gray-700">Academia X, 2020</p>
                    </div>
                </div>
            </div>
        </section -->
</main>
<div id="modal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center hidden">
    <div class="bg-white p-6 rounded-lg w-96">
        <button id="closeModalBtn" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        <h2 class="text-2xl font-semibold text-center mb-4">Informações de Contato</h2>
        <ul class="list-none space-y-2 text-gray-700">
            <li class=""><strong class="font-semibold text-md">Nome:</strong> Leonardo Geja</li>
            <li class=""><strong class="font-semibold text-md">Endereço:</strong> Rua Exemplo, 123, Cidade, Estado</li>
            <li class=""><strong class="font-semibold text-md">Telefone:</strong> (49) 99999-9999</li>
            <li class=""><strong class="font-semibold text-md">Email:</strong> <a href="mailto:leonardo.geja@email.com" class="text-blue-500 hover:text-blue-700">leonardo.geja@email.com</a></li>
            <li class=""><strong class="font-semibold text-md">LinkedIn:</strong> <a href="https://www.linkedin.com/in/leonardogeja" target="_blank" class="text-blue-500 hover:text-blue-700">linkedin.com/in/leonardogeja</a></li>
            <li class=""><strong class="font-semibold text-md">GitHub:</strong> <a href="https://github.com/leonardogeja" target="_blank" class="text-blue-500 hover:text-blue-700">github.com/leonardogeja</a></li>
        </ul>
    </div>
</div>
</div>

<footer class="footer py-8 bg-gray-900 text-white">
    <div class="container-2xl text-center">
        <p>© 2025. Todos os direitos reservados - Leonardo Geja</p>
        <p>Criado por Leonardo Geja</p>
    </div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script>
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    openModalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

</script>
<script>
    document.getElementById('printButton').addEventListener('click', function() {
        window.print();
    });

</script>
<script>
    document.getElementById('downloadPdfButton').addEventListener('click', function() {
        const element = document.getElementById('contentForPdf');

        const options = {
            margin: [5, 10, 10, 5]
            , filename: 'Curriculo_Leonardo_Geja.pdf'
            , image: {
                type: 'jpeg'
                , quality: 0.98
            }
            , html2canvas: {
                scale: 3
                , useCORS: true
                , logging: true
                , scrollX: 0
                , scrollY: 0
                , windowWidth: element.scrollWidth
                , windowHeight: element.scrollHeight
            }
            , jsPDF: {
                unit: 'mm'
                , format: 'a4'
                , orientation: 'portrait'
                , compress: true
            }
        };

        html2pdf().set(options).from(element).save();
    });

</script>
@endsection

