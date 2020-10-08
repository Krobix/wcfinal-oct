var bgheader = document.getElementById("background-header");
var bgp = document.getElementById("background-p");
var timeline = document.getElementById("timeline");
var colors = ["blue", "red", "yellow", "pink", "violet", "purple", "magenta", "teal"];
var timeline_entries = [];

class TimelineEntry {
    constructor(year, elemid) {
        this.year = year;
        this.element = document.getElementById(elemid);
        this.element.className = ".tentry";
        this.elemid = elemid;
    }

    show() {
        setupTimeline();
        this.element.style.display = "initial";
    }
}

function random(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function bgHeaderRandomColor(){
    bgheader.style.color = random(colors);
    bgp.style.border = "2px solid " + bgheader.style.color;
}

function addEvent(year, elemid){
    timeline_entries.push(new TimelineEntry(year, elemid));
}

function setupTimeline() {
    timeline_entries = timeline_entries.sort(function(a, b){return b.year-a.year});
    timeline.innerHTML = "";
    timeline_entries.forEach(function(val){
        val.element.style.display = "none";
        timeline.innerHTML += `<a id=${val.elemid}-b>${val.year}</a>`
        document.getElementById(`${val.elemid}-b`).onclick = function(){val.show()};
    });
}

addEvent(5000, "timeline-test0");
setInterval(bgHeaderRandomColor, 100);
setupTimeline();