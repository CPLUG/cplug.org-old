function officerTile(position, name, description) {
    var html = `
      <div class="officer-tile col s12 m6 l3">
        <div class="card-panel grey lighten-5">
            <h4><b>${position}</b></h2><br>
            <h5>${name}</h3><br>
            <p>${description}</p><br>
        </div>
      </div>
    `;
    return html;
}

$("#officers").append(officerTile("President", "Jim Heald", "To be written"));
$("#officers").append(officerTile("Vice President", "Daniel Barrett", "To be written"));
$("#officers").append(officerTile("Marketing Coordinator", "Marianne Miranda", "To be written"));
$("#officers").append(officerTile("Outreach Coordinator", "Ian Fong", "To be written"));
$("#officers").append(officerTile("Webmaster", "David Heyer", "To be written"));