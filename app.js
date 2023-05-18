window.onload = firstLoad();
    function firstLoad(){
        console.log("firstload");
        $(document).ready(function(){
         $("#new-quote").click(function() {
            getRandQuote();
        });
        
        $("#tweet-quote").click(function() {
            
        });

        getRandQuote();
    });
    }
    function getRandQuote(){
        var quoteArray = [{
		id: 1,
		text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
		author: "Lao Tzu"
	},
	{
		id: 2,
		text: "Do today what others won't and achieve tomorrow what others can't.",
		author: "Jerry Rice"
	},
	{
		id: 3,
		text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
		author: "Henry Wadsworth Longfellow"
	},
	{
		id: 4,
		text: "If we don't discipline ourselves, the world will do it for us.",
		author: "William Feather"
	},
	{
		id: 5,
		text: "Rule your mind or it will rule you.",
		author: "Horace"
	},
	
];

var randomQuote = quoteArray[Math.floor(Math.random() * (quoteArray.length))];
console.log(randomQuote);
$("#text").html(randomQuote.text);
$("#author").html(randomQuote.author);
$("#tweet-quote").attr("href", strToUrlTweetConvertor('"' + randomQuote.text + '" - ' + randomQuote.autor));

    }
    function strToUrlTweetConvertor(str){
        var tweetUrl = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
        var finalUrl = "https://twitter.com/intent/tweet?text=" + tweetUrl;
        return finalUrl;
    }
    

 