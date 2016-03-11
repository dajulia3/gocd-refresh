function loadLatestPipelineValueStreamMapPage(){
  var pipelineName = window.location.pathname.match("value_stream_map/(.*)/.*")[1];
  var pathWithoutId = window.location.pathname.match("(.*value_stream_map/.*/).*")[1];

  jQuery.get("http://localhost:8153/go/api/pipelines/"+ pipelineName + "/history").then(function(data){
     window.location.pathname =  pathWithoutId + data.pagination.total
  });
}
window.setInterval(loadLatestPipelineValueStreamMapPage, 30000);