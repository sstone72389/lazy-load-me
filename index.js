// $(function() {
//     var loadedElements = 0;
//
//     $('.lazy').lazy({
//         beforeLoad: function(element){
//             console.log('image "' + stripTime(element.data('src')) + '" is about to be loaded');
//         },
//         afterLoad: function(element) {
//             loadedElements++;
//             console.log('image "' + stripTime(element.data('src')) + '" was loaded successfully');
//         },
//         onError: function(element) {
//             loadedElements++;
//             console.log('image "' + stripTime(element.data('src')) + '" could not be loaded');
//         },
//         onFinishedAll: function() {
//             console.log('finished loading ' + loadedElements + ' elements');
//             console.log('lazy instance is about to be destroyed')
//         }
//     });
// });
