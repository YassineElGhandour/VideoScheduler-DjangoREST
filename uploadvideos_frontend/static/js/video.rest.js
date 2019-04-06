"use strict";
function transformVideoRequest(data) {
    if (data === undefined)
        return data;

    var fd = new FormData();
    angular.forEach(data, function(value, key) {
      if (value instanceof FileList) {
        if (value.length === 1) {
          fd.append(key, value[0]);
        } else {
          angular.forEach(value, function(file, index) {
            fd.append(key + '_' + index, file);
          });
        }
      } else {
        fd.append(key, value);
      }
    });

    return fd;

}

myApp.factory('Videos', function($resource){

	return $resource('/api/videos/:id/', {'id' : '@id'} ,{
		'save' : {
			method : 'POST',
			transformRequest : transformVideoRequest,
			headers : { 'Content-type' : undefined }
		},
        'update': {
		    method: 'PUT',
            headers : { 'Content-type' : 'multipart/form-data' }
		}
	})
});