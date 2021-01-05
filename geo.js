$(function()
{
	$( "#accordion" ).accordion({collapsible:true, heightStyle: "content"});
});

var map = L.map('map').setView([37.991, 23.728], 12.5);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

//create function to set color for count (2015,2017,2018,2019,2020,Total)
function setCountColor(d) {
	return (d >= 0 && d < 60) ? '#ffffb2':
	(d >= 60 && d < 195) ? '#fecc5c':
	(d >= 195 && d < 507) ? '#fd8d3c':
	(d >= 507 && d <= 966) ? '#f03b20':
	'#bd0026';
}

//create function to set color for change % (2015_2017, 2017_2018, 2018_2019, 2019_2020)
function setChangeColor(d) {
	return (d >= -150 && d < -50) ? '#ca0020':
	(d >= -50 && d < 0) ? '#f4a582':
	(d >= 0 && d < 33) ? '#daebf7':
	(d >= 33 && d <= 67) ? '#92c5de':
	'#0571b0';
}

//create function to set color for mean price (2015, 2017, 2018, 2019, 2020 and mean_total)
function setPriceColor(d) {
	return (d >= 0 && d < 44) ? '#f1eef6':
	(d >= 44 && d < 70) ? '#d7b5d8':
	(d >= 70 && d < 100) ? '#df65b0':
	(d >= 100 && d <= 136) ? '#dd1c77':
	'#980043';
}

