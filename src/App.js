import React from "react";
import ReactImageAnnotate from "react-image-annotate";

const App = () => (
  <ReactImageAnnotate
    labelImages
    regionClsList={["Alpha", "Beta", "InvoiceNumber", "Charlie", "Delta"]}
    regionTagList={["tag1", "tag2", "tag3"]}
    images={[
      {
        src:
          "https://templates.invoicehome.com/invoice-template-us-neat-750px.png",
        name: "Image 1",
        regions: []
      }
    ]}
  />
);

export default App;
