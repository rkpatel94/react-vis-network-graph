import React from "react";
import Graph from "react-vis-network-graph";
import DIR from "../src/logo.svg";

const nodeData = [
  { id: 1, label: "Node 1", shape: "circularImage", image: DIR },
  { id: 2, label: "Node 2", shape: "circularImage", image: DIR },
  { id: 3, label: "Node 3", shape: "circularImage", image: DIR },
  { id: 4, label: "Node 4", shape: "circularImage", image: DIR },
  { id: 5, label: "Node 5", shape: "circularImage", image: DIR },
  { id: 6, label: "Node 6", shape: "circularImage", image: DIR },
  { id: 7, label: "Node 7", shape: "circularImage", image: DIR }
]

// console.log(network.getPositions("1"),"position");

const edgeData = [
  { from: 1, to: 2, label: "lkmlkkl" },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 7, to: 5 }
]

function App() {
  const graph = {
    nodes: nodeData,
    edges: edgeData,
    smooth: true,
    arrows: {
      shadow: true,
      to: {
        scaleFactor: 1,
      },
     
    }
  }
 
  const options = {
    physics: {enabled:false},
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