//style for count 2015
function Count1Style(feature) {
  return {
    fillColor: setCountColor(feature.properties.count_2015),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for count 2017
function Count2Style(feature) {
  return {
    fillColor: setCountColor(feature.properties.count_2017),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for count 2018
function Count3Style(feature) {
  return {
    fillColor: setCountColor(feature.properties.count_2018),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for count 2019
function Count4Style(feature) {
  return {
    fillColor: setCountColor(feature.properties.count_2019),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for count 2020
function Count5Style(feature) {
  return {
    fillColor: setCountColor(feature.properties.count_2020),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//--------------------------//

//style for change 2015_2017
function Change1Style(feature) {
  return {
    fillColor: setChangeColor(feature.properties.change_2017),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for change 2017_2018
function Change2Style(feature) {
  return {
    fillColor: setChangeColor(feature.properties.change_2018),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for change 2018_2019
function Change3Style(feature) {
  return {
    fillColor: setChangeColor(feature.properties.change_2019),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for change 2019_2020
function Change4Style(feature) {
  return {
    fillColor: setChangeColor(feature.properties.change_2020),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//--------------------------//

//style for price 2015
function Price1Style(feature) {
  return {
    fillColor: setPriceColor(feature.properties.pric_2015),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for price 2017
function Price2Style(feature) {
  return {
    fillColor: setPriceColor(feature.properties.pric_2017),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for price 2018
function Price3Style(feature) {
  return {
    fillColor: setPriceColor(feature.properties.pric_2018),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for price 2019
function Price4Style(feature) {
  return {
    fillColor: setPriceColor(feature.properties.pric_2019),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//style for price 2020
function Price5Style(feature) {
  return {
    fillColor: setPriceColor(feature.properties.pric_2020),
    weight: 1,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    fillOpacity: 0.75,
	fill: true,
	interactive: true
  };
}
//--------------------------//
function highlightFeature(e) {
	console.log(globalStyle);
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        color: '#f5f242',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();

    }
		info.update(layer.feature.properties);
}
function resetHighlight(e) {
	var layer = e.target;

	layer.setStyle({
			weight: 1,
			color: 'rgba(35,35,35,1.0)',
			fillOpacity: 0.75
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();

	}
	info.update();
}
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

var Layer1 = new L.geoJson(airbnb_all, {
            style: Count1Style,
			onEachFeature: onEachFeature
        }).addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method to update the control based on feature properties passed according to the selected style
info.update = function (props) {
		if (props == undefined) {
			return;
		}
		var locationName = props.neighbourh;
		console.log(props);
		
		var property = null;
		
		switch (globalStyle) {
	    case "Style1":
	      property = "count_2015";
		  this._div.innerHTML = '<h4>Πλήθος καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property]
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
	    case "Style2":
	      property = "count_2017";
		  this._div.innerHTML = '<h4>Πλήθος καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] 
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style3":
	      property = "count_2018";
		  this._div.innerHTML = '<h4>Πλήθος καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property]
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style4":
	      property = "count_2019";
		  this._div.innerHTML = '<h4>Πλήθος καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property]
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style5":
	      property = "count_2020";
		  this._div.innerHTML = '<h4>Πλήθος καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property]
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style6":
	      property = "change_2017";
		  this._div.innerHTML = '<h4>Μεταβολή πλήθους καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' %'
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style7":
	      property = "change_2018";
		  this._div.innerHTML = '<h4>Μεταβολή πλήθους καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' %'
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style8":
	      property = "change_2019";
		  this._div.innerHTML = '<h4>Μεταβολή πλήθους καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' %'
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style9":
	      property = "change_2020";
		  this._div.innerHTML = '<h4>Μεταβολή πλήθους καταλυμάτων</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' %'
        : 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style10":
	      property = "pric_2015";
		  this._div.innerHTML = '<h4>Μέση τιμή διανυκτέρευσης</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' &#8364'
		: 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style11":
	      property = "pric_2017";
		  this._div.innerHTML = '<h4>Μέση τιμή διανυκτέρευσης</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' &#8364'
		: 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style12":
	      property = "pric_2018";
		  this._div.innerHTML = '<h4>Μέση τιμή διανυκτέρευσης</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' &#8364'
		: 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style13":
	      property = "pric_2019";
		  this._div.innerHTML = '<h4>Μέση τιμή διανυκτέρευσης</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' &#8364'
		: 'Πάτα πάνω σε μία γετονιά');
	      break;
		case "Style14":
	      property = "pric_2020";
		  this._div.innerHTML = '<h4>Μέση τιμή διανυκτέρευσης</h4>' +  (props ?
        '<b>' + locationName + '</b><br />' + props[property] + ' &#8364'
		: 'Πάτα πάνω σε μία γετονιά');
	      break;
		default:
			property = "count_2015";
			break;
	  };

};
var globalStyle = "Style1";
info.addTo(map);

// Radio buttons to let the user choose the field to use for colors.
assignClickListener("Style1", onRadioClick);
assignClickListener("Style2", onRadioClick);
assignClickListener("Style3", onRadioClick);
assignClickListener("Style4", onRadioClick);
assignClickListener("Style5", onRadioClick);
assignClickListener("Style6", onRadioClick);
assignClickListener("Style7", onRadioClick);
assignClickListener("Style8", onRadioClick);
assignClickListener("Style9", onRadioClick);
assignClickListener("Style10", onRadioClick);
assignClickListener("Style11", onRadioClick);
assignClickListener("Style12", onRadioClick);
assignClickListener("Style13", onRadioClick);
assignClickListener("Style14", onRadioClick);

function assignClickListener(id, listener) {
  document.getElementById(id).addEventListener("click", listener);
}

function onRadioClick(event) {
  var target = event.currentTarget,
  selectedStyle = target.id;
  globalStyle = selectedStyle;
  console.log(selectedStyle);
  switch (selectedStyle) {
    case "Style1":
      Layer1.setStyle(Count1Style);
      break;
    case "Style2":
      Layer1.setStyle(Count2Style);
      break;
	case "Style3":
      Layer1.setStyle(Count3Style);
      break;
	case "Style4":
      Layer1.setStyle(Count4Style);
      break;
	case "Style5":
      Layer1.setStyle(Count5Style);
      break;
	case "Style6":
      Layer1.setStyle(Change1Style);
      break;
	case "Style7":
      Layer1.setStyle(Change2Style);
      break;
	case "Style8":
      Layer1.setStyle(Change3Style);
      break;
	case "Style9":
      Layer1.setStyle(Change4Style);
      break;
	case "Style10":
      Layer1.setStyle(Price1Style);
      break;
	case "Style11":
      Layer1.setStyle(Price2Style);
      break;
	case "Style12":
      Layer1.setStyle(Price3Style);
      break;
	case "Style13":
      Layer1.setStyle(Price4Style);
      break;
	case "Style14":
      Layer1.setStyle(Price5Style);
      break;
  };
}