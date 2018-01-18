var links = ["https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?auto=format&fit=crop&w=1050&q=80"];
links.push('https://images.unsplash.com/photo-1457410129867-5999af49daf7?auto=format&fit=crop&w=1055&q=80');
links.push('https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?auto=format&fit=crop&w=1050&q=80');
links.push('https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=1101&q=80');
links.push('https://images.unsplash.com/photo-1501820488136-72669149e0d4?auto=format&fit=crop&w=1050&q=80');
links.push('https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&w=1050&q=80');
links.push('https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?auto=format&fit=crop&w=1055&q=80');
links.push('https://images.unsplash.com/photo-1493406300581-484b937cdc41?auto=format&fit=crop&w=1050&q=80');
links.push('https://images.unsplash.com/photo-1484244233201-29892afe6a2c?auto=format&fit=crop&w=1050&q=80');
links.push('https://images.unsplash.com/photo-1492102236745-fccb3441109e?auto=format&fit=crop&w=1050&q=80');
links.push('https://images.unsplash.com/photo-1494173526771-97c89e8f8717?auto=format&fit=crop&w=752&q=80');
links.push('https://images.unsplash.com/photo-1485854407732-c0cbf1f5104e?auto=format&fit=crop&w=750&q=80');

var el = document.getElementById('insertPicturesHere');
var gallery = "";
var linkCount =0;
for (var i = 1; i < 13; i++) {

    gallery +='<div class=\"col-lg-4 col-sm-6\"><div class=\"thumbnail\"><a href=\"'+links[linkCount++] +'\"><img src=\"cat' + String(i) +'.jpeg\"></a></div></div>';
};
el.innerHTML = gallery;