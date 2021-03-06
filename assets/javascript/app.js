
    //Source: http://healthycanadians.gc.ca/connect-connectez/data-donnees/recall-alert-rappel-avis-eng.php?wbdisable=true
    //var queryURLRecentRecalsSummary = "http://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/en"
    //   var queryURLRecentRecalsDetails = http://healthycanadians.gc.ca/recall-alert-rappel-avis/api/68318

    /*

Request Sample 
https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181120T185250Z.245d06bd93fae3b3.650dd5c0e49e6bd5f17ac6a446ae8362c5a2da91&text=%22One%20lot%20each%20of%20Option+%20Family%20Sunscreen%20Lotion%20SPF%2050+%20and%20Personnelle%20Sport%20Sunscreen%20Lotion%20SPF%2050+%20have%20been%20voluntarily%20recalled%20by%20Empack%20Spraytech%20Inc.%20because%20of%20bacterial%20contamination.\n\n%20The%20sunscreens%20were%20found%20to%20contain%20multiple%20types%20of%20bacteria:\n%3Cul%3E\n%20%3Cli%3E\n%20Lactobacillus%20brevis,%20and%3C/li%3E\n%20%3Cli%3E\n%20Either%20Micrococcus%20luteus%20%3Cstrong%3Eor%20%3C/strong%3EStaphylococcus%20hominis%20novobiosepticus%20(see%20table%20below).%3C/li%3E\n%3C/ul%3E\n\n%20Although%20Lactobacillus%20brevis%20has%20not%20been%20documented%20to%20cause%20any%20illness%20in%20humans,%20the%20other%20two%20(Micrococcus%20luteus%20or%20Staphylococcus%20hominis%20novobiosepticus)%20may%20result%20in%20infection.%20The%20risk%20may%20be%20higher%20in%20children%20and%20individuals%20with%20a%20weakened%20immune%20system.%20To%20date,%20Health%20Canada%20has%20not%20received%20any%20adverse%20reaction%20reports%20involving%20the%20recalled%20sunscreens.%22&lang=en-ru
       
Yandex API language translator documentation
https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/

JSON and JSONP interfaces
The response is returned in JSON format. If the callback parameter is set, the JSON object is wrapped in a function with the name specified in this parameter (JSONP).

Request syntax
https://translate.yandex.net/api/v1.5/tr.json/translate
 ? key=<API key>
 & text=<text to translate>
 & lang=<translation direction>
 & [format=<text format>]
 & [options=<translation options>]
 & [callback=<name of the callback function>]
Query parameters	

key *	
API key. It is issued free of charge.

text *	
The text to translate.

You can use multiple text parameters in a request.

Attention.
The source text must be URL-encoded.

Restrictions:

For POST requests, the maximum size of the text being passed is 10,000 characters.
In GET requests, the restriction applies not to the text itself, but to the size of the entire request string, which can contain other parameters besides the text.

The maximum size of the string is from 2 to 10 KB (depending on the browser version).

lang *	
The translation direction.

You can set it in either of the following ways:

As a pair of language codes separated by a hyphen (“from”-“to”). For example, en-ru indicates translating from English to Russian.
As the target language code (for example, ru). In this case, the service tries to detect the source language automatically.
format	
Text format.

Possible values:

plain - Text without markup (default value).
html - Text in HTML format.
options	
The only option available at this time is whether the response should include the automatically detected language of the text being translated. This corresponds to the value 1 for this parameter.

If the language of the text being translated is defined explicitly, meaning the lang parameter is set as a pair of codes, the first code defines the source language. This means that the options parameter does not allow switching to automatic language detection. However, it does allow you to understand whether the source language was defined correctly in the lang parameter.

callback	The name of the callback function. Use for getting a JSONP response.
*  Required

Note. All special characters must be escaped. 



Yandex API language translator documentation for getting supported languages
https://tech.yandex.com/translate/doc/dg/reference/getLangs-docpage/

Response example
https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20181120T185250Z.245d06bd93fae3b3.650dd5c0e49e6bd5f17ac6a446ae8362c5a2da91&ui=en
       

JSON and JSONP interfaces
The response is returned in JSON format. If the callback parameter is set, the JSON object is wrapped in a function with the name specified in this parameter (JSONP).

Request syntax
https://translate.yandex.net/api/v1.5/tr.json/getLangs
 ? key=<API key>
 & [ui=<language code>]
 & [callback=<name of the callback function>]
Query parameters	
key *	
API key. It is issued free of charge.

ui	
Required parameter.

In the response, supported languages are listed in the langs field with the definitions of the language codes. Language names are output in the language corresponding to the code in this parameter.

All the language codes are shown in the list of supported languages.

callback	The name of the callback function. Use for getting a JSONP response.





 
 */

 var supportedLanguages = [];
function getSupportedLanguagesYandex(sourceLanguage){

    //var queryURL = "https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20181120T185250Z.245d06bd93fae3b3.650dd5c0e49e6bd5f17ac6a446ae8362c5a2da91&ui=" & sourceLanguage;
      var queryURL = "https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20181120T185250Z.245d06bd93fae3b3.650dd5c0e49e6bd5f17ac6a446ae8362c5a2da91&ui="  + sourceLanguage;
    
        console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function (response) {
        console.log("response retreived");
       // console.log(response);

        //console.log(response.langs[key]);

        var entries = Object.entries(response.langs)
       // console.log(entries)

       entries.forEach(function (lang) {
        
        console.log(lang[0],lang[1]);
  
      });





    }); //End of Then

    return
}

getSupportedLanguagesYandex("en");



function translateTextYandex (textToTranslate, languageFrom, languageTo, format){

 var queryURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181120T185250Z.245d06bd93fae3b3.650dd5c0e49e6bd5f17ac6a446ae8362c5a2da91" ;
    

    queryURL = queryURL + "&text=" + textToTranslate;
    queryURL = queryURL + "&lang=" + languageFrom + "-" + languageTo;
    queryURL = queryURL + "&format=" + format;

    console.log(queryURL);
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
        
        }); 
}

translateTextYandex ("Hello world", "en", "ru", "plain");