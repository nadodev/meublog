@extends('master.master-home')

@section('content')
    <main>
        <header class="header">
            <div class="container-2xl">
                <div class="logo">
                    <a href="#">
                        <p>Currículo de Leonardo Geja</p>
                    </a>
                </div>
                <nav>
                    <div class="menu">
                        <a class="uk-button uk-button-ghost gap-2" href="/blog">Blog</a>
                        <a class="uk-button uk-button-primary gap-2"
                            href="https://wa.me/5549999195407?text=Ol%C3%A1%2C+estou+vindo+do+seu+portfolio" target="_blank"
                            rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                            Vamos conversar?
                        </a>
                    </div>
                </nav>
            </div>
        </header>
        <section class="relative w-full h-[350px]">
            <img src="https://media.licdn.com/dms/image/v2/D4D16AQFBzcGGYmyoZg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1725498789570?e=1746057600&v=beta&t=idJ14KL-anj_A7m9luYbuGL7Vxpq3V57ThCSwVN8O1U" alt="Fundo"
                class="absolute top-0 left-0 w-full h-[350px] object-cover">
            <div class="hero__avatar absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 sm:top-2/3 md:top-1/2 lg:top-[300px]">
                <img src="https://github.com/nadodev.png" alt="Leonardo Geja" class="rounded-full border-4 border-gray-300 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            </div>
        </section>
        <section class="hero bg-gray-100 ">
            <div class="container-2xl flex items-center justify-between">
                <div class="hero__text ">
                    <div class="flex">
                        <div class="w-full flex items-start flex-col justify-start">
                            <h2 class="text-4xl font-semibold text-gray-800 mb-2">Leoanrdo Geja</h2>
                           <div class="flex gap-4 justify-between w-full items-center"> 
                            <p class="mb-3 max-w-[500px]">
                                Desenvolvedor FullStack | JAVA | Spring Boot | PHP | Laravel | Mysql | SQL | Mongodb | Postgres | Docker | Oracle
                            </p>

                            <div class="flex justify-end items-end flex-col"> 
                                <p class="font-bold">Trabalho atualmente em:</p>
                                <p>Unoesc Joaçaba</p>

                            </div>

                           </div>
                           
                           <p class="text-blue-600">Veja as <a href="#" id="openModalBtn" class=" underline">Informações de contato</a></p> 
                        </div>
                       
                    </div>
                    <h3 class="text-4xl font-semibold text-gray-800 mb-2 mt-4">Sobre</h3>
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
                        <h3 class="font-black text-2xl text-gray-800">Desenvolvedor Java</h3>
                        <span>Universidade do Oeste de Santa Catarina · Tempo integral</span>
                        <p>set de 2024 - o momento · 7 meses</p>
                        <p class="text-lg text-gray-700 mt-4">Desenvolvimento de aplicações com Java , Spring boot , Oracle , RabbitMQ, Flayway, JSP , Jasper, javascript
                        </p>
                    </div>
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="font-black text-2xl text-gray-800">Desenvolvedor Java</h3>
                        <span>Universidade do Oeste de Santa Catarina · Tempo integral</span>
                        <p>set de 2024 - o momento · 7 meses</p>
                        <p class="text-lg text-gray-700 mt-4">Desenvolvimento de aplicações com Java , Spring boot , Oracle , RabbitMQ, Flayway, JSP , Jasper, javascript
                        </p>
                    </div>
                    <div class="approch__item p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 class="font-black text-2xl text-gray-800">Desenvolvedor Java</h3>
                        <span>Universidade do Oeste de Santa Catarina · Tempo integral</span>
                        <p>set de 2024 - o momento · 7 meses</p>
                        <p class="text-lg text-gray-700 mt-4">Desenvolvimento de aplicações com Java , Spring boot , Oracle , RabbitMQ, Flayway, JSP , Jasper, javascript
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
        </section>
        <section class="approch">
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
        </section>
    </main>
    <div id="modal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white p-6 rounded-lg w-96">
            <button id="closeModalBtn" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            <h2 class="text-2xl font-semibold text-center mb-4">Informações de Contato</h2>
            <ul class="list-none space-y-2 text-lg text-gray-700">
                <li><strong class="font-semibold">Nome:</strong> Leonardo Geja</li>
                <li><strong class="font-semibold">Endereço:</strong> Rua Exemplo, 123, Cidade, Estado</li>
                <li><strong class="font-semibold">Telefone:</strong> (49) 99999-9999</li>
                <li><strong class="font-semibold">Email:</strong> <a href="mailto:leonardo.geja@email.com" class="text-blue-500 hover:text-blue-700">leonardo.geja@email.com</a></li>
                <li><strong class="font-semibold">LinkedIn:</strong> <a href="https://www.linkedin.com/in/leonardogeja" target="_blank" class="text-blue-500 hover:text-blue-700">linkedin.com/in/leonardogeja</a></li>
                <li><strong class="font-semibold">GitHub:</strong> <a href="https://github.com/leonardogeja" target="_blank" class="text-blue-500 hover:text-blue-700">github.com/leonardogeja</a></li>
            </ul>
        </div>
    </div>
    
    <footer class="footer py-8 bg-gray-900 text-white">
        <div class="container-2xl text-center">
            <p>© 2025. Todos os direitos reservados - Leonardo Geja</p>
            <p>Criado por Leonardo Geja</p>
        </div>
    </footer>
    <script>
        // Seleciona os elementos necessários
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Abre a modal ao clicar no botão
openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Fecha a modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Fecha a modal ao clicar fora da área da modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});
    </script>
@endsection
