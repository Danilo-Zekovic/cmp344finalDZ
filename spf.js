/*  
 * Danilo Zekovic
 * 4/1/2015
 * To create and test the graph and the shortest path
 */

load("graph2.js");

g = new Graph(7);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(0,6);
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(2,4);
g.addEdge(3,4);
g.addEdge(4,6);
g.addEdge(6,5);
g.showGraph();

print("Gally   = 0");
print("Hallec  = 1");
print("Core    = 2");
print("Rec     = 3");
print("Science = 4");
print("CC      = 5");
print("Chapel  = 6");

g.bfs(0);
var vertex = 2;  // destination
var source = 0;  // starting point
var paths = g.pathTo(source, vertex);
g.showPath(paths);
print('\n');

