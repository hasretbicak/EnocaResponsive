/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function addComment() {
  const nameInput = document.getElementById("comment-name");
  const commentInput = document.getElementById("comment-textarea");
  const commentsDiv = document.getElementById("comment-div");
  const time = String(new Date()).split("GMT")[0];

  const newCommentDivElement = document.createElement("div");

  newCommentDivElement.classList.add("card", "p-3", "my-2");
  newCommentDivElement.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <div class="user d-flex flex-row align-items-center"> 
                <i class="user-img bi bi-person-fill rounded-circle mx-2 fs-5"></i> 
                <span>
                    <small class="font-weight-bold text-primary fs-5">${nameInput.value}</small> 
                </span> 
            </div>
            <small>${time}</small>
        </div>
        <small class="font-weight-bold mx-2">${commentInput.value}</small>
        <div class="action d-flex justify-content-end mt-2 align-items-center">
            <div class="reply px-4"> 
                <small onclick="removeComment(this)">Sil</small> 
            </div>
        </div>
    `;

  commentsDiv.appendChild(newCommentDivElement);
}

function removeComment(element) {
  element.parentElement.parentElement.parentElement.remove();
}s