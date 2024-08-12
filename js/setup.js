let perms = document.getElementById('listOfPermissions');

let writePerm = document.getElementById('writeSettings');

perms.addEventListener('itemSelected', function () {
    try {
    window.AppInventor.setWebViewString(perms.getAttribute('value'));
    } catch (e) {}
});

let int = window.setInterval(function () { // checks for any messages sent from the app.
    try {
        if(window.AppInventor.getWebViewString()['canWriteSettings']) {
            writePerm.setAttriute('disabled', 'true');
            clearInterval(int);
        }
    } catch(e) {
    }
},1);