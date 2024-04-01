# JavaScript Challenge
## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## My Process

* First I used the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

<img width="1272" alt="Screenshot 2024-04-01 at 1 08 13 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/b85965d2-bab2-4076-9ec6-b7791c59d1e5">

* Next, I Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  * Using sample_values as the values for the bar chart.
  * Using otu_ids as the labels for the bar chart.
  * Using otu_labels as the hovertext for the chart.

<img width="1272" alt="Screenshot 2024-04-01 at 1 10 06 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/6fdea54b-9e01-4ff4-b5de-4084af5fb3df">
<img width="1272" alt="Screenshot 2024-04-01 at 1 10 17 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/9bc3650c-459f-443b-b6c7-7e703d6e28c8">

* Then, I made a bubble chart that displays each sample.
  * Using otu_ids for the x values.
  * Using sample_values for the y values.
  * Using sample_values for the marker size.
  * Using otu_ids for the marker colors.
  * Using otu_labels for the text values.
 
<img width="1305" alt="Screenshot 2024-04-01 at 1 19 53 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/902e320c-5e9b-46a0-af5c-cd125efb4669">

* Next, I displayed the sample metadata, i.e., an individual's demographic information and displayed each key-value pair from the metadata JSON object somewhere on the page.


<img width="1305" alt="Screenshot 2024-04-01 at 1 21 17 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/0c60c39a-530b-47cd-aca5-85bb2e16aee1">

* Then, I updated all the plots when a new sample is selected.

<img width="1305" alt="Screenshot 2024-04-01 at 1 23 18 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/f9a5dcff-31e3-4a00-a2d8-95e1f51f1380">


## Results
When run, the code will display the following dashboard on a webpage.
The webpage, is interactive allowing the user to select different test subjects so that their statistical information may be displayed. 

![hw02](https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/7d918001-cd5f-4123-a492-03318d8f7744)

