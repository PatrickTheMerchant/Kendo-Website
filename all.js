// Set title of page
var clubinfo = " | UW Madison Kendo Club";
var path = window.location.pathname;
var pagename = path.substring(path.lastIndexOf("/") + 1)
if (pagename == "kendo") pagename = "home";
else if (pagename == "eBoard") pagename = "E-Board";
pagename = pagename.toUpperCase().substr(0, 1) + pagename.substring(1);
document.title = pagename + clubinfo;

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
