import React from "react";
import Graph from "react-graph-vis";
import DIR from "../src/logo.svg";

function App() {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", shape: "circularImage",image: DIR + "1.png",title: "node 1 tooltip text" },
      { id: 7, label: "Node 7", shape: "circularImage",image: DIR + "1.png",title: "node 7 tooltip text" },
      { id: 2, label: "Node 2", shape: "circularImage",image: DIR + "1.png",title: "node 2 tooltip text" },
      { id: 3, label: "Node 3", shape: "circularImage",image: DIR + "1.png",title: "node 3 tooltip text" },
      { id: 4, label: "Node 4", shape: "circularImage",image: DIR + "1.png",title: "node 4 tooltip text" },
      { id: 5, label: "Node 5", shape: "circularImage",image: DIR + "1.png",title: "node 5 tooltip text" },
      { id: 6, label: "Node 6", shape: "circularImage",image: DIR + "1.png",title: "node 6 tooltip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 2, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 6 },
      { from: 7, to: 5 }
    ]
  };
 
  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };
 
    return (
    <Graph
      graph={graph}
      options={options}
    />
  );
}

export default App;