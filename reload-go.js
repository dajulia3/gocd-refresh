function loadLatestPipelineValueStreamMapPage(){
  var pipelineName = window.location.pathname.match("value_stream_map/(.*)/.*")[1];
  var pathWithoutId = window.location.pathname.match("(.*value_stream_map/.*/).*")[1];

  var gocdHost = window.location.host;
  jQuery.get("http://" + gocdHost + "/go/api/pipelines/"+ pipelineName + "/history").then(function(data){
     var currentPipelineId = window.location.pathname.match(".*value_stream_map/.*/(.*)")[1];
     if(currentPipelineId == null){
       return;
     }
     var latestPipelineRunId = data.pagination.total;
     if(latestPipelineRunId > parseInt(currentPipelineId)){
        window.location.pathname =  pathWithoutId + data.pagination.total
     }
  });
}

window.setInterval(loadLatestPipelineValueStreamMapPage, 5000);
