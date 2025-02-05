function generateTable(divIdentifier, csvFileName) {
    d3.csv(csvFileName, function(data) {
        var table = d3.select("#" + divIdentifier).append("table");
        var thead = table.append("thead");
        var tbody = table.append("tbody");

        // Append the header row
        thead.append("tr")
            .selectAll("th")
            .data(d3.keys(data[0]))
            .enter()
            .append("th")
            .text(function(d) { return d; });

        // Create a row for each object in the data
        var rows = tbody.selectAll("tr")
            .data(data)
            .enter()
            .append("tr");

        // Create a cell in each row for each column
        var cells = rows.selectAll("td")
            .data(function(row) {
                return d3.values(row);
            })
            .enter()
            .append("td")
            .text(function(d) { return d; });
    });
}