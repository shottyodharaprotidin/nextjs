function fullScreenSearch() {
    const alignSearchBar = () => {
      const wHeight = window.innerHeight;
      const fullscreenSearchForm = document.getElementById('fullscreen-searchform');
      fullscreenSearchForm.style.top = `${wHeight / 2}px`;
    };
  
    window.addEventListener('resize', alignSearchBar);
    alignSearchBar();
  
    document.querySelector('.btn-search_two').addEventListener('click', function () {
      const fullscreenSearchOverlay = document.getElementById('search-overlay');
      fullscreenSearchOverlay.classList.add('fullscreen-search-overlay-show');
    });
  
    document.querySelector('#fullscreen-close-button').addEventListener('click', function (e) {
      e.preventDefault();
      const fullscreenSearchOverlay = document.getElementById('search-overlay');
      fullscreenSearchOverlay.classList.remove('fullscreen-search-overlay-show');
    });
  }
  
  export default fullScreenSearch;