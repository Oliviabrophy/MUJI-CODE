let pages
let position = 0
let yourname



function setup() {
    pages = selectAll(".page")
    select("#start").mousePressed(()=>{
        //spørg om brugerens navn 
       //yourname = prompt('what is your name?')
        select('#yourname').html(yourname)
        goRight()
    })
    select("#shop-1").mousePressed(()=>goRight())
    select("#shop-2").mousePressed(()=>goRight(0))
    select("#org1").mousePressed(()=>goRight())
    select("#org2").mousePressed(()=>goRight())
    select("#org3").mousePressed(()=>goRight())
    select("#room1").mousePressed(()=>goRight())
    select("#room2").mousePressed(()=>goRight())
    select("#room3").mousePressed(()=>goRight())
    select("#vibe1").mousePressed(()=>goRight())
    select("#vibe2").mousePressed(()=>goRight())
    select("#vibe3").mousePressed(()=>goRight())
    select("#slut1").mousePressed(()=>{
        select('#result').style('backgroundImage', 'url(./assets/RESULTAT.png)')
        goRight()
    })
    select("#slut2").mousePressed(()=>{
        select('#result').style('backgroundImage', 'url("./assets/slutsidewireframe.png")')
        goRight()
    })
    select("#slut3").mousePressed(()=>{
        select('#result').style('backgroundImage', 'url("./assets/slutsidewireframe.png")')
        goRight()
    })
}












//helper functions to move div's with class page 
function goRight(number){
    if(number == undefined){
        position++
    }else{
        position=number
    }
    selectAll('.page').map( e => e.style('transform', 'translateX(' + position * -100 + 'vw)') )
}

function getData(collection, doc){
    db.collection(collection).doc(doc)
    .onSnapshot( doc => {
        console.log(doc.data())
        showChart(doc.data())
    })
}

    //  UNCOMMENT THIS TO TRACK ANALYTICS PARAMETERS
    //  analytics.logEvent('trigger_name', { label_name: 'a user just fired the trigger_name dimension'});


function addData(collection, doc, data){
    // Add a new document in collection "cities"
    db.collection(collection).doc(doc).set(data)
    .then(() => {
        console.log("Document successfully written!")
    })
    .catch((error) => {
        console.error("Error writing document: ", error)
    });
}


