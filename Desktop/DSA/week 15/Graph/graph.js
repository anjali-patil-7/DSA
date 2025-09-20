class Graph{
    constructor(){
        this.graph = {}
    }
    addvertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex] = []
        }
    }
    addEdge(v1,v2){
        if(!this.graph[v1]) this.addvertex(v1)
        if(!this.graph[v2]) this.addvertex(v2)
        
        this.graph[v1].push(v2)
        this.graph[v2].push(v1)
    }
    show(){
        console.log(this.graph)
    }
    bfs(startnode){
        let visited = new Set()
        let queue = [startnode]
        
        while(queue.length > 0){
            let curr = queue.shift()
            
            if(!visited.has(curr)){
                console.log(curr)
                visited.add(curr)
                
                for(let neighbor of this.graph[curr]){
                    if(!visited.has(neighbor)){
                        queue.push(neighbor)
                    }
                }
            }
        }
    }
    
    dfs(startnode, visited = new Set()){
        if(visited.has(startnode)) return 
        
        console.log(startnode)
        visited.add(startnode)
        
        for(let neighbor of this.graph[startnode]){
            this.dfs(neighbor,visited)
        }
    }
}
const out = new Graph()
out.addvertex("A");
out.addvertex("B");
out.addvertex("C");
out.addvertex("D");
out.addvertex("E");
out.show()
out.addEdge("A","B")
out.addEdge("A","C")
out.addEdge("B","D")
out.addEdge("C",'E')
out.show()
console.log("bfs from A")
out.bfs("A")
console.log("dfs from A ")
out.dfs("A")


///..............remove vertex and remove edge
   removeVertex(vertex){
        if(!this.graph[vertex]) return
        
        for(let neighbor of this.graph[vertex]){
            this.graph[neighbor] = this.graph[neighbor].filter(val=>val !== vertex)
        }
        delete this.graph[vertex]
    }


     removeEdge(v1,v2){
        if(this.graph[v1]){
            this.graph[v1] = this.graph[v1].filter(val=>val !== v2)
        }
        if(this.graph[v2]){
            this.graph[v2] = this.graph[v2].filter(val=>val !== v1)
        }
    }
    
    //test
    out.removeVertex("B")
    out.show()
    out.removeEdge("A","C")
    out.show()

//////........................IS Graph is cyclic or not
   isCyclicUtil(node,visited,parent){
        visited.add(node)
        
        for(let neighbor of this.graph[node]){
            if(!visited.has(neighbor)){
                if(this.isCyclicUtil(neighbor,visited,node)) return true
            }else if(neighbor !== parent){
                return true
            }
        }
        return false 
    }
    isCyclic(){
        let visited = new Set()
        
        for(let vertex in this.graph){
            if(!visited.has(vertex)){
                if(this.isCyclicUtil(vertex,visited,null)) return true
            }
        }
        return false
    }
   //test
    out.addEdge("A","B")
    out.addEdge("B","C")
    out.addEdge("C","A")
    out.dfs("A")
    out.show()
    console.log(out.isCyclic())


///////.........................clone graph
    clone(){
        let newGraph = new Graph()
        
        for(let vertex in this.graph){
            newGraph.addvertex(vertex)
            for(let neighbor of this.graph[vertex]){
                newGraph.addvertex(neighbor)
                if(!newGraph.graph[vertex].includes(neighbor)){
                    newGraph.graph[vertex].push(neighbor)
                }
            }
        }
        return newGraph
    }


//test
out.addEdge("A","B")
out.addEdge("B","C")
out.addEdge("C","A")
console.log("orginal graph",out.graph)

const clone = out.clone()
console.log("cloned graph",clone.graph)


// orginal graph { A: [ 'B', 'C' ], B: [ 'A', 'C' ], C: [ 'B', 'A' ] }
// cloned graph { A: [ 'B', 'C' ], B: [ 'A', 'C' ], C: [ 'B', 'A' ] }





//......................degree of graph
 degree(){
        for(let vertex in this.graph){
            console.log(`${vertex} => Degree: ${this.graph[vertex].length}`)
        }
    }