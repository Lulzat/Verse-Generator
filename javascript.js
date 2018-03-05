// Variables
var quotes = [
    '<h3>Psalm 86:4-5</h3> <p>4 Gladden the soul of your servant, for to you, O Lord, do I lift up my soul. 5 For you, O Lord, are good and forgiving, abounding in steadfast love to all who call upon you.</p>',
    '<h3>Psalm 24:7-8</h3> <p>7 Lift up your heads, O gates! And be lifted up, O ancient doors, that the King of glory may come in. 8 Who is this King of glory? The Lord, strong and mighty, the Lord, mighty in battle!</p>',
    '<h3>Ephesians 4:26-27</h3> <p>26 Be angry and do not sin; do not let the sun go down on your anger, 27 and give no opportunity to the devil.</p>',
    '<h3>Philippians 2:9-11</h3> <p>9 Therefore God has highly exalted him and bestowed on him the name that is above every name, 10 so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, 11 and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.</p>',
    '<h3>Isaiah 61:1</h3> <p>The Spirit of the Lord God is upon me, because the Lord has anointed me to bring good news to the poor; [1] he has sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to those who are bound. . . . </p>',
    '<h3>2 Samuel 22:31</h3> <p>31 This God—his way is perfect; the word of the Lord proves true; he is a shield for all those who take refuge in him.</p>',
    '<h3>Romans 8:32</h3> <p>32 He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?</p>',
    '<h3>Numbers 23:19</h3> <p>19 God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?</p>',
    '<h3>Psalm 73:28</h3> <p>28 But for me it is good to be near God; I have made the Lord God my refuge, that I may tell of all your works.</p>',
    '<h3>Psalm 94:14-15</h3> <p>14 For the Lord will not forsake his people; he will not abandon his heritage; 15 for justice will return to the righteous, and all the upright in heart will follow it.</p>'
]

var title = [
    '<span><a href="http://biblehub.com/psalms/86-4.htm">Psalm 86:4-5 | </a></span>',
    '<span><a href="http://biblehub.com/context/psalms/24-7.htm">Psalm 24:7-8 | </a></span>',
    '<span><a href ="http://biblehub.com/context/ephesians/4-26.htm">Ephesians 4:26-27 | </a></span>',
    '<span><a href ="http://biblehub.com/context/philippians/2-9.htm">Philippians 2:9-11 | </a></span>',
    '<span><a href ="http://biblehub.com/isaiah/61-1.htm">Isaiah 61:1 | </a></span>',
    '<span><a href ="http://biblehub.com/2_samuel/22-31.htm">2 Samuel 22:31 | </a></span>',
    '<span><a href ="http://biblehub.com/romans/8-32.htm">Romans 8:32 | </a></span>',
    '<span><a href ="http://biblehub.com/romans/8-32.htm">Numbers 23:19 | </a></span>',
    '<span><a href ="http://biblehub.com/psalms/73-28.htm">Psalm 73:28 | </a></span>',
    '<span><a href ="http://biblehub.com/context/psalms/94-14.htm">Psalm 94:14-15 | </a></span</p>'
]
var verse = document.getElementById("quoteDisplay"),
    preVerse = document.getElementById("preVerse"),
    btn = document.getElementById("button");

// Functions

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var nodeList = preVerse.getElementsByTagName('span').length;
    var elements = preVerse.getElementsByTagName('span');
    
    quoteDisplay.classList.add("fade");     
        setTimeout(function(){
            quoteDisplay.classList.toggle("fade");
        }, 1200);
        setTimeout(function(){
            document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
        }, 500);
        
        if(nodeList < 5) {
            document.getElementById('preVerse').innerHTML += title[randomNumber]; 
        } else { 
            preVerse.removeChild(elements [0]);
            document.getElementById('preVerse').innerHTML += title[randomNumber];
}
}

// DO NOT TOUCH ABOVE THIS LINE -- DO NOT BREAK! IT'S ACTUALLY WORKING KIND OF //


function tempDisable(el) {
    el.disabled = true;
    setTimeout(function() {
        el.disabled = false;
    }, 1120); 
}