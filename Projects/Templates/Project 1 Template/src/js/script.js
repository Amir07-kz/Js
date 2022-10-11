(function(){
    var modal = document.querySelector('.modal-container');                   
    var closeButton = document.querySelector('.close');                       
    var modalTriggers = document.querySelectorAll('[data-trigger]');         
    var nextButton = document.querySelector('.next-on-two');                 

    var isModalOpen = false;
    var pageYOffset = 0; //отключение в родительском приложении
  
    var openModal = function(){
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open');
      isModalOpen = true;
    }
  
    var closeModal = function(){
      modal.classList.remove('is-open');
      isModalOpen = false;
    }
  
    var onScroll = function(e){
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }

    modalTriggers.forEach(function(item) 
    { 
      item.addEventListener('click', openModal);
    })
    document.addEventListener('scroll', onScroll);
    closeButton.addEventListener('click', closeModal);
    nextButton.addEventListener('click', closeModal);
})();

(function(){
    var modal = document.querySelector('.modal-container-2');
    var closeButton = document.querySelector('.close-2');
    var modalTriggers = document.querySelectorAll('[data-trigger-2]');
    var nextButton = document.querySelector('.next-on-three');
    var backButton = document.querySelector('.back-on-one');

    var isModalOpen = false;
    var pageYOffset = 0;
  
    var openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open-2');
      isModalOpen = true;
    }
  
    var closeModal = function() {
      modal.classList.remove('is-open-2');
      isModalOpen = false;
    }
  
    var onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }

    modalTriggers.forEach(function(item) 
    { 
      item.addEventListener('click', openModal);
    })
    document.addEventListener('scroll', onScroll);
    closeButton.addEventListener('click', closeModal);
    nextButton.addEventListener('click', closeModal);
    backButton.addEventListener('click', closeModal);
})();

(function(){
    var modal = document.querySelector('.modal-container-3');
    var closeButton = document.querySelector('.close-3');
    var modalTriggers = document.querySelectorAll('[data-trigger-3]');
    var backButton = document.querySelector('.back-on-two');

    var isModalOpen = false;
    var pageYOffset = 0;
  
    var openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open-3');
      isModalOpen = true;
    }
  
    var closeModal = function() {
      modal.classList.remove('is-open-3');
      isModalOpen = false;
    }
  
    var onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }

    modalTriggers.forEach(function(item) 
    { 
      item.addEventListener('click', openModal);
    })
    document.addEventListener('scroll', onScroll);
    closeButton.addEventListener('click', closeModal);
    backButton.addEventListener('click', closeModal);
})();