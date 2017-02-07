var test = Rx.Observable.of(1,2,3);
test.subscribe(function(x){console.log(x);});

$('#test').html('world');