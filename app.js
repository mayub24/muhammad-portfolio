console.log('bruh');
AOS.init();

let buttons = document.querySelectorAll('.btn');
let projects = document.querySelectorAll('.link');
const barz = document.querySelector('.bars');
const cross = document.querySelector('.cross');
const screen = document.querySelector('.full-screen');
const navLinks = document.querySelectorAll('.small-nav li a');

buttons.forEach((eachBtn) => {

    eachBtn.addEventListener('mouseenter', (ev) => {
        if ((ev.target.children[0].className == 'active')) {
            console.log(ev);
        }
    })

    eachBtn.addEventListener('click', (e) => {

        document.querySelector('#btn1').disabled = false;
        document.querySelector('#btn2').disabled = false;
        document.querySelector('#btn3').disabled = false;
        document.querySelector('#btn4').disabled = false;
        document.querySelector('#btn5').disabled = false;
        document.querySelector('#btn6').disabled = false;

        // getting the element that has active and removing it
        const act = document.querySelector('.active');
        act.classList.remove('active');
        console.log(e.target);

        // add it to the target that does not have active class
        if (e.target.className != 'active') {
            e.target.classList.add('active');
            e.target.disabled = true;
        }



        // if btn1
        if (e.target.id == 'btn1') {
            projects.forEach((grid) => {

                grid.parentElement.style.display = 'flex';
                document.querySelector('.soon').style.display = 'none';
                document.querySelector('.soon').style.transition = '0.5s ease-in-out';

                if (grid.children[0].className == 'img1') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        grid.children[0].src = './quix.png';
                        grid.children[1].innerHTML = 'Trivia App';
                        grid.href = 'https://trivia-app-do1.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                    }, 1000);

                }
                else if (grid.children[0].className == 'img2') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        grid.children[0].src = './guess.jpg';
                        console.log(grid.children[1].innerHTML = 'Number Guesser');
                        console.log(grid.href = 'https://number-guesser-js-app.netlify.app/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1300);

                }
                else if (grid.children[0].className == 'img3') {


                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 600)

                    setTimeout(() => {
                        grid.children[0].src = './gits.png';
                        console.log(grid.children[1].innerHTML = 'Github User Search');
                        console.log(grid.href = 'https://github-search-8o4.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1700);

                }
                else {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 900)

                    setTimeout(() => {
                        grid.children[0].src = './todo.png';
                        console.log(grid.children[1].innerHTML = 'Todo List');
                        console.log(grid.href = 'https://todo-list-app-4ot.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 2200);


                }
            })
        }
        // if btn2
        else if (e.target.id == 'btn2') {
            projects.forEach((grid) => {

                grid.parentElement.style.display = 'flex';
                document.querySelector('.soon').style.display = 'none';
                document.querySelector('.soon').style.transition = '0.5s ease-in-out';

                if (grid.children[0].className == 'img1') {

                    // 0 oopacity to 1 opacity
                    grid.parentElement.style.opacity = 0;
                    grid.parentElement.style.transition = '0.5s ease-in-out';

                    setTimeout(() => {
                        grid.children[0].src = './netflix.png';
                        console.log(grid.children[1].innerHTML = 'Netflix Project');
                        console.log(grid.href = 'https://netflix-project-f16.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1000);

                }
                else if (grid.children[0].className == 'img2') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        grid.children[0].src = './cloudflare.png';
                        grid.children[1].innerHTML = 'Cloudflare Clone (Flex/Grid)';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://cloudflare-clone.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1300);

                }
                else if (grid.children[0].className == 'img3') {


                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 600)

                    setTimeout(() => {
                        grid.children[0].src = './starbucks.png';
                        grid.children[1].innerHTML = 'Starbucks Modern Design (Flex/Grid)';
                        grid.children[1].style.textAlign = 'center';
                        grid.children[1].style.paddingTop = '0.5em';
                        grid.href = 'https://starbucks-new-design.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1700);

                }
                else {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 900)

                    setTimeout(() => {
                        grid.children[0].src = './micro.png';
                        console.log(grid.children[1].innerHTML = 'Microsoft Website Clone');
                        console.log(grid.href = 'https://microsoft-website-clone.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 2200);


                }
            })
        }
        // if btn3
        else if (e.target.id == 'btn3') {
            projects.forEach((grid) => {

                grid.parentElement.style.display = 'flex';
                document.querySelector('.soon').style.display = 'none';
                document.querySelector('.soon').style.transition = '0.5s ease-in-out';

                if (grid.children[0].className == 'img1') {

                    // 0 oopacity to 1 opacity
                    grid.parentElement.style.opacity = 0;
                    grid.parentElement.style.transition = '0.5s ease-in-out';

                    setTimeout(() => {
                        grid.children[0].src = './mlogo.png';
                        console.log(grid.children[1].innerHTML = 'Mixure Books');
                        console.log(grid.href = 'https://bootstrap-book.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1000);

                }
                else if (grid.children[0].className == 'img2') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        grid.children[0].src = './plane.png';
                        grid.children[1].innerHTML = 'Travel App';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://travel-agency-19f.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1300);

                }
                else if (grid.children[0].className == 'img3') {


                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 600)

                    setTimeout(() => {
                        grid.children[0].src = './nation-one.png';
                        grid.children[1].innerHTML = 'Nation One';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://nation-one.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1700);

                }
                else {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 900)

                    setTimeout(() => {
                        grid.children[0].src = './boot.png';
                        console.log(grid.children[1].innerHTML = 'John\'s Portfolio');
                        console.log(grid.href = 'https://bootstrapportfolio.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 2200);


                }
            })
        }
        else if (e.target.id == 'btn4') {
            projects.forEach((grid) => {
                grid.parentElement.style.display = 'flex';
                document.querySelector('.soon').style.display = 'none';
                document.querySelector('.soon').style.transition = '0.5s ease-in-out';

                if (grid.children[0].className == 'img1') {

                    // 0 oopacity to 1 opacity
                    grid.parentElement.style.opacity = 0;
                    grid.parentElement.style.transition = '0.5s ease-in-out';

                    setTimeout(() => {
                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                        grid.parentElement.style.display = 'none';
                    }, 1000);

                }
                else if (grid.children[0].className == 'img2') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                        grid.parentElement.style.display = 'none';
                    }, 1300);

                }
                else if (grid.children[0].className == 'img3') {


                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 600)

                    setTimeout(() => {

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                        grid.parentElement.style.display = 'none';
                    }, 1700);

                }
                else {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 900)

                    setTimeout(() => {
                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                        grid.parentElement.style.display = 'none';
                    }, 2200);


                    setTimeout(() => {
                        document.querySelector('.soon').style.display = 'block';
                        document.querySelector('.soon').style.transition = '0.5s ease-in-out';
                    }, 900)

                }
            })
        }
        // if btn3
        else if (e.target.id == 'btn5') {
            projects.forEach((grid) => {

                grid.parentElement.style.display = 'flex';
                document.querySelector('.soon').style.display = 'none';
                document.querySelector('.soon').style.transition = '0.5s ease-in-out';

                if (grid.children[0].className == 'img1') {

                    // 0 oopacity to 1 opacity
                    grid.parentElement.style.opacity = 0;
                    grid.parentElement.style.transition = '0.5s ease-in-out';

                    setTimeout(() => {
                        grid.children[0].src = './airbnb.png';
                        grid.children[1].innerHTML = 'Airbnb Clone';
                        grid.href = 'https://airbnb-app-9nci.onrender.com/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1000);

                }
                else if (grid.children[0].className == 'img2') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        grid.children[0].src = './passport.png';
                        grid.children[1].innerHTML = 'Passport JS Authentication';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://google-auth-app.onrender.com/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1300);

                }
                else if (grid.children[0].className == 'img3') {


                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 600)

                    setTimeout(() => {
                        grid.children[0].src = './google-auth.png';
                        grid.children[1].innerHTML = 'Google Authentication Login';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://github.com/mayub24/Post-App-With-Google-Auth';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1700);

                }
                else {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 900)

                    setTimeout(() => {
                        grid.children[0].src = './note.png';
                        console.log(grid.children[1].innerHTML = 'Story CRUD Application');
                        console.log(grid.href = 'https://story-app-ywbz.onrender.com/login');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 2200);


                }
            })
        }
        // if btn6
        else if (e.target.id == 'btn6') {
            projects.forEach((grid) => {

                grid.parentElement.style.display = 'flex';
                document.querySelector('.soon').style.display = 'none';
                document.querySelector('.soon').style.transition = '0.5s ease-in-out';

                if (grid.children[0].className == 'img1') {

                    // 0 opacity to 1 opacity
                    grid.parentElement.style.opacity = 0;
                    grid.parentElement.style.transition = '0.5s ease-in-out';

                    setTimeout(() => {
                        grid.children[0].src = './million.png';
                        console.log(grid.children[1].innerHTML = 'Who Want\'s To Be A Millionare?');
                        console.log(grid.href = 'https://millionare-app.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1000);

                }
                else if (grid.children[0].className == 'img2') {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 400)

                    setTimeout(() => {
                        grid.children[0].src = './memory.png';
                        grid.children[1].innerHTML = 'Memory Card Game';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://memory-card-game-co1.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1300);

                }
                else if (grid.children[0].className == 'img3') {


                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 600)

                    setTimeout(() => {
                        grid.children[0].src = './reddice.png';
                        grid.children[1].innerHTML = 'Pig Dice Game';
                        grid.children[1].style.textAlign = 'center';
                        grid.href = 'https://pig-dice-game2.pages.dev/';

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 1700);

                }
                else {

                    // 0 oopacity to 1 opacity
                    setTimeout(() => {
                        grid.parentElement.style.opacity = 0;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 900)

                    setTimeout(() => {
                        grid.children[0].src = './ttt.png';
                        console.log(grid.children[1].innerHTML = 'Tic Tac Toe');
                        console.log(grid.href = 'https://tic-tac-toe-ant.pages.dev/');

                        // Transition
                        grid.children[0].style.transition = '1s ease-in-out';
                        grid.parentElement.style.opacity = 1;
                        grid.parentElement.style.transition = '0.5s ease-in-out';
                    }, 2200);


                }
            })
        }

    })

})

const readBtns = document.querySelectorAll('.read');

readBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.classList);
        if (e.target.classList[0] == 'read') {
            document.querySelector('.modal').style.display = 'flex';
        }


        if (e.target.classList[1] == 'tdsb') {

            document.querySelector('.modal-info').innerHTML =
                `

              <h2>Job Description</h2>

    <div style="width: 85%; margin: 1em auto">
     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        Performed daily scrums and weekly sprints while working in an Agile environment
     </li>

     <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Implemented Angular Unit Testing for HTTP Requests performed and verified the data that was received through the API
     </li>

      <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Improved the content management of the organization's website by integrating a headless CMS called "Strapi" allowing users to view the latest and most popular blog
     </li>

     <br>

     </div>
            `
        }
        else if (e.target.classList[1] == 'mgcs') {
            document.querySelector('.modal-info').innerHTML =
                `
               <h2>Job Description</h2>

    <div style="width: 85%; margin: 1em auto">
     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        Used various web development methodologies and frameworks (Angular/Bootstrap 4) to develop new and modify existing web content
     </li>

     <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Created an API that performed CRUD operations using the Azure Cosmos DB Database along with Node.js and Express.js
     </li>

      <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Performed daily scrums and weekly sprints while working in an Agile environment
     </li>

     <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Utilized Git and the Feature Branch Workflow to maintain the project code and used Azure DevOps to perform pull requests and code reviews
     </li>

     </div>
            `
        }
        else {
            document.querySelector('.modal-info').innerHTML =
                `
                 <h2>Job Description</h2>

    <div style="width: 85%; margin: 1em auto">
     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        Worked with Microsoft Office 365 products such as Word, Excel and Access
     </li>

     <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Created and managed schedules and meetings for the employees working at ISM
     </li>

      <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Used Adobe products (Adobe XD/Photoshop) to create designs for events and programs that took place at ISM
     </li>

     <br>

     <li style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      Worked with QuickBooks to manage sales, expenses and kept track of transactions on a regular basis
     </li>

     </div>
            `
        }
    })
})

document.querySelector('.close').addEventListener('click', (e) => {
    removeModal();
})

removeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}



// Clicking hamburger menu and showing full screen
barz.addEventListener('click', (e) => {
    screen.classList.toggle('show');
    document.querySelector('.white-screen').classList.add('fall');
    document.querySelector('.fas.fa-times').style.display = 'inline-block';
    document.querySelector('.fas.fa-bars').style.display = 'none';
    // document.querySelector('.navbar').style.background = 'white';
    // document.querySelector('.navbar').style.opacity = '0.85';
    document.querySelector('body').style.marginTop = '0em';
    document.querySelector('.navbar').style.display = 'none';
    console.log('bruhhhh');
})

cross.addEventListener('click', (e) => {
    screen.classList.toggle('show');
    document.querySelector('.fas.fa-times').style.display = 'none';
    document.querySelector('.fas.fa-bars').style.display = 'inline-block';
    document.querySelector('.white-screen').classList.remove('fall');
    document.querySelector('.navbar').style.backgroundColor = 'black';
    document.querySelector('.navbar').style.opacity = '0.70';
    document.querySelector('.navbar').style.position = 'fixed';
    document.querySelector('body').style.marginTop = '3em';
    document.querySelector('.navbar').style.display = 'block';


    console.log('ahhhhh');
})

navLinks.forEach((eachLink) => {
    eachLink.addEventListener('click', (e) => {
        screen.classList.toggle('show');
        document.querySelector('.white-screen').classList.remove('fall');
        document.querySelector('.fas.fa-times').style.display = 'none';
        document.querySelector('body').style.marginTop = '3em';
        document.querySelector('.fas.fa-bars').style.display = 'inline-block';
        document.querySelector('.navbar').style.display = 'block';
    })
})


window.addEventListener('resize', (e) => {
    console.log(window.outerWidth);
    if (window.outerWidth > 868) {
        document.querySelector('.navbar').style.display = 'block';
    }
    else if (window.outerWidth < 868) {
        if (document.querySelector('.white-screen').classList.contains('fall')) {
            document.querySelector('.navbar').style.display = 'none';
        }
    }

})


window.onload = function () {
    var recaptcha = document.forms["netlify"]["g-recaptcha-response"];
    recaptcha.required = true;
    recaptcha.oninvalid = function (e) {
        // do something
        alert("Please make sure to check the \"I'm not a robot\" box below.");
    }
}
