function dinner() {
  var dinnerSelection = $('#myDropdown :selected').val();
  console.log(dinnerSelection)


  var wines = [{
                        name: "The Prisoner",
                        winery: "The Prisoner Wine Company",
                        varietal: "Red blend",
                        vintage: 2014,
                        price: 47,
                        tastingNotes: "Bing cherry, espresso, and roasted fig",
                        pairsWith: ["lamb", "beef"],
                        label: "images/the_prisoner.jpg"
                        },
               {
                        name: "Eola Amity Hills",
                        winery: "Evening Land Vineyards",
                        varietal: "Pinot Noir",
                        vintage: 2013,
                        price: 40,
                        tastingNotes: "Approachable red fruits, lush and soft mouthfeel that offers immediate pleasure",
                        pairsWith: ["salmon", "chicken"],
                        label: "images/EAHfrontlabel.jpg"
                          },
               {
                        name: "Sancerre Chavignol Cuvée Buster",
                        winery: "Thomas-Labaille",
                        varietal: "Sauvignon Blanc",
                        vintage: 2014,
                        price: 43,
                        tastingNotes: "Stone, citrus, white fruits, and herbs",
                        pairsWith: ["shrimp", "lobster"],
                        label: "images/sancerre_cuvee_buster.jpg"
                          },
              ];

  var matches = []
  for(i=0; i<wines.length; i++){
    for(j=0; j<wines[i].pairsWith.length; j++){
      if(wines[i].pairsWith[j] == dinnerSelection){
        matches.push(wines[i].name)
        $("#winePaired").empty();
        var winery = wines[i].winery;
        $("#winePaired").append("<h2>Enjoy this wine tonight!</h2><h3>" + winery + "</h3>");
        var name = wines[i].name;
        $('#winePaired').append("<h4>" + name + "</h4>");
        var varietal = wines[i].varietal;
        $("#winePaired").append("<h4>" + varietal + "</h4>");
        var vintage = wines[i].vintage;
        $("#winePaired").append("<h4>" + vintage + "</h4>");
        var price = wines[i].price;
        $("#winePaired").append("<h4>$" + price + "</h4>");
        var tastingNotes = wines[i].tastingNotes;
        $("#winePaired").append("<h4>Tasting notes: " + tastingNotes + "</h4>");
        var label = wines[i].label;
        $('#label').attr("src", label);
      }
    }
  }
  console.log(matches)
}
