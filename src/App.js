import React from "react";
import ReactImageAnnotate from "react-image-annotate";

const App = () => (
  <ReactImageAnnotate
    labelImages
    regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
    regionTagList={["tag1", "tag2", "tag3"]}
    images={[
      {
        src:
          "https://4.imimg.com/data4/FQ/NP/MY-909762/student-id-cards-500x500.jpg",
        name: "Image 1",
        regions: []
      }
    ]}
  />
);

export default App;
