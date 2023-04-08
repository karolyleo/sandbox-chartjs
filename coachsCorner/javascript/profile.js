function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
// Get the element with id="defaultOpen" and click on it
}

window.onload = function() {
    document.getElementById("defaultOpen").click()
    document.getElementById("defaultOpen2").click()
};

function openCity2(evt, cityName) {
    // Declare all variables
    var i, subcontent, sublinks;

    // Get all elements with class="tabcontent" and hide them
    subcontent = document.getElementsByClassName("subcontent");
    for (i = 0; i < subcontent.length; i++) {
        subcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    sublinks = document.getElementsByClassName("sublinks");
    for (i = 0; i < sublinks.length; i++) {
        sublinks[i].className = sublinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
// Get the element with id="defaultOpen" and click on it

    const messages = [
        {
            active: '🟢',
            User: 'Leo',
            post: ' I need your help with the backend',
        },
        {
            active: '🟢️',
            User: 'Kailan',
            post: 'This will be easy',
        },
        {
            active: '⚪️',
            User: 'Hung',
            post: 'lets get the mvp',
        },
        {
            active: '⚪️',
            User: 'user1',
            post: ' I need your help with the backend',
        },
        {
            active: '⚪️',
            User: 'user2',
            post: 'This will be easy',
        },
        {
            active: '⚪️',
            User: 'user3',
            post: 'lets get the mvp',
        }
    ];
    const request = [
        {
            active: '🟢',
            accept: '☑️',
            deny:'❌',

            User: 'Leo',
        },
        {
            active: '🟢',
            accept: '☑️',
            deny:'❌',
            User: 'Kailan',
        },
        {
            active: '🟢',
            accept: '☑️',
            deny:'❌',
            User: 'Hung',
        },
        {
            active: '🟢',
            accept: '☑️',
            deny:'❌',

            User: 'user1',
        },
        {
            active: '🟢',
            accept: '☑️',
            deny:'❌',
            User: 'user2',
        },
        {
            active: '🟢',
            accept: '☑️',
            deny:'❌',
            User: 'user3',
        }
    ];

    // Renders object on to page For Direct Messages
    const renderMessage = (messages) => {
        let html = "";
        for (let i = 0; i < messages.length; i++) {
            let htmlContent = document.querySelector(`#contents`);
            html += `
<div class="card">
            <h3 class="title-button">${messages[i].active} &nbsp;${messages[i].User}</h3>
         <ul id="messages" style="list-style: none; font-size: larger">
             <li>${messages[i].post}</li>
        </ul>
        <hr>
   </div>`
            htmlContent.innerHTML = html;
        }
    };
    renderMessage(messages)
    const renderRequest = (request) => {
        let html = "";
        for (let i = 0; i < request.length; i++) {
            let htmlContent = document.querySelector(`#contents3`);
            html += `
<div class="card">
            <h3 class="title-button">${request[i].active} &nbsp;${request[i].User}</h3>
         <ul id="request-list">
             <li><button id="request-button">${request[i].accept}</button></li>&nbsp;&nbsp;
             <li><button id="request-button">${request[i].deny}</button></li>
        </ul>
        <hr>
   </div>`
            htmlContent.innerHTML = html;
        }
    };
    renderRequest(request)
}