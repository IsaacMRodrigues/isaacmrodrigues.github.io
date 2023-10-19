function header() {
  headerElement.innerHTML = `
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div class="container-fluid">
    <a class="navbar-brand" href="#inicio">
        <img src="./src/images/svg20.png" class="logo-img" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#inicio">SOBRE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#projetos">PROJETOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#artigos">ARTIGOS</a>
                </li>
                <!-- <li>
            <form class="d-flex btn">
                <input type="checkbox" onclick="darkMode()" class="checkbox" id="chk" />
                <label class="label" for="chk">
                  <i class="fas fa-moon"></i>
                  <i class="fas fa-sun"></i>
                  <div class="ball"></div>
                </label>
                <script src="https://kit.fontawesome.com/998c60ef77.js" crossorigin="anonymous"></script>
              </form>
            </li> -->
            </ul>
        </div>
    </div>
</div>
</nav>
</header>
`
}

header();
