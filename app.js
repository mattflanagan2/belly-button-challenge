// Endpoint URL
const samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//getting the json data and displaying it
d3.json(samples).then(function(data){
    console.log(data);
}); 



// Fetching the JSON data and initializing the dropdown menu
function init() {
    // Creating the dropdown menu 
    let dropdownMenu = d3.select('#selDataset');

    d3.json(samples).then((data) => {
        let sampleIds = data.names;

        // Populating dropdown with sample IDs
        for (let id of sampleIds) {
            dropdownMenu.append("option").attr("value", id).text(id);
        };

        // Displaying the default sample
        let firstSample = sampleIds[0];
        makeBar(firstSample);
        makeBubble(firstSample);
        makeDemographics(firstSample);
    });
};


// Making the bar graph
function makeBar(sample) {
    d3.json(samples).then((data) => {
        let sampleData = data.samples;
        let results = sampleData.filter(id => id.id == sample);
        let firstResult = results[0];

        // Getting the first ten data values from the entire data line
        let sampleValues = firstResult.sample_values.slice(0, 10);
        let otuIds = firstResult.otu_ids.slice(0, 10);
        let otuLabels = firstResult.otu_labels.slice(0, 10);

        // Creating the bar graph 
        let trace1 = {
            x: sampleValues.reverse(),
            y: otuIds.map(id => `OTU ${id}`).reverse(),
            text: otuLabels.reverse(),
            type: 'bar',
            orientation: 'h'
        };

        let layout = { title: "Top Ten OTUs" };
        Plotly.newPlot("bar", [trace1], layout); 
    });
};

//making the Demographics info tab
function makeDemographics(sample) {
    d3.json(samples).then((data) => {
        let demoInfo = data.metadata;
        let results = demoInfo.filter(id => id.id == sample);
        let firstResult = results[0];
        console.log(firstResult);
        //selects the entire column titled sample-metadata in the html file
        d3.select('#sample-metadata').html('');

        Object.entries(firstResult).forEach(([key,value]) => {
            console.log(key, value);
            d3.select('#sample-metadata').append("h4").text(`${key}: ${value}`);
            
        });
    });
};


//using d3 to read the data from the url above named samples to make the bubble
function makeBubble(sample) {
    d3.json(samples).then((data) => {
        let sampleData = data.samples;
        let results = sampleData.filter(id => id.id == sample);
        let firstResult = results[0];

        // Defining all the variables we need for the bubble chart
        let bubbleSampleValues = firstResult.sample_values; 
        let bubbleOtuIds = firstResult.otu_ids; 
        let bubbleOtuLabels = firstResult.otu_labels; 

        // Making the actual bubble chart
        let trace2 = {
            x: bubbleOtuIds.reverse(),
            y: bubbleSampleValues.reverse(),
            text: bubbleOtuLabels.reverse(),
            mode: 'markers',
            marker: {
                size: bubbleSampleValues,
                color: bubbleOtuIds,
                colorscale: 'Earth'
            }
        };

        let bubbleLayout = {
            title: "Bacteria Count for each Sample ID",
            xaxis: { title: 'OTU ID' }
        };
        Plotly.newPlot("bubble", [trace2], bubbleLayout);
    });
};

//adding what happens when the option from the dropdown is changed
function optionChanged(entry){
    console.log(entry);
    makeBar(entry);
    makeBubble(entry);
    makeDemographics(entry);
};

init();