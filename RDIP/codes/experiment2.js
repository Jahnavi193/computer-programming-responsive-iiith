var A1 =["John ate an apple before afternoon",
"some students like to study in the night",
"John and Mary went to church",
"John went to church after eating",
"did he go to market",
"the woman who called my sister sells cosmetics",
"John goes to the library and studies",
"John ate an apple so did she",
"the teacher returned the book after she noticed the error",
"I told her that I bought a book yesterday"]


var B1=[["John ate an apple before afternoon",
"before afternoon John ate an apple",
"John before afternoon ate an apple"],

["some students like to study in the night",
"at night some students like to study"],

["John and Mary went to church",
"Mary and John went to church"],

["John went to church after eating",
"after eating John went to church",
"John after eating went to church"],
["did he go to market",
"he did go to market"],

["the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics"],

["John goes to the library and studies",
"John studies and goes to the library"],

["John ate an apple so did she",
"she ate an apple so did John"],

["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"],

["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her"	,
"yesterday I bought a book that I told her"]]

var A2=["राम और श्याम बाजार गयें",
"राम सोया और श्याम भी",
"मैंने उसे बताया कि राम सो रहा है",
"राम खाकर सोया",
"बिल्लियों को मारकर कुत्ता सो गया",
"एक लाल किताब वहाँ है",
"एक बड़ी सी किताब वहाँ है"]

var B2=[["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"],

["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"],

["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"],

["राम खाकर सोया","खाकर राम सोया",
"राम सोया खाकर","खाकर सोया राम",
"सोया राम खाकर","सोया खाकर राम"],

["बिल्लियों को मारकर कुत्ता सो गया",
"मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता",
"मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर",
"कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को"],

["एक लाल किताब वहाँ है",
"एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब",
"है वहाँ एक लाल किताब"],

["एक बड़ी सी किताब वहाँ है",
"एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है",
"बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब",
"वहाँ है बड़ी सी एक किताब"]];
 
function reform()
{
  for(i=0;i<array1.length;i++)
  {
    if(document.getElementById('button'+i).style.visibility=="hidden")
        {
                document.getElementById ('button'+i).style.visibility="visible";
        }
    
        document.getElementById ("four").innerHTML=""

        document.getElementById ("five").innerHTML=""

        document.getElementById ("r1").innerHTML=""

        document.getElementById ("r2").innerHTML=""

        document.getElementById ("eight").innerHTML = "Get Correct Sentence"

        document.getElementById ("six").style.visibility="hidden";
        
        document.getElementById ("seven").style.visibility="hidden";

        document.getElementById ("eight").style.visibility="hidden";
}
}
function lang1()
{   
    total=0

        document.getElementById ("three").innerHTML=""

        document.getElementById ("four").innerHTML=""

        document.getElementById ("five").innerHTML=""

        document.getElementById ("r1").innerHTML=""

        document.getElementById ("r2").innerHTML=""

        document.getElementById ("eight").innerHTML = "Get Correct Sentence"

        document.getElementById ("six").style.visibility="hidden";

        document.getElementById ("seven").style.visibility="hidden";

        document.getElementById ("eight").style.visibility="hidden";

	if(document.getElementById("English").selected)
	{
		Sent = A1;
		d=10;
		crt=B1;
	}
	else if(document.getElementById("Hindi").selected)
	{
		Sent = A2;
		d=7;
		crt=B2;
	}
	else
	{
		document.getElementById("one").innerHTML=""

		document.getElementById("two").innerHTML=""

		document.getElementById("three").innerHTML=""

		return;
	}



	let body = document.getElementsByTagName("p")[3];

	document.getElementById("one").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words";

	document.getElementById("two").innerHTML="(select the buttons in proper order)";
	
	rand1=Math.floor(Math.random()*d);


	rand2=crt[rand1][0];

    array1=rand2.split(" ");
	
	for(i=0;i<array1.length;i++)
    {
	j=Math.floor(Math.random()*array1.length)

	temp=array1[i];

	array1[i]=array1[j]

    array1[j]=temp;
    }
	
for(i=0;i<array1.length;i++)
{
  let button = document.createElement("button");

  button.id='button'+i;

  button.innerHTML = array1[i]

  body.appendChild(button);   

    button.addEventListener ("click", function()
	{
	document.getElementById("four").innerHTML=

	"Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";

    document.getElementById("five").innerHTML+=this.innerHTML+" ";

    this.style.visibility="hidden";

    total=total+1;

    if (total>0 ) 
     {
     	document.getElementById("six").style.visibility="visible";
     }
	 
    var strorg=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');

    strarr=strorg.split(" ")

    if(array1.length==strarr.length)

     {
     	document.getElementById("seven").style.visibility="visible";
     }
});
}
}
function check()
{

  var strobt=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');
  
  var break_flag=0;
  
  
  for(i=0;i<d;i++)
  {
	  
	document.getElementById("r2").innerHTML=""

	document.getElementById("eight").innerHTML = "Get Correct Sentence"
	
	document.getElementById("eight").style.visibility="hidden";

	  for(j=0;j<crt[i].length;j++){

		  if(strobt==crt[i][j]){

			  document.getElementById("r1").innerHTML=

			  "<span style='color:green;font-size:30px'>Right answer!!!</span>"

			  break_flag=1;

			  break;
		  }
	  }
	  if(break_flag==1)
	  {
		  break;
	  }
		  
  }
  
  if(break_flag==0)
  {
	   document.getElementById("r1").innerHTML=

	   "<span style='color:red;font-size:30px'>Wrong answer!!!</span>"

	   document.getElementById("eight").style.visibility="";
  }
	  
  }
  
  function toggle()
  {
	  var correct="";
	  
	  if(document.getElementById("eight").innerHTML == "Get Correct Sentence"){
		  
		  for(i=0;i<d;i++){

			  if(rand2==crt[i][0]){

				  for(j=0;j<crt[i].length;j++){

					correct += crt[i][j]+"<br>";

				  }
				  document.getElementById("r2").innerHTML=correct;

				  document.getElementById("eight").innerHTML="Hide the correct Sentence";

				  break;
				}
			}
		}
	  else if(document.getElementById("eight").innerHTML == "Hide the correct Sentence"){

		  document.getElementById("r2").innerHTML="";
		  
		  document.getElementById("eight").innerHTML="Get Answers";

	  }
	  else if(document.getElementById("eight").innerHTML == "Get Answers"){

		  for(i=0;i<d;i++){

			  if(rand2 == crt[i][0]){

				  for(j=0;j<crt[i].length;j++){

					correct += crt[i][j]+"<br>";

				  }

				  document.getElementById("r2").innerHTML=correct;

				  document.getElementById("eight").innerHTML="Hide the correct Sentence";

				  break;
				}
			}
	  }
  }