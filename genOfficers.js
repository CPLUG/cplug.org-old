function officerTile(position, name, description) {
    var html = `
        <div class="officer-tile col s12 m6 l3">
            <h2><b>${position}</b></h2><br>
            <h3>${name}</h3><br>
            <p>${description}</p><br>
        </div>
    `;
    return html;
}

$("#officers").append(officerTile("President", "Jim Heald", "To be written"));
$("#officers").append(officerTile("Vice President", "Daniel Barrett", "To be written"));
$("#officers").append(officerTile("Webmaster", "", "To be written"));
$("#officers").append(officerTile("Webmaster", "David Heyer", "To be written"));
