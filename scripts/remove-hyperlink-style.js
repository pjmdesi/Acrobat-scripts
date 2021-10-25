// Removes the style from all links in the document.
// Originally written to remove the default black rectangle that appears around links in docs exported from Figma.

// Loop through pages
for ( var p = 0; p < this.numPages; p++) {

    var b = this.getPageBox("Crop", p);
    var links = this.getLinks(p, b);
    //   console.println(links);

    // Loop through links
    for (var l = 0; l < links.length; l++) {
        links[l].borderWidth = 0;
        links[l].highlightMode = "None";
    }
